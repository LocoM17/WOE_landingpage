import { useBreakpointValue } from "@chakra-ui/react";
export default function UseDataMapOtherPageSize() {
  const pageSize =
    useBreakpointValue({
      base: 1,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
      "2xl": 5,
    }) ?? 1;

  const cardWidth =
    useBreakpointValue({
      base: 180,
      sm: 200,
      md: 220,
      lg: 255,
      xl: 280,
      "2xl": 300,
    }) ?? 200;

  return { pageSize, cardWidth };
}
