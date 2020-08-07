import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    a{
        color:inherit;
        text-decoration:none;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
        font-size:16px;
        background-color:rgb(41, 41, 41);
    }
`;

export default GlobalStyles;
