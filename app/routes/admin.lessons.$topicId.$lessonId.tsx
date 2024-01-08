import type { GridColDef } from '@mui/x-data-grid';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import FullFeaturedCrudGrid from '~/LessonComponents/DataGrid';
import { getQuestionsByLessonId } from '~/utils/question.server';

export async function loader({ params }: LoaderFunctionArgs) {
  const { lessonId } = params
  const questions = await getQuestionsByLessonId(Number(lessonId))

  return { questions }
}

export default function QuestionList() {
  const { questions } = useLoaderData<typeof loader>();

  const columns: GridColDef[] = [
    { field: 'text', headerName: 'שם שאלה', width: 180, editable: true },
    { field: 'updatedAt', headerName: 'נערך לאחרונה', width: 180, editable: false },
  ]

  return (
    <>
      <div>
        <FullFeaturedCrudGrid editable rows={questions} setRows={(oldRows) => { }} columnProps={columns} />
      </div>
    </>
  )
}
