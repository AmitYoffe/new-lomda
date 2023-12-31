import { Box, Container, Link, ThemeProvider } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import React, { useState } from "react";
import NewLesson from '~/LessonComponents/HierarchyCreation/NewLesson';
import NewTopic from "~/LessonComponents/HierarchyCreation/NewTopic";
import LessonList from "~/LessonComponents/Lists/LessonList";
import TopicList from "~/LessonComponents/Lists/TopicList";

import type { Lesson, Question, Topic } from "@prisma/client";
import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { theme } from "~/components/theme";
import { getLessons } from "~/utils/lesson.server";
import { getQuestions } from "~/utils/question.server";
import { getTopics } from "~/utils/topic.server";

type LoaderType = {
  topics: Array<Topic>;
  lessons: Array<Lesson>;
  questions: Array<Question>
}

export async function loader({ request }: LoaderArgs): Promise<LoaderType> {
  const topics = await getTopics();
  const lessons = await getLessons();
  const questions = await getQuestions();
  // i need to restructure the component so that i can pass these getTopics/lessons/questions dynamically through this file maybe
  return { topics, lessons, questions }
}

interface BreadCrumbsProps {
  selectedComponent: string;
  onBreadcrumbClick: (componentName: string) => void;
}

interface Breadcrumb {
  label: string;
  componentName: string;
  parent?: Breadcrumb;
  children?: Breadcrumb[];
}

const breadcrumbHierarchy: Breadcrumb[] = [
  {
    label: "נושא", componentName: "TopicList",
    children: [
      { label: "יצירת נושא", componentName: "NewTopic" },
      {
        label: "שיעור", componentName: "LessonList",
        children: [
          { label: "יצירת שיעור", componentName: "NewLesson" },
          {
            label: "שאלה", componentName: "QuestionList",
            children: [{ label: "יצירת שאלה", componentName: "NewQuestion" }],
          },
        ],
      },
    ],
  },
];

const getParent = (breadcrumbs: Breadcrumb[], componentName: string): Breadcrumb | undefined => {
  for (const breadcrumb of breadcrumbs) {
    if (breadcrumb.children) {
      const child = breadcrumb.children.find(
        (childBreadcrumb) => childBreadcrumb.componentName === componentName
      );

      if (child) {
        return breadcrumb;
      } else {
        const parent = getParent(breadcrumb.children, componentName);
        if (parent) {
          return parent;
        }
      }
    }
  }

  return undefined;
};

// Populate parent property dynamically
const populateParentProperty = (breadcrumbs: Breadcrumb[]) => {
  for (const breadcrumb of breadcrumbs) {
    if (breadcrumb.children) {
      for (const child of breadcrumb.children) {
        child.parent = breadcrumb;
      }
      populateParentProperty(breadcrumb.children);
    }
  }
};

populateParentProperty(breadcrumbHierarchy);

