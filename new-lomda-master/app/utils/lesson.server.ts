import { prisma } from "./prisma.server";


export async function getLessonsByTopicId(topicId: number) {
  return await prisma.lesson.findMany({
    include: {
      _count: {
        select: {
          Questions: true,
        }
      }
    }
  });
}

export async function getLessons() {
  return await prisma.lesson.findMany();
}
