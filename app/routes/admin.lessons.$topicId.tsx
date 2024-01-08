import type { GridColDef } from '@mui/x-data-grid';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import FullFeaturedCrudGrid from '~/LessonComponents/DataGrid';
import { getLessonsByTopicId } from '~/utils/lesson.server';

export async function loader({ params }: LoaderFunctionArgs) {
  const { topicId } = params
  const lessons = await getLessonsByTopicId(Number(topicId))
  const lessonsWithQuestionsCount = lessons.map((lesson) => { return { ...lesson, _count: lesson._count.Questions } });

  return { lessons: lessonsWithQuestionsCount }
}

export default function LessonsList() {
  const { lessons } = useLoaderData<typeof loader>();

  const columns: GridColDef[] = [
    { field: 'name', headerName:  'שם שיעור', width: 180, editable: true },
    { field: 'updatedAt', headerName: 'נערך לאחרונה', width: 180, editable: false },
    { field: '_count', headerName: 'מספר שאלות', width: 180, editable: false },
  ]

  return (
    <>
      <div>
        <FullFeaturedCrudGrid editable rows={lessons} setRows={(oldRows) => { }} columnProps={columns} />
      </div>
    </>
  )
}
