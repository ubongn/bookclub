import React, { useState } from "react";
import Select from "react-select";
import Layout from "../pageparts/Layout";
import Router from "next/router";
import { GetStaticProps } from "next";
import { PrismaClient } from "@prisma/client";
import { Box } from "@chakra-ui/react";
import { useSession, getSession } from "next-auth/client";
const prisma = new PrismaClient();

type PostProps = {
  id: Number;
  name: String;
};

type Props = {
  feed: PostProps[];
};

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.categories.findMany({});
  return {
    props: { feed },
  };
};

const Draft: React.FC<Props> = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [cat, setCat] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content, url, image, cat };
      // await fetch(`http://localhost:3000/api/post`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body),
      // });
      // await Router.push("/drafts");

      alert(JSON.stringify(body  ));
    } catch (error) {
      console.error(error);
    }
  };




  const [session] = useSession();

  if (!session) {
    return (
      <>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </>
    );
  }

  return (
    <Layout>
      <Box maxW="75%" m="0 auto">
        <form onSubmit={submitData}>
          <h1>New Book</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />

          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Description"
            rows={8}
            value={content}
          />

          <input
            autoFocus
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Url"
            type="text"
            value={url}
          />

          <input
            autoFocus
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image Url"
            type="text"
            value={image}
          />

          <select onChange={(e) => setCat(e.target.value)}>
            {props.feed.map((cat) => (
              <>
                <option value={cat.name}>{cat.name}</option>
              </>
            ))}
          </select>

          <input disabled={!content || !title} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </Box>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;
