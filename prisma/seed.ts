import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const allTodos = await prisma.todo.create({
    data: {
      title: "Sample Todo",
      description: "This is a sample todo item.",
      completed: false,
    },
  });

  console.log(allTodos);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
