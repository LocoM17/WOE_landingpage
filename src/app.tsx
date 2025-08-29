import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Preloader from "./components/preloader/Preloader";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Layout } from "./components/Layout";
import { MyThemeProvider } from "./context/themes/MyThemeContext";
import { MotionBox } from "./components/preloader/MotionBox";

type Props = {};

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

function App({}: Props) {
  const queryClient = new QueryClient();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {isLoading ? (
          <MotionBox>
            <Preloader />
          </MotionBox>
        ) : (
          <MyThemeProvider>
            <MotionBox
              key="layout"
              bg="#0e0e10"
              color="red"
              minH="100vh"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Layout />
            </MotionBox>
          </MyThemeProvider>
        )}
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
