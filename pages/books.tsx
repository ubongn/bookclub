import {
  Box,
  Button,
  Flex,
  Stack,
  Image,
  Heading,
  Center,
} from "@chakra-ui/react";
import Layout from "../pageparts/LayoutAuth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { session, signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

const books = () => {
  const [session, loading] = useSession();
  const [options, setOptions] = useState([
    {
      id: 1,
      name: "Faith",
    },
  ]);

  const [options2, setOptions2] = useState([
    {
      id: 1,
      name: "Alphabetically",
    },

    {
      id: 2,
      name: "Descending",
    },
  ]);

  const [selectedOption2, setSelectedOption2] = useState(1);

  const [selectedOption, setSelectedOption] = useState(1);
  const [filterdBooks, setFilterdBooks] = useState([]);
  const [shoot, setShoot] = useState(false);

  const router = useRouter();

  async function fetchCats(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    const results = fetchCats(
      `http://localhost:3000/api/agg/${selectedOption2}`
    )
      .then((res) => {
        setFilterdBooks(res);
        console.log(res, "cats books");
      })
      .catch((e) => console.log(e));
  }, [selectedOption2]);

  useEffect(() => {
    const results = fetchCats(`http://localhost:3000/api/books`)
      .then((res) => {
        setFilterdBooks(res);
        console.log(res, "allboks");
      })
      .catch((e) => console.log(e));
  }, [shoot]);

  useEffect(() => {
    const results = fetchCats(
      `http://localhost:3000/api/category/${selectedOption}`
    )
      .then((res) => {
        setFilterdBooks(res.book);
        console.log(res, "cats books");
      })
      .catch((e) => console.log(e));
  }, [selectedOption]);

  useEffect(() => {
    const results = fetchCats(`http://localhost:3000/api/cats`)
      .then((res) => {
        setOptions(res);
        // console.log(res)
      })
      .catch((e) => console.log(e));
  }, [options]);

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]);

  return (
    <Layout>
      <Flex maxW="80%" m="0 auto" justifyContent="space-between">
        <Box>
          <Button onClick={() => setShoot(!shoot)}>
            <Link href="/books">
              <a>All Books</a>
            </Link>
          </Button>
        </Box>

        <Box display="flex" flexDir="row" justifyContent="space-evenly">
          <Box width="30%">
            <label>Filter by:</label>
            <select
              id="sl"
              name="ops"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {options.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.name}
                </option>
              ))}
            </select>
          </Box>
          <Box width="30%">
            <label>Sort by:</label>
            <select
              id="sl"
              name="ops"
              value={selectedOption2}
              onChange={(e) => setSelectedOption2(e.target.value)}
            >
              {options2.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.name}
                </option>
              ))}
            </select>
          </Box>
        </Box>
      </Flex>
      <Flex
        flex="row"
        flexWrap="wrap"
        justifyContent="space-between"
        width="80%"
        margin="100px auto"
      >
        {filterdBooks.map((book) => {
          return (
            <Box key={book.id}>
              <Stack direction="column">
                <Center>
                  <Heading fontSize="md">{book.title}</Heading>
                </Center>
                <Box height="300px" width="200px">
                  <Image src={book.image} alt={book.title} />
                </Box>
                <Center>
                  <Link href={book.url}>Download</Link>
                </Center>
              </Stack>
            </Box>
          );
        })}
      </Flex>
      <style jsx>
        {`
          select {
            width: 300px;
            height: 20px;
            background-color: #e1e8f0;
            font-weight: 12px;
          }
        `}
      </style>
    </Layout>
  );
};

export default books;
