import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import theme from "./theme";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />{" "}
      {/* once this is done go to chrome dev tools, application, local storage, delete default light mode and the page turns dark automatically */}
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools  />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
 