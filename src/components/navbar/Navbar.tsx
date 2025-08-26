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
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  theme,
} from "@chakra-ui/react";
import DesktopNav from "./DesktopNav";
import { useTheme } from "../../context/themes/MyThemeContext";
import { useRef } from "react";
import MobileNav from "./MobileNav";
import { NavItem } from "./interface/NavItem";

type Props = {};
export default function Navbar({}: Props) {
  const { themeStyle } = useTheme();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const btnRef = useRef(null); // para enfoque del Drawer
  const NAV_ITEMS: Array<NavItem> = [
    //opciones del sideBar
    //primer elemento
    {
      label: "Informacion Principal",
      href: "#infoComunidad",
      children: [
        {
          label: "La comunidad de World of editors",
          subLabel: "¿Quienes somos?",
          href: "#infoComunidad",
        },
        {
          label: "La historia de la comunidad",
          subLabel: "¿Como nacio?",
          href: "#infoHistoria",
        },
      ],
    },

    //segundo elemento
    {
      label: "Proyectos de la comunidad",
      href: "#infoMapasDestacados",
      children: [
        {
          label: "Mapas mas destacados",
          subLabel: "Los representantes de la comunidad",
          href: "#infoMapasDestacados",
        },
        {
          label: "Mapas en desarrollo",
          subLabel: "Otros mapas conocidos dentro de la comunidad",
          href: "#infoOtrosMapas",
        },
        {
          label: "Modelos Reforjados",
          subLabel: "modelos creados para el modo Reforjado",
          href: "#infoModelosReforjados",
        },
      ],
    },

    //tercer elemento
    {
      label: "Colaboradores",
      href: "#infoPilaresComunidad",
      children: [
        {
          label: "Los pilares de la comunidad",
          subLabel: "Find the perfect designer for your team",
          href: "#infoPilaresComunidad",
        },
        {
          label: "Desarrollador de la Web",
          subLabel: "Informacion del creador de la pagina web",
          href: "#infoDesarrollador",
        },
      ],
    },
  ];
  return (
    <>
      <Box
        opacity={0.5}
        // borderRadius={"15px"}
        borderBottom={"10px solid"}
        sx={{
          borderColor: "red",
          borderImage:
            "url('https://worldofeditors.net/img/marco.webp')20 round",
        }}
      />
      <Box>
        <Flex
          zIndex={101}
          position="fixed"
          top="0"
          left="0"
          right="0"
          bg={themeStyle.bg_general1}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={2}
          borderStyle={"solid"}
          borderColor={useColorModeValue("black.100", "black")}
          align={"center"}
        >
          {/* Botón de menú solo visible en móviles */}
          {/* <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              ref={btnRef}
              onClick={onOpen}
              icon={<HamburgerIcon w={5} h={5} />}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              backgroundColor={themeStyle.Cl_titulo2}
              _hover={{ backgroundColor: themeStyle.Cl_titulo1 }}
            />
          </Flex> */}

          {/* Logo y Título */}
          <Flex align="center" justify="space-between" w="100%">
            {/* IZQUIERDA: Logo */}
            <Box display="flex" alignItems="center">
              <a href="#infoHeader">
                <Box display={"flex"} alignItems={"center"}>
                  <Image
                    src={logoimg}
                    alt="Logo"
                    boxSize="60px"
                    objectFit="contain"
                  />
                  <Text fontSize={"2xl"} fontWeight={"normal"} color={"white"}>
                    World Of Editors Oficiallll
                  </Text>
                </Box>
              </a>
            </Box>

            {/* CENTRO: Nav solo en desktop */}
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>

            {/* DERECHA: Botón hamburguesa solo en móvil */}
            <Flex display={{ base: "flex", md: "none" }}>
              <IconButton
                ref={btnRef}
                onClick={onOpen}
                icon={<HamburgerIcon w={5} h={5} />}
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
                backgroundColor={themeStyle.Cl_titulo2}
                _hover={{ backgroundColor: themeStyle.Cl_titulo1 }}
              />
            </Flex>
          </Flex>

          {/* Acciones a la derecha */}
          {/* Menú Desktop */}
        </Flex>

        {/* Drawer para mobile nav */}
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={themeStyle.bg_general1}>
            <DrawerCloseButton
              color="white"
              bg={"blackAlpha.500"}
              _hover={{ bg: "red.500" }}
            />
            <DrawerBody mt={10}>
              <Stack spacing={4}>
                {/* Menú Mobile (solo visible cuando isOpen es true) */}
                <Collapse in={isOpen} animateOpacity>
                  <MobileNav navItems={NAV_ITEMS} />
                </Collapse>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
