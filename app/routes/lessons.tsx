import type { GridColDef } from "@mui/x-data-grid";
import { useLoaderData } from "@remix-run/react";
import FullFeaturedCrudGrid from "~/LessonComponents/DataGrid";
import { getTopics } from "~/utils/topic.server";

export async function loader() {
  const topics = await getTopics();
  const topicWithLessonsCount = topics.map((topic) => {
    return { ...topic, _count: topic._count.Lessons };
  });

  return { topics: topicWithLessonsCount };
}

export default function TopicList() {
  const { topics } = useLoaderData<typeof loader>();

  const columns: GridColDef[] = [
    { field: "name", headerName: "שם נושא", width: 180, editable: true },
    {
      field: "updatedAt",
      headerName: "נערך לאחרונה",
      width: 180,
      editable: false,
    },
    {
      field: "_count",
      headerName: "מספר שיעורים",
      width: 180,
      editable: false,
    },
  ];

  return (
    <>
      <div>
        <FullFeaturedCrudGrid
          editable
          rows={topics}
          setRows={(oldRows) => {}}
          columnProps={columns}
        />
      </div>
    </>
  );
}
