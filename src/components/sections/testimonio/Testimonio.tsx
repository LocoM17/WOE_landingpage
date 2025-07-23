import { useTheme } from "@/context/themes/MyThemeContext";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

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
          base: "md",
          md: "md",
          lg: "2xl",
          "2xl": "2xl",
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

  return (
    <Box
      bg={"#121214"}
      w={"100vw"}
      px={"50px"}
      pt={"120px"}
      justifyItems={"center"}
      pb={"150px"}
    >
      <Stack
        spacing={0}
        align={"center"}
        paddingBottom={{
          base: "1rem",
          md: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "10rem",
        }}
      >
        <Heading
          textAlign={"center"}
          fontSize={{
            base: "2rem",
            md: "3rem",
          }}
          color={themeStyle.Cl_titulo2}
        >
          Pilares de la comunidad
        </Heading>
        <Text
          pt={"15px"}
          textAlign={"center"}
          fontSize={{
            base: "0.99rem",
            md: "1.5rem",
          }}
        >
          Opiniones auténticas de los miembros más valorados sobre lo que hace
          especial a nuestra comunidad.
        </Text>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 10, md: 4, lg: 100 }}
      >
        {[1, 2, 3, 4].map((d) => (
          <Box h={"400px"} maxW={"sm"}>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                  neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>

              <TestimonialAvatar
                src={"../../public/img/Leforyer.jpg"}
                name={"Leforyer"}
                title={"Moderador de la comunidad"}
              />
            </Testimonial>
          </Box>
        ))}
        {/* <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"../../public/img/Gerhalt.jpg"}
              name={"Gerhard"}
              title={"Fundador de la comunidad"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Ruke"}
              title={"Administrador del servidor"}
            />
          </Testimonial> */}
      </Stack>
    </Box>
  );
}
