// import React from "react";
import styled, {css} from "styled-components";

export let styles = {
  "white": "#fff",
  "black": "#000",
  "light-1": "#999",
  "light-2": "#bbb",
  "dark-1": "#333",
  "dark-2": "#555",
  "red-1": "#da4d4d",
  "red-2": "#a02121",
  "red-3": "#b52626",
}
/**
 * Do not use
 * @deprecated 
 * @param {*} n 
 */
export let h = (n = 2) => styled("h"+n).attrs(props => ({
  size: props.size ?? `${((n * -1) + 4) * 12}px`,
}))`
font-size: ${props => props.size};
font-family: ${({fancy}) => fancy ? "'Fabian'" : "'Roboto'"};
${({spaced}) => spaced && css`letter-spacing: 0.08em;`}
color: ${ props => styles[props.style ?? "dark-1"] };
font-weight: ${props => props.weight ?? "900"};
margin: 0;
${({caps}) => {
  switch(caps) {
    case "every": return css`text-transform: uppercase;`
    case "each": return css`text-transform: capitalize;`
    case "none": return css`text-transform: lowercase;`
    case true: return css`text-transform: uppercase;`
    default: return ""
  }
}}
`;

/* export const styleText = (fn) => fn`
font-size: ${props => props.size};
font-family: ${({fancy}) => fancy ? "'Fabian'" : "'Roboto'"};
${({spaced}) => spaced && css`letter-spacing: 0.08em;`}
color: ${ props => theme.text.style(props.style) };

${({caps}) => {
  switch(caps) {
    case "every": return css`text-transform: uppercase;`
    case "each": return css`text-transform: capitalize;`
    case "none": return css`text-transform: lowercase;`
    case true: return css`text-transform: uppercase;`
    default: return ""
  }
}}
` */

export let PageTitle = styled.h1`
  ${props => css`color: ${styles[props.color ?? "dark-1"]};`}
  font-family: 'Roboto', sans-serif;
  font-size: 2.25em;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0;
  text-align: ${props => props.textAlign ?? "left"};
  verticle-align: center;
  `
  
  export let PageHeading = styled.section.attrs(props => ({
    url: props.url ?? "https://rewindrecaprelive.s3.amazonaws.com/img/texture-bw.png"
  }))`
  height: ${props => props.height ?? "10vmax"};
  display: flex;
  flex-direction: column;
  align-content: ${props => props.align ?? "left"};
  align-items: ${props => props.align ?? "left"};
  justify-content: center;
  background: url("${props => props.url}") center;
  background-size: cover;
  padding: 4vmin 5vmin;
  margin-bottom: 4vmax;
  & h1:after {
    mix-blend-mode: difference;
    color: white;
  }
`

export const Link = styled.a`
color: ;
`

export const Button = styled.button.attrs(props => ({
  fg: styles["red-1"],
  bg: styles["white"]
}))`
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  display: inline-block;
  // border-radius: 3px;
  padding: 0.35rem 1rem;
  margin: 0.5rem 0rem;
  background: ${props => props.bg};
  color: ${props => props.fg};
  border: 2px solid ${props => props.fg};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 250ms, color 250ms;
  &:hover {
    background: ${props => props.fg};
    color: ${props => props.bg};
  }

  ${props => props.primary && css`
    background: ${props => props.fg};
    color: ${props => props.bg};
  `}
`