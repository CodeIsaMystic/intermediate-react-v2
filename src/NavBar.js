import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from './colors';

//const color = rgba(255, 255, 255, .15);
const spin = keyframes`
  to {
    transform: scale(1.2);
  }
`;

const NavBar = () => (

  <header
    css={css`
      background-color: ${colors.transparent};
      padding: 15px;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span role="img" aria-label="logo" css={css`
                                                padding: 10px 0; 
                                                font-size: 35px;
                                                display: inline-block;
                                                animation: .1s ${spin} linear infinite;
                                              `}>
      🐒
    </span>
  </header>
)

export default NavBar;