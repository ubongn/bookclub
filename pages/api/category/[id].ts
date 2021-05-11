import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// DELETE /api/post/:id
export default async function handle(req, res) {
  const postId = req.query.id;
  if (req.method === "GET") {
    const post = await prisma.categories.findOne({
      where: { id: Number(postId) },
      include:{
          book:true
      }
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
