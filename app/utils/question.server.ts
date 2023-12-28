import { prisma } from "./prisma.server";

export async function getQuestions() {
  return await prisma.question.findMany();
}
