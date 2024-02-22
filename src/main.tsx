import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { StompSessionProvider } from "react-stomp-hooks";
import { ThemeProvider } from "styled-components";

import configs from "@/configs";
import { AuthProvider } from "@/contexts/auth/AuthContext.tsx";
import theme, { GlobalStyle } from "@/themes";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <StompSessionProvider url={configs.publicRuntime.SOCKET_URL}>
            <Toaster />
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <AuthProvider>
                    <App />
                </AuthProvider>
            </ThemeProvider>
        </StompSessionProvider>
    </React.StrictMode>
);
