import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import logoimg from "../../../public/img/channels4_profile_canal_sinfondo.png"; // Importa la imagen del logo
import {
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import DesktopNav from "./DesktopNav";
import { useTheme } from "../../context/themes/MyThemeContext";

type Props = {};
function Navbar({}: Props) {
  const { themeStyle } = useTheme();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      {" "}
      {/* contenedor principal */}
      <Flex // contenedor del navbar
        zIndex={101}
        position="fixed"
        top="0"
        left="0"
        right="0"
        bg={themeStyle.bg_general1} // color de fondo
        color={useColorModeValue("gray.600", "white")} // color del texto
        minH={"60px"} // altura mínima
        py={{ base: 2 }} // padding vertical
        px={{ base: 4 }} // padding horizontal
        borderBottom={1} // borde inferior
        borderStyle={"solid"} // estilo de borde
        borderColor={useColorModeValue("gray.200", "gray.900")} // color del borde
        align={"center"} // alineación
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          align={"center"} // alineación
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <a href="#infoHeader">
            <Box display="flex" alignItems={"center"}>
              <Image
                src={logoimg}
                alt="xddd"
                boxSize="60px"
                objectFit="contain"
              />{" "}
              {/* logo */}
              <Text
                textAlign={"center"}
                fontFamily={"heading"}
                color={useColorModeValue("white", "grain.800")} // color del texto
                fontSize={{ base: "1xl", md: "1xl" }} // tamaño de fuente
                fontWeight={600} // peso de fuente
              >
                World Of Editors
              </Text>
            </Box>
          </a>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack direction={"row"}>
          <div>1</div>
          <div>2</div>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Navbar;
