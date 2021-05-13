import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import "./style.scss";
import Logo from "../../content/assets/logo_transparent.png";
import classNames from "classnames";
import { Helmet } from 'react-helmet'
import favicon from "../../static/favicon2.ico";

const rootPath = `${__PATH_PREFIX__}/`
const blogPath = `${__PATH_PREFIX__}/blog/`

function Header({ location, title = "Rage Against the Supremes" }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className="col-lg-1 col-4">
        <Link className="d-flex logo" to={location.pathname === blogPath ? `/` : `/`} >
          <img src={Logo} className="float-left" alt="logo" />
        </Link>
      </div>
      <nav className="col-lg-11 col-8 mb-4 mt-0 text-right mt-5 pr-5">
        <a href="/" className="nav-button" disabled={location.pathname === rootPath}>
          Home
        </a>
        <Link to="/contact/" className="nav-button" disabled={location.pathname === "/contact/"}>
          Contact
        </Link>
        <Link to="/songs/" className="nav-button" disabled={location.pathname === "/songs/"}>
          Song List
        </Link>
        
      </nav>
    </>
  );
}

export default function Layout(props) {

  const { location, title, children } = props;

  return (
    <Container>
      <Wrapper >
        <LayoutContainer >
          <div className="mx-auto" >
            <HeaderContainer >
              <div className={classNames("header-white row mb-0 justify-content-middle")}>
                <Header location={location} />
              </div>
            </HeaderContainer>
            <MainContainer className="row position-relative">
              <main className="col-12">{children}</main>
            </MainContainer>
          </div>
        </LayoutContainer>
        <Footer>
        </Footer>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    margin-left: 15px;
    margin-right: 15px;
  `;

const LayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10rem; 
`;

const HeaderContainer = styled.div`
 
  .header-white {
    background-color: white;
    border-bottom: 1px solid #face11;
    a {
      color: #ae3a2d;
    }
  }
 
  border-bottom: 1px solid rgba(255, 255, 255, .2);
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  z-index:10000;

  a {
    text-decoration: none !important;
    box-shadow: none;
    padding: 10px;
    padding-bottom:0px;
  }

  a:hover {
    text-decoration: underline !important;
  }

  .logo {
    img {
      max-width: 150px;
      max-height: 150px;
    }
  }

  nav {
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0px;
    font-style: normal;

  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
`
const MainContainer = styled.div`
    position:relative;
    top:200px;
    margin-left: auto;
    margin-right: auto;
`;

const Footer = styled.footer`
  text-align:center;
  width: 100%;
  height: 2.5rem; 

  a {
    box-shadow: none;
    margin-left:10px;
    height:30px !important;
    width:30px !important;
  }
`