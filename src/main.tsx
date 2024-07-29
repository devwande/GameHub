import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />{" "}
      {/* once this is done go to chrome dev tools, application, local storage, delete default light mode and the page turns dark automatically */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
