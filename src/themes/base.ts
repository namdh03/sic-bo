import { css } from "styled-components";

export const Base = css`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    * {
        -webkit-tap-highlight-color: transparent;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "IBM Plex Mono", monospace;
        font-size: 1.6rem;
        background-color: var(--body-bg-color);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        border: none;
        outline: none;
        background: transparent;
        padding: 0;
    }

    a,
    img,
    button,
    input,
    label,
    textarea,
    select {
        padding: 0;
        font-family: inherit;
        color: inherit;
        outline: none;
        border: none;
    }

    input,
    textarea {
        background: transparent;
    }
`;
