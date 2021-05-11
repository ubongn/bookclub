import { useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  Center,
  Box,
  Text,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Flex,

} from "@chakra-ui/react";
import Link from "next/link";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

export default function Signup() {
  const { handleSubmit, errors, register } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  function validateName(value) {
    let error;
    if (!value) {
      error = "Full name is required";
    }
    return error || true;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    }
    return error || true;
  }

  function validateP(value) {
    let error;
    if (!value) {
      error = "Password is required";
    }
    return error || true;
  }

  function onSubmit(values) {
    setIsSubmitting(true);

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <Box w={{ base: "100%", md: "100%" }}>
      <Box  ml={{base:"3",md:"80px"}} >



      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <Input
            name="name"
            placeholder="Enter full name"
            ref={register({ validate: validateName })}
            mt="3"
            size="lg"
            variant="flushed"
            focusBorderColor="pink.400"
          />

          <Input
            name="email"
            placeholder="Enter email"
            ref={register({ validate: validateEmail })}
            mt="3"
            size="lg"
            variant="flushed"
            focusBorderColor="pink.400"
          />
          <InputGroup size="lg">
            <Input
              name="password"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              ref={register({ validate: validateP })}
              mt="3"
              focusBorderColor="pink.400"
              variant="flushed"
            />

            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
     
          {" "}
          <Button
            mt={7}
            bg="bookclub.100"
            color="white"
            isLoading={isSubmitting}
            type="submit"
            width="100%"
            borderRadius="0"
            size="lg"
          >
            Join our club
          </Button>
     
      </form>
      <Text>
        By signing up for this, you agree to our{" "}
        <i>
          <Link href="/">Terms of Service & Privacy Policy.</Link>
        </i>
      </Text>
      <Flex
        dir="row"
        justifyContent="space-between"
        mt="4"
        m="0 auto"
        width="50%"
      >
        <Box>
          <FaFacebookSquare size={30} color="#1771E6" />
        </Box>
        <Box>
          <FaInstagramSquare size={30} color="#C837AC" />
        </Box>
        <Box>
          <FaTwitterSquare size={30} color="#50ABF1" />
        </Box>
        <Box>
          <FaYoutubeSquare size={30} color="#F50E01" />
        </Box>
      </Flex>
      </Box>
    </Box>
  );
}
