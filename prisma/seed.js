import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const arr = [
    { CTGRY_NM: "Drama", CTGRY_TY: "ETM" },
    { CTGRY_NM: "Entertainment", CTGRY_TY: "ETM" },
    { CTGRY_NM: "Movie", CTGRY_TY: "ETM" },
    { CTGRY_NM: "Music", CTGRY_TY: "ETM" },
    { CTGRY_NM: "Dance", CTGRY_TY: "ETM" },
    { CTGRY_NM: "Animation", CTGRY_TY: "ETM" },
    { CTGRY_NM: "Cartoon/Webtoon", CTGRY_TY: "ETM" },
    { CTGRY_NM: "Documentary", CTGRY_TY: "ETM" },
    { CTGRY_NM: "News", CTGRY_TY: "ETM" },
    { CTGRY_NM: "Sports", CTGRY_TY: "ETM" },

    { CTGRY_NM: "Theater", CTGRY_TY: "PFM" },
    { CTGRY_NM: "Musical", CTGRY_TY: "PFM" },
    { CTGRY_NM: "Exhibition", CTGRY_TY: "PFM" },
    { CTGRY_NM: "Festival", CTGRY_TY: "PFM" },
    { CTGRY_NM: "Opera", CTGRY_TY: "PFM" },
    { CTGRY_NM: "Classic", CTGRY_TY: "PFM" },
    { CTGRY_NM: "Literature", CTGRY_TY: "PFM" },
    { CTGRY_NM: "Concert", CTGRY_TY: "PFM" },

    { CTGRY_NM: "Fishion", CTGRY_TY: "LFS" },
    { CTGRY_NM: "Beauty", CTGRY_TY: "LFS" },
    { CTGRY_NM: "Shopping", CTGRY_TY: "LFS" },
    { CTGRY_NM: "Game", CTGRY_TY: "LFS" },
    { CTGRY_NM: "Food", CTGRY_TY: "LFS" },
    { CTGRY_NM: "Travel", CTGRY_TY: "LFS" },
    { CTGRY_NM: "Photo", CTGRY_TY: "LFS" },
    { CTGRY_NM: "Animal", CTGRY_TY: "LFS" },
    { CTGRY_NM: "Tech", CTGRY_TY: "LFS" },
    { CTGRY_NM: "Car", CTGRY_TY: "LFS" },
    { CTGRY_NM: "Investment", CTGRY_TY: "LFS" },
  ];

  await prisma.iTR_TB.createMany({
    data: arr,
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
