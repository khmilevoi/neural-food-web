import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body, html, #root {
      font-family: sans-serif;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      overscroll-behavior-y: contain;
    }
    
    * {
      box-sizing: border-box;
    }
`;
