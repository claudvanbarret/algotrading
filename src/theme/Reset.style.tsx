import { createGlobalStyle } from 'styled-components';
import Theme from './Theme';

const ResetStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    display: flex;
    justify-content: center;
    background-color: ${Theme.colors.fillBlackSecondary};
    color: ${Theme.colors.fill};
    font-size: ${Theme.fonts.size};
    font-family: ${Theme.fonts.family};
    font-weight: ${Theme.fonts.weight.regular};
    box-sizing: border-box;
    overflow: hidden;
  }
  a {
    text-decoration: none;
    &:active,
    &:focus,
    &:hover {
      text-decoration: none;
    }
  }
`;

export default ResetStyles;
