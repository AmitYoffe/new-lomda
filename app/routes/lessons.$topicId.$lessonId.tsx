import type { GridColDef } from '@mui/x-data-grid';
import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import FullFeaturedCrudGrid from '~/LessonComponents/DataGrid';
import { getQuestionsByLessonId } from '~/utils/question.server';

export async function loader({ params }: LoaderArgs) {
  const { lessonId } = params
  const questions = await getQuestionsByLessonId(Number(lessonId))

  return { questions }
}

export default function QuestionList() {
  const { questions } = useLoaderData();

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
