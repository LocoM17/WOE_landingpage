"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { CgMail } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Informacion() {
  return (
    <Box
      display={"flex"}
      alignContent={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      justifyItems={"center"}
      px={"20px"}
      h={"100vh"}
      pb={"200px"}
    >
      <Container
        id="infoDesarrollador"
        maxW={"5xl"}
        py={12}
        h="70vh"
        display={"flex"}
        pt={"150px"}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} justify={"center"}>
            <Heading>Informacion del Desarrollador</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              El desarrollador de la pagina es el usuario "LocoM" de la
              comunidad de World of Editors.
            </Text>
            <Stack
              spacing={6}
              // divider={
              //   <StackDivider
              //     borderColor={useColorModeValue("gray.100", "gray.700")}
              //   />
              // }
            >
              <Feature
                icon={<Icon as={CgMail} color={"yellow.500"} w={5} h={5} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"locomwoe01@gmail.com"}
              />
              <Feature
                icon={<Icon as={FaDiscord} color={"white"} w={5} h={5} />}
                iconBg={useColorModeValue("#5662F6", "blue.900")}
                text={"locom17"}
              />
            </Stack>
          </Stack>
          <Flex align={"center"} justify={"center"}>
            <Image
              w={{
                sm: "15rem",
                md: "20rem",
              }}
              rounded={"md"}
              alt={"feature image"}
              src={"https://i.ibb.co/60HgPFgC/zerglingxd.gif"}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
