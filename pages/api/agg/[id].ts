import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// DELETE /api/post/:id
export default async function handle(req, res) {
  const orderby = req.query.id == 1 ? "asc" : "desc"

  if (req.method === "GET") {
    const post = await prisma.books.findMany({
        orderBy: {
            title: orderby,
          }
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
