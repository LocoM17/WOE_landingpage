import { Box, Center, Image, Spinner } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const Preloader = () => {
  return (
    <Center
      h="100vh"
      w="100vw"
      bg="black"
      flexDirection="column"
      position="fixed"
      top={0}
      left={0}
      zIndex={9999}
    >
      <Image
        src="https://i.ibb.co/Rkcrp5wS/channels4-profile-canal-icon.png"
        alt="Logo"
        boxSize="120px"
        mb={4}
      />

      <Box
        border="6px solid"
        borderColor="rgba(255, 255, 255, 0.2)"
        borderTopColor="white"
        borderRadius={"50%"}
        w="30px"
        h="30px"
        animation={`${spin} 1s linear infinite`}
      />
    </Center>
  );
};

export default Preloader;
