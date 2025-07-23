// components/navbar/MobileNav.tsx
import {
  Box,
  Collapse,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavItem } from "./NavItem";

export default function MobileNav({ navItems }: { navItems: Array<NavItem> }) {
  return (
    <Stack
      bg={useColorModeValue("gray.800", "gray.900")}
      p={4}
      h={"90vh"}
      display={{ md: "none" }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* El enlace siempre funciona */}
        <Box
          as="a"
          href={href ?? "#"}
          fontWeight={600}
          color="white"
          _hover={{ color: "teal.300" }}
          fontSize={"2xl"}
        >
          {label}
        </Box>

        {/* Solo muestra el ícono si hay hijos */}
        {children && (
          <Box onClick={onToggle} cursor="pointer">
            <ChevronDownIcon
              transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
              transition="transform 0.2s ease"
              color="white"
            />
          </Box>
        )}
      </Box>

      {/* Submenú colapsable */}
      {children && (
        <Collapse in={isOpen} animateOpacity>
          <Stack
            pl={4}
            mt={2}
            borderLeft={1}
            borderColor="gray.700"
            align="start"
            gap={"5px"}
            pb={"30px"}
            backgroundColor={"whiteAlpha.200"}
          >
            {children.map((child) => (
              <Box
                as="a"
                key={child.label}
                href={child.href}
                color="gray.300"
                _hover={{ color: "teal.200" }}
              >
                {child.label}
              </Box>
            ))}
          </Stack>
        </Collapse>
      )}
      <Box w={"100%"} h={"1px"} backgroundColor={"whiteAlpha.400"}></Box>
    </Stack>
  );
};
