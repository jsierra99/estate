import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *
    {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        body
        {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    }

    html, body, .wrapper
    {
        overflow-x: hidden;
    }
`;

export default GlobalStyle;