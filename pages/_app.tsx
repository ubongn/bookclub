import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import {ChakraProvider,CSSReset, extendTheme} from "@chakra-ui/react"


const theme = extendTheme({
  colors: {
    bookclub: {
      100: "#810019",
      200: "#0F1010",
    },
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
