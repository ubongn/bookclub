import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import Topsection from "./Topsection";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import Books from "./Books";
import New from "./New";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);


const New2 = () => {
  return (
    <div>
      New 2
    </div>
  );
}




const Header = (props) => {
  const [session, loading] = useSession();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        color="bookclub.200"
        maxW={{ base: "" }}
        {...props}
      >
        <Flex align="center" mr={5}>+
          <Heading
            textAlign="center"
            as="h1"
            size="sm"
            letterSpacing={"-.1rem"}
          >
            1765 CHRISTIAN <br /> LIBRARY
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="black"
            width="14px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ sm: show ? "block" : "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          <MenuItems>
            <Link href="/">
              <a>Home</a>
            </Link>
          </MenuItems>
          <MenuItems>
            <Link href="/books">
              <a>Books</a>
            </Link>
          </MenuItems>
          <MenuItems>Articles</MenuItems>
          <MenuItems>About us</MenuItems>
          <MenuItems>Contact us</MenuItems>
        </Box>

        <Box
          display={{ sm: show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          {!session && (
            <Button bg="bookclub.100" color="white" onClick={signIn}>
              Log in
            </Button>
          )}
          {session && (
            <Button bg="bookclub.100" color="white" onClick={signOut}>
              Log out
            </Button>
          )}
        </Box>
      </Flex>
      {!session && <Topsection show={show} />}
      {!session && <New/>}

      {session && (
           <Books/>
          )}
    </>
  );
};

export default Header;