const BreadCrumbsComponent: React.FC<BreadCrumbsProps> = ({
  selectedComponent,
  onBreadcrumbClick,
}) => {
  const findBreadcrumb = (breadcrumbs: Breadcrumb[], componentName: string): Breadcrumb | undefined => {
    for (const breadcrumb of breadcrumbs) {
      if (breadcrumb.componentName === componentName) {
        return breadcrumb;
      }
      if (breadcrumb.children) {
        const foundChild = findBreadcrumb(breadcrumb.children, componentName);
        if (foundChild) {
          return foundChild;
        }
      }
    }
    return undefined;
  };

  const getVisibleBreadcrumbs = (): Breadcrumb[] => {
    const selectedBreadcrumb = findBreadcrumb(breadcrumbHierarchy, selectedComponent);
    return selectedBreadcrumb ? [...getAncestors(selectedBreadcrumb), selectedBreadcrumb] : [];
  };

  const getAncestors = (breadcrumb: Breadcrumb): Breadcrumb[] => {
    const ancestors: Breadcrumb[] = [];
    let currentBreadcrumb = breadcrumb;

    while (currentBreadcrumb.parent) {
      ancestors.unshift(currentBreadcrumb.parent);
      currentBreadcrumb = currentBreadcrumb.parent;
    }

    return ancestors;
  };

  const handleBreadcrumbClick = (breadcrumb: { componentName: string }) => {
    onBreadcrumbClick(breadcrumb.componentName);
  };

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ color: 'white', cursor: 'pointer' }}>
      {getVisibleBreadcrumbs().map((breadcrumb, index) => (
        <Link
          underline="hover"
          key={index}
          color="#ffa111"
          onClick={() => handleBreadcrumbClick(breadcrumb)}
        >
          {breadcrumb.label}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

function BuildLesson() {
  const { topics, lessons, questions } = useLoaderData<LoaderType>()
  const [selectedComponent, setSelectedComponent] = useState("TopicList");

  const handleComponentChange = (componentName: string) => {
    setSelectedComponent(componentName);
  };

  const handleBreadCrumbClick = (componentName: string) => {
    setSelectedComponent(componentName);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: 'flex',
          width: '100vm',
          hegith: '100vh',
          overflow: "hidden",
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#235390',
          color: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'full',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            paddingX: 4,
            paddingY: 16,
            md: {
              flexDirection: 'row',
              gap: 36,
            },
          }}
        >
          <Box>
            {/* <SideBar selectedTab={"מפעל השיעורים"} />
          <BottomBar selectedTab={"מפעל השיעורים"} /> */}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{
              position: 'fixed',
              top: 3,
              right: 60,
              paddingRight: 10,
            }}>
              <BreadCrumbsComponent
                onBreadcrumbClick={handleBreadCrumbClick}
                selectedComponent={selectedComponent}
              />
            </Box>
            <Box>
              <Box sx={{ width: "100%", overflow: "hidden", alignItems: 'center' }}>
                {/* rendering of components */}
                {selectedComponent === "TopicList" && (
                  <TopicList onButtonClick={(componentName: string) => handleComponentChange(componentName)} dataRow={topics} />
                )}
                {selectedComponent === "NewTopic" && (
                  <NewTopic onButtonClick={(componentName: string) => handleComponentChange(componentName)} />
                )}
                {selectedComponent === "LessonList" && (
                  <LessonList onButtonClick={(componentName: string) => handleComponentChange(componentName)} />
                )}
                {selectedComponent === "NewLesson" && (
                  <NewLesson onButtonClick={(componentName: string) => handleComponentChange(componentName)} />
                )}
                {/* Add more components as needed */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default BuildLesson;


// export async function action({ request }: ActionArgs) {
//   const formData = await request.formData();
//   // const userId = 1;
//   const { _action, ...rest } = Object.fromEntries(formData)

//   switch (_action) {
//     case 'appClicked': {
//       const { appId } = rest
//       // TODO: get real user
//       const userId = await getUser();
//       await updateAppClick(Number(appId), userId)
//       break;
//     }
//     case 'dashboardClicked': {
//       const { dashboardId } = rest
//       // TODO: get real user
//       const userId = await getUser();
//       await updateDashboardClick(Number(dashboardId), userId)
//       break;
//     }
//     case 'createContact': {
//       const body = rest as never as Contact;
//       const { formData, errors } = await validationAction<createContactInput>({
//         body,
//         schema: createContactSchema,
//       });

//       if (errors) {
//         return json({ errors }, { status: 400 });
//       }
//       // TODO: get real user
//       const userId = 1
//       await createContact(formData as Contact, userId)
//       break;
//     }
//     case 'updateContact': {
//       const body = rest as never as Contact;
//       const { formData, errors } = await validationAction<updateContactInput>({
//         body,
//         schema: updateContactSchema,
//       });

//       if (errors) {
//         return json({ errors }, { status: 400 });
//       }

//       const { id, ...updatedContact } = formData
//       // TODO: get real user
//       const userId = 1
//       await updateContact(id, updatedContact as Contact, userId)
//       break;
//     }
//     default:
//       break;
//   }
//   return null;
// }