import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
// import { NavItem } from "../../interface/MapData.ts"; // Importa la interfaz NavItem
import DesktopSubNav from "./DesktopSubNav.tsx";
import { NavItem } from "./interface/NavItem.ts";

function DesktopNav() {
  const linkColor = useColorModeValue("gray.400", "gray.200");

  const NAV_ITEMS: Array<NavItem> = [
    //opciones del navbar
    //primer elemento
    {
      label: "Informacion principal",
      href: "#infoComunidad",
      children: [
        {
          label: "La comunidad de World Of Editors",
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
          label: "Modelos de la comunidad",
          subLabel: "Modelos creados por la comunidad",
          href: "#infoModelosComunidad",
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
          subLabel: "Opiniones de los usuarios mas importantes de la comunidad",
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
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: "white", // Cambia el color al pasar el mouse
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={"#1A1A1E"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
                color="white" // Cambia el color del texto a blanco
              >
                <Stack>
                  {navItem.children.map((child) => (
                    // <DesktopSubNav
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}

export default DesktopNav;
