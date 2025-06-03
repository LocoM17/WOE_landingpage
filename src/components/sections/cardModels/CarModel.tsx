import { useTheme } from "@/context/themes/MyThemeContext";
import {
  Avatar,
  background,
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

function CarModel({}: Props) {
  const { themeStyle } = useTheme();
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={"10"}
        flexDirection={"column"}
        gap={"50px"}
        px={"50px"}
      >
        <Heading justifyContent={"center"} color={themeStyle.Cl_titulo2}>
          Los Modelos de la comunidad
        </Heading>
        <Text color={themeStyle.Cl_textDescriotion1} fontSize={"2xl"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae ex
          ut, sed quis quasi tenetur.
        </Text>
      </Box>
      <Box
        position={"relative"}
        display={"flex"}
        px={"50px"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"row"}
        h={"70%"}
        w={"100%"}
        gap={"50px"}
      >
        {/* Card contenedor */}
        {/* 1 */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          position={"relative"}
          role="group"
          w={"400px"}
          h={"500px"}
          overflow={"hidden"}
          id={"contenedorCard"}
          rounded={"2xl"}
          border={"2px solid black"}
          shadow={"3xl blue "}
        >
          <Box
            __css={{
              content: '""',
              position: "absolute",
              inset: 0,
              bg: "rgba(0,0,0,0.7)",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              zIndex: "3",
              pointerEvents: "none",
            }}
            _groupHover={{
              opacity: 1,
            }}
          />

          <Image
            position={"absolute"}
            src="@/../../../../../public/img/Mamut.png"
            w={"100%"}
            h={"100%"}
            // aspectRatio={"1/1"}
            background={"black"}
            padding={"40px"}
          />

          {/* contenido del texto */}
          <Box
            h={"100%"}
            position={"relative"}
            display={"flex"}
            flexDirection={"column"}
            zIndex={4}
            mx={"20px"}
            mt={"20px"}
            role="group"
            gap={"30px"}

            // _hover={{
            //   opacity: "1",
            // }}
          >
            <Heading
              pointerEvents={"none"}
              color={themeStyle.Cl_titulo1}
              textShadow={
                "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black "
              }
            >
              Modelo N1
            </Heading>
            <Box
              opacity="0"
              transition={"opacity 0.3s ease-in-out"}
              // fontSize={"17px"}
              // fontWeight={"600"}}
              _groupHover={{
                opacity: 1,
              }}
            >
              <Text mb={"30px"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                nihil quasi ad enim odio dolor, deleniti, aspernatur dolores
                provident doloribus est, repellendus harum? Excepturi aliquid,
                aut maxime molestias.
              </Text>
              <Box display={"flex"} bottom={"65px"} position={"absolute"}>
                <Box
                  display={"flex"}
                  gap={"5px"}
                  flexDirection={"column"}
                  mr={"40px"}
                >
                  <Stack
                    // key={creador.name}
                    direction={"row"}
                    spacing={4}
                    align={"center"}
                  >
                    <Avatar
                      boxSize={"36px"}
                      // src={creador.perfilIcon} // Cambia esto por la URL de tu imagen
                    />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text fontWeight={600} color={"white"}>
                        {/* {creador.name} */}
                        user1
                      </Text>
                      <Text fontSize={"12px"} color={"gray.500"}>
                        {/* {creador.information} */}
                        informacion
                      </Text>
                    </Stack>
                  </Stack>

                  <Stack
                    // key={creador.name}
                    direction={"row"}
                    spacing={4}
                    align={"center"}
                  >
                    <Avatar
                      boxSize={"36px"}
                      // src={creador.perfilIcon} // Cambia esto por la URL de tu imagen
                    />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text fontWeight={600} color={"white"}>
                        {/* {creador.name} */}
                        user1
                      </Text>
                      <Text fontSize={"12px"} color={"gray.500"}>
                        {/* {creador.information} */}
                        informacion
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
                <Button bottom={"-40px"}>MAS INFORMACION</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          position={"relative"}
          role="group"
          w={"400px"}
          h={"500px"}
          overflow={"hidden"}
          id={"contenedorCard"}
          rounded={"2xl"}
          border={"2px solid black"}
          shadow={"3xl blue "}
        >
          <Box
            __css={{
              content: '""',
              position: "absolute",
              inset: 0,
              bg: "rgba(0,0,0,0.7)",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              zIndex: "3",
              pointerEvents: "none",
            }}
            _groupHover={{
              opacity: 1,
            }}
          />

          <Image
            position={"absolute"}
            src="@/../../../../../public/img/GIF_model_1.gif"
            w={"100%"}
            h={"100%"}
            // aspectRatio={"1/1"}
            background={"black"}
            padding={"40px"}
          />

          {/* contenido del texto */}
          <Box
            h={"100%"}
            position={"relative"}
            display={"flex"}
            flexDirection={"column"}
            zIndex={4}
            mx={"20px"}
            mt={"20px"}
            role="group"
            gap={"30px"}

            // _hover={{
            //   opacity: "1",
            // }}
          >
            <Heading
              pointerEvents={"none"}
              color={themeStyle.Cl_titulo1}
              textShadow={
                "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black "
              }
            >
              Modelo N1
            </Heading>
            <Box
              opacity="0"
              transition={"opacity 0.3s ease-in-out"}
              // fontSize={"17px"}
              // fontWeight={"600"}}
              _groupHover={{
                opacity: 1,
              }}
            >
              <Text mb={"30px"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                nihil quasi ad enim odio dolor, deleniti, aspernatur dolores
                provident doloribus est, repellendus harum? Excepturi aliquid,
                aut maxime molestias.
              </Text>
              <Box display={"flex"} bottom={"65px"} position={"absolute"}>
                <Box
                  display={"flex"}
                  gap={"5px"}
                  flexDirection={"column"}
                  mr={"40px"}
                >
                  <Stack
                    // key={creador.name}
                    direction={"row"}
                    spacing={4}
                    align={"center"}
                  >
                    <Avatar
                      boxSize={"36px"}
                      // src={creador.perfilIcon} // Cambia esto por la URL de tu imagen
                    />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text fontWeight={600} color={"white"}>
                        {/* {creador.name} */}
                        user1
                      </Text>
                      <Text fontSize={"12px"} color={"gray.500"}>
                        {/* {creador.information} */}
                        informacion
                      </Text>
                    </Stack>
                  </Stack>

                  <Stack
                    // key={creador.name}
                    direction={"row"}
                    spacing={4}
                    align={"center"}
                  >
                    <Avatar
                      boxSize={"36px"}
                      // src={creador.perfilIcon} // Cambia esto por la URL de tu imagen
                    />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text fontWeight={600} color={"white"}>
                        {/* {creador.name} */}
                        user1
                      </Text>
                      <Text fontSize={"12px"} color={"gray.500"}>
                        {/* {creador.information} */}
                        informacion
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
                <Button bottom={"-40px"}>MAS INFORMACION</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          position={"relative"}
          role="group"
          w={"400px"}
          h={"500px"}
          overflow={"hidden"}
          id={"contenedorCard"}
          rounded={"2xl"}
          border={"2px solid black"}
          shadow={"3xl blue "}
        >
          <Box
            __css={{
              content: '""',
              position: "absolute",
              inset: 0,
              bg: "rgba(0,0,0,0.7)",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              zIndex: "3",
              pointerEvents: "none",
            }}
            _groupHover={{
              opacity: 1,
            }}
          />

          <Image
            position={"absolute"}
            src="@/../../../../../public/img/Mamut.png"
            w={"100%"}
            h={"100%"}
            // aspectRatio={"1/1"}
            background={"black"}
            padding={"40px"}
          />

          {/* contenido del texto */}
          <Box
            h={"100%"}
            position={"relative"}
            display={"flex"}
            flexDirection={"column"}
            zIndex={4}
            mx={"20px"}
            mt={"20px"}
            role="group"
            gap={"30px"}

            // _hover={{
            //   opacity: "1",
            // }}
          >
            <Heading
              pointerEvents={"none"}
              color={themeStyle.Cl_titulo1}
              textShadow={
                "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black "
              }
            >
              Modelo N1
            </Heading>
            <Box
              opacity="0"
              transition={"opacity 0.3s ease-in-out"}
              // fontSize={"17px"}
              // fontWeight={"600"}}
              _groupHover={{
                opacity: 1,
              }}
            >
              <Text mb={"30px"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                nihil quasi ad enim odio dolor, deleniti, aspernatur dolores
                provident doloribus est, repellendus harum? Excepturi aliquid,
                aut maxime molestias.
              </Text>
              <Box display={"flex"} bottom={"65px"} position={"absolute"}>
                <Box
                  display={"flex"}
                  gap={"5px"}
                  flexDirection={"column"}
                  mr={"40px"}
                >
                  <Stack
                    // key={creador.name}
                    direction={"row"}
                    spacing={4}
                    align={"center"}
                  >
                    <Avatar
                      boxSize={"36px"}
                      // src={creador.perfilIcon} // Cambia esto por la URL de tu imagen
                    />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text fontWeight={600} color={"white"}>
                        {/* {creador.name} */}
                        user1
                      </Text>
                      <Text fontSize={"12px"} color={"gray.500"}>
                        {/* {creador.information} */}
                        informacion
                      </Text>
                    </Stack>
                  </Stack>

                  <Stack
                    // key={creador.name}
                    direction={"row"}
                    spacing={4}
                    align={"center"}
                  >
                    <Avatar
                      boxSize={"36px"}
                      // src={creador.perfilIcon} // Cambia esto por la URL de tu imagen
                    />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text fontWeight={600} color={"white"}>
                        {/* {creador.name} */}
                        user1
                      </Text>
                      <Text fontSize={"12px"} color={"gray.500"}>
                        {/* {creador.information} */}
                        informacion
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
                <Button bottom={"-40px"}>MAS INFORMACION</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          position={"relative"}
          role="group"
          w={"400px"}
          h={"500px"}
          overflow={"hidden"}
          id={"contenedorCard"}
          rounded={"2xl"}
          border={"2px solid black"}
          shadow={"3xl blue "}
        >
          <Box
            __css={{
              content: '""',
              position: "absolute",
              inset: 0,
              bg: "rgba(0,0,0,0.7)",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              zIndex: "3",
              pointerEvents: "none",
            }}
            _groupHover={{
              opacity: 1,
            }}
          />

          <Image
            position={"absolute"}
            src="@/../../../../../public/img/Mamut.png"
            w={"100%"}
            h={"100%"}
            // aspectRatio={"1/1"}
            background={"black"}
            padding={"40px"}
          />

          {/* contenido del texto */}
          <Box
            h={"100%"}
            position={"relative"}
            display={"flex"}
            flexDirection={"column"}
            zIndex={4}
            mx={"20px"}
            mt={"20px"}
            role="group"
            gap={"30px"}

            // _hover={{
            //   opacity: "1",
            // }}
          >
            <Heading
              pointerEvents={"none"}
              color={themeStyle.Cl_titulo1}
              textShadow={
                "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black "
              }
            >
              Modelo N1
            </Heading>
            <Box
              opacity="0"
              transition={"opacity 0.3s ease-in-out"}
              // fontSize={"17px"}
              // fontWeight={"600"}}
              _groupHover={{
                opacity: 1,
              }}
            >
              <Text mb={"30px"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                nihil quasi ad enim odio dolor, deleniti, aspernatur dolores
                provident doloribus est, repellendus harum? Excepturi aliquid,
                aut maxime molestias.
              </Text>
              <Box display={"flex"} bottom={"65px"} position={"absolute"}>
                <Box
                  display={"flex"}
                  gap={"5px"}
                  flexDirection={"column"}
                  mr={"40px"}
                >
                  <Stack
                    // key={creador.name}
                    direction={"row"}
                    spacing={4}
                    align={"center"}
                  >
                    <Avatar
                      boxSize={"36px"}
                      // src={creador.perfilIcon} // Cambia esto por la URL de tu imagen
                    />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text fontWeight={600} color={"white"}>
                        {/* {creador.name} */}
                        user1
                      </Text>
                      <Text fontSize={"12px"} color={"gray.500"}>
                        {/* {creador.information} */}
                        informacion
                      </Text>
                    </Stack>
                  </Stack>

                  <Stack
                    // key={creador.name}
                    direction={"row"}
                    spacing={4}
                    align={"center"}
                  >
                    <Avatar
                      boxSize={"36px"}
                      // src={creador.perfilIcon} // Cambia esto por la URL de tu imagen
                    />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text fontWeight={600} color={"white"}>
                        {/* {creador.name} */}
                        user1
                      </Text>
                      <Text fontSize={"12px"} color={"gray.500"}>
                        {/* {creador.information} */}
                        informacion
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
                <Button bottom={"-40px"}>MAS INFORMACION</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CarModel;
