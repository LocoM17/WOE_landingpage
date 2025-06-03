"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Img,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { MdForum } from "react-icons/md";
import { FaInstagram, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import iconfooter from "../../../public/img/channels4_profile_canal_icon.png"; // Importa la imagen del logo
import { useTheme } from "@/context/themes/MyThemeContext";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const { themeStyle } = useTheme();
  return (
    <Box
      bg={themeStyle.bg_general1}
      color={"white"}
      zIndex={1}
      position={"relative"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <Img
                src={iconfooter}
                alt="Logo"
                boxSize="30px"
                objectFit="contain"
              />
              <Text fontSize={"lg"} fontWeight={600} color={"white"}>
                WORLD OF EDITORS Oficial
              </Text>
            </Box>
            <Text fontSize={"sm"} color={"white"}>
              © 2025 WORLD OF EDITORS OFICIAL. Todos los derechos reservados
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Discord"} href={"#"}>
                <FaDiscord />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Foro"} href={"#"}>
                <MdForum />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Comunidad</ListHeader>
            <Box as="a" href={"#"}>
              Discord
            </Box>
            <Box as="a" href={"#"}>
              YouTube
            </Box>
            <Box as="a" href={"#"}>
              Foro
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Ayuda</ListHeader>
            <Box as="a" href={"#"}>
              Centro de ayuda
            </Box>
            <Box as="a" href={"#"}>
              Terminos y condiciones
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
