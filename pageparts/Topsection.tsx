import { AspectRatio, Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Signup from "./Signup";





const Topsection = (props) => {
  return (
 
      <SimpleGrid
       
        w={{ base: "84%", sm: "80%", md: "80%" }}
        m='0 auto'
        columns={{ base: 1, md: 2 }}
        spacing={10}
       
      >
        <Box
           
       >

          <AspectRatio 
          
          
          ratio={{ base:1.4, md: 1.7 }}
      
          >
            <Image src="r.png" borderRadius="8px" objectFit="cover"  />
          </AspectRatio>

          <Box
            pos="absolute"
            px="4"
            top="150"
            zIndex={2}
            color="white"
            fontWeight="semibold"
            lineHeight="200%"
            fontSize={{ sm: "14px", md: "15px", lg: "19px" }}
            marginTop={{ base: props.show ? "200px" : "-2px", md: "" }}
          >
            <Text>
              JOIN OUR CHRISTAIN BOOK CLUB AND READ <br /> OUR COLECTIONS OF
              FAITH <br />
              UPLIFTING BOOKS
            </Text>

          </Box>

          
        </Box>
        <Box w={{ base: "90%", sm: "100%", md: "100%" }}>
          <Signup />
        </Box>
      </SimpleGrid>
  
  );
};

export default Topsection;
