import { createGlobalStyle } from "styled-components";

import { Base } from "./base";
import { Reset } from "./reset";

const GlobalStyle = createGlobalStyle`
    ${Reset}
    ${Base}
`;

export default GlobalStyle;
