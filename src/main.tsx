import React from "react";
import ReactDOM from "react-dom/client";
import { StompSessionProvider } from "react-stomp-hooks";
import { ThemeProvider } from "styled-components";

import configs from "@/configs";
import theme, { GlobalStyle } from "@/themes";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <StompSessionProvider url={configs.publicRuntime.SOCKET_URL}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </StompSessionProvider>
    </React.StrictMode>
);
