import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { styles } from "./utils"
import { useMediaQuery } from "react-responsive";

let HeaderContainer = styled.header`
  background: ${styles["white"]};
  box-shadow: 0px 1px 8px 1px #ccc;
  display: flex;
  flex-direction: row;
  align-content: stretch;
  align-items: stretch;
  justify-content: space-between;
  padding: 0 7vmin;
  min-height: 82px;
  @media (max-width: 610px) {
    min-height: 58px;
    height: 4vmax;
  }
`

let Brand = styled(Link).attrs(props => ({
  to: "/",
}))`
  font-size: 3em;
  font-weight: 900;
  font-family: "Fabian", "Roboto", sans-serif;
  text-decoration: none;
  color: ${styles["black"]};
  line-height: 1.5em;
  @media (max-width: 610px) {
    content: 'R3';
    font-size: 2.45em;
  }
  @media (max-height: 412px) {
    font-size: 2em;
    padding-top: 4vh;
  }
  @media (min-width: 866px) {
    font-size: 3em;
    padding-top: 0.5vh;
  }
  `
  
  let NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 2vmax;
  // border-top: 10px solid transparent;
  & > * {
    padding: 21px 15px;
    @media (max-width: 610px) {
      padding: 10.5px 7.5px;
    }
    color: ${styles["dark-2"]};
    border-top: 10px solid transparent;
    height: 100%;
    cursor: pointer;
    transition: background 250ms, color 250ms, border-top 250ms;
    &:not(.active):hover {
      background: #eca1a1;
      color: ${styles["dark-2"]};
      border-top: 10px solid ${styles["red-1"]};
    }
  }
  & > .active {
    background: ${styles["red-1"]};
    color: ${styles["white"]};
    border-top: 10px solid #a02121;
    text-decoration: none !important;
  }
`

const Header = ({ siteTitle }) => {
  let isMobile = useMediaQuery({
    query: '(max-width: 610px)'
  });
  return (
    <HeaderContainer>
      <Brand>{isMobile ? "R3" : siteTitle}</Brand>
      <NavContainer>
        <Link to="/" activeClassName="active">Home</Link>
        <Link to="/posts/" activeClassName="active">Blog</Link>
        <a href="https://www.youtube.com/channel/UC46zRme2Bk0iCdhT-3J-Sjw/videos">Videos</a>
      </NavContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
