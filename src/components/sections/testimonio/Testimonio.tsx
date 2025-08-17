import { MotionBox } from "@/components/preloader/MotionBox";

import { useTheme } from "@/context/themes/MyThemeContext";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { AnimatedItem } from "./AnimatedItem";

type Props = {
  children: React.ReactNode;
};

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={"#18181C"} //color
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("#18181C", "gray.800"), //color
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;
  const { themeStyle } = useTheme();

  return (
    <Heading color={themeStyle.Cl_titulo3} as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar
        src={src}
        mb={2}
        size={{
          base: "sm",
          md: "md",
          lg: "lg",
          "2xl": "xl",
        }}
      />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonio() {
  const { themeStyle } = useTheme();
  const [opacidad, setOpacidad] = useState(0.1);
  const colums = useBreakpointValue({
    base: 1, // 0px
    sm: 1, // ~480px. em is a relative unit and is dependant on the font size.
    md: 2, // ~768px
    lg: 2, // ~992px
    xl: 3, // ~1280px
    "2xl": 3, // ~1536px
  });

  return (
    <Box
      // bg={"#0000ddff"}
      px={"50px"}
      pt={"120px"}
      justifyItems={"center"}
      pb={"150px"}
      mb={"80px"}
    >
      <Stack
        spacing={0}
        align={"center"}
        paddingBottom={{
          base: "1rem",
          md: "4rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        }}
      >
        <Heading
          textAlign={"center"}
          fontSize={{
            base: "1.5rem",
            md: "2rem",
          }}
          color={themeStyle.Cl_titulo2}
        >
          Pilares de la comunidad
        </Heading>
        <Text
          pt={"15px"}
          textAlign={"center"}
          fontSize={{
            base: "0.90rem",
            md: "1.1rem",
          }}
        >
          Opiniones auténticas de los miembros más valorados sobre lo que hace
          especial a nuestra comunidad.
        </Text>
      </Stack>
      <Flex wrap={"wrap"} justifyContent={"center"} gap={6}>
        {[1, 2, 3, 4, 5, 6].map((item, idx) => (
          <MotionBox
            key={idx}
            flex="1 1 300px"
            maxW="sm"
            p="16px"
            h="400px"
            display="flex"
            alignItems="center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <AnimatedItem idx={idx}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>
                    <Text fontSize={"18px"}>Efficient Collaborating{item}</Text>
                  </TestimonialHeading>
                  <TestimonialText>
                    <Text fontSize={"14px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                    </Text>
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={"../../public/img/Gerhalt.jpg"}
                  name={"Usuario"}
                  title={"Roll"}
                />
              </Testimonial>
            </AnimatedItem>
          </MotionBox>
        ))}
      </Flex>
      {/* <SimpleGrid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        columns={colums}
        gap={6}
        maxW={"100%"}
        pb={"100px"}
      >
        {[1, 2, 3].map((d) => (
          <Box
            key={d}
            display={"flex"}
            alignItems={"center"}
            h={"400px"}
            maxW={"sm"}
            p={"16px"}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>
                  <Text fontSize={"18px"}>Efficient Collaborating</Text>
                </TestimonialHeading>
                <TestimonialText>
                  <Text fontSize={"14px"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                  </Text>
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={"../../public/img/Gerhalt.jpg"}
                name={"Usuario"}
                title={"Roll"}
              />
            </Testimonial>
          </Box>
        ))}
      </SimpleGrid>
      */}
    </Box>
  );
}
