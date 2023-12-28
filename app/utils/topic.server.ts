import { Topic } from "@prisma/client";
import { prisma } from "./prisma.server";

export async function getTopics() {
  return await prisma.topic.findMany();
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