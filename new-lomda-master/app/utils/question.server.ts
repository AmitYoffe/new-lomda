import { prisma } from "./prisma.server";

export async function getQuestions() {
  return await prisma.question.findMany();
}

export async function getQuestionsByLessonId(lessonId: number) {
  return await prisma.question.findMany({
    where: {
      lessonId: lessonId,
    }
  });
}
