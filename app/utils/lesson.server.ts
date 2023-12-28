import { prisma } from "./prisma.server";

export async function getLessons() {
  return await prisma.lesson.findMany();
}
