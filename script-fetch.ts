import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const salesIndents = await prisma.salesIndent.findMany();
  console.log(salesIndents);
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
