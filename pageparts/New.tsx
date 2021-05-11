import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

function New() {
  const property = {
    imageUrl: "/books/images/dont-follow-heart-base.jpg",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title:
      "Forgiving What You Can't Forget",
    formattedPrice: "$14.99",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <>
      <Center h="100px" fontWeight="bold" fontSize={20}>Newest Addition</Center>
      <Flex direction={["column", "row"]}  maxW='80%' m="0 auto" justifyContent="space-between">
        <Box maxW="sm" borderRadius="lg" overflow="hidden">
          <Image
            src={property.imageUrl}
            alt={property.imageAlt}
          />

          <Box>
            <Box fontWeight="semibold" as="h4" lineHeight="tight">
              {property.title}
            </Box>
            <Box  >
              {property.formattedPrice}
              <Box as="span"  color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box d="flex" >
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "bookclub.100" : "gray.300"}
                  />
                ))}
              <Box as="span" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
        <Box maxW="sm" borderRadius="lg" overflow="hidden">
          <Image src={property.imageUrl} alt={property.imageAlt} />

          <Box>
            <Box fontWeight="semibold" as="h4" lineHeight="tight">
              {property.title}
            </Box>
            <Box ml="8">
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box d="flex" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "bookclub.100" : "gray.300"}
                  />
                ))}
              <Box as="span"  color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
        <Box maxW="sm" borderRadius="lg" overflow="hidden">
          <Image src={property.imageUrl} alt={property.imageAlt} />

          <Box>
            <Box fontWeight="semibold" as="h4" lineHeight="tight">
              {property.title}
            </Box>
            <Box  ml="8">
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box d="flex" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "bookclub.100" : "gray.300"}
                  />
                ))}
              <Box as="span"  color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
        <Box maxW="sm" borderRadius="lg" overflow="hidden">
          <Image
            src={property.imageUrl}
            alt={property.imageAlt}
          />

          <Box>
            <Box mt="1"  fontWeight="semibold" as="h4" lineHeight="tight">
              {property.title}
            </Box>
            <Box  >
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box d="flex" mt="2">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "bookclub.100" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default New;
