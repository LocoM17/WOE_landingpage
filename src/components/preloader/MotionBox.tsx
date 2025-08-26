// components/ui/MotionBox.tsx
import { Box, BoxProps, forwardRef } from "@chakra-ui/react";
import {
  motion,
  isValidMotionProp,
  HTMLMotionProps,
  useInView,
} from "framer-motion";

// Crea un MotionBox que entienda props de Chakra y Framer Motion
export const MotionBox = motion(
  forwardRef<BoxProps, "div">((props, ref) => <Box ref={ref} {...props} />)
);
