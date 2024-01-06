import { prisma } from "./prisma.server";

export async function getTopics() {
  return await prisma.topic.findMany({
    include: {
      _count: {
        select: {
          Lessons: true,
        }
      }
    }
  });
}

// export async function createTopic(
//   topic: Omit<Topic, "id">,
// ) {
//   return await prisma.topic.create({
//     data: {
//       ...topic,
//     },
//   });
// }