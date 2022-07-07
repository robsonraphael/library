import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{
  theme: { colors: { background: string } };
}>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Oswald, sans-serif;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
    }
`;
