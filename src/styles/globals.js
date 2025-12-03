import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Smooth rendering */
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.primary1};
    background: ${(props) => props.theme.colors.background1};
    cursor: default;
    overflow-x: hidden;
    background:
 radial-gradient(1200px 800px at 0% 0%,rgba(148,93,214,.12),transparent 40%),
 radial-gradient(1000px 700px at 100% 100%,rgba(19,173,199,.10),transparent 40%),
 #0F1624;}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}
    
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6, button {
    font-family: ${(props) => props.theme.fonts.title};
  }

  /* Links */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Lists */
  li {
    list-style: none;
  }

  /* Selection highlight */
  ::selection {
    background: ${(props) => props.theme.colors.accent1};
    color: #000;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.15);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255,0.25);
  }

  /* Smooth interactions */
  button, a {
    transition: all 0.25s ease;
  }

  /* Mobile touch smoothing */
  body, button, a {
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyles;
