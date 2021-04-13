import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import "./style.scss";
import Logo from "../../static/images/rats_logo.jpg";
import classNames from "classnames";

const rootPath = `${__PATH_PREFIX__}/`
const blogPath = `${__PATH_PREFIX__}/blog/`

function Header({ location }) {
  return (
    <>
      <div className="col-lg-1 col-4">
        <Link className="d-flex logo" to={location.pathname === blogPath ? `/` : `/`} >
          <img src={Logo} className="float-left" />
        </Link>
      </div>
      <nav className="col-lg-11 col-8 mb-4 mt-0 text-right mt-5 pr-5">
        <a href="/" className="nav-button" disabled={location.pathname === rootPath}>
          Home
        </a>
        <Link to="/contact/" className="nav-button" disabled={location.pathname === "/contact/"}>
          Contact
        </Link>
        <Link to="/blog/" className="nav-button" disabled={location.pathname === "/blog/"}>
          Our Work
        </Link>
      </nav>
    </>
  );
}

export default function Layout(props) {

  const { location, title, children } = props;
  const [headerClass, setHeaderClass] = useState("header-transparent");

  useEffect(() => {
    if (window && location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 534) {
      setHeaderClass("header-white");
    } else if (window.scrollY <= 534) {
      setHeaderClass("header-transparent");
    }
  }

  return (
    <Container>
      <Wrapper >
        <LayoutContainer >
          <div className="mx-auto" >
            <HeaderContainer >
              <div className={classNames(headerClass, "row mb-0 justify-content-middle")}>
                <Header location={location} />
              </div>
            </HeaderContainer>
            <MainContainer className="position-relative row">
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
  .header-transparent {
    background-color:rgba(0, 0, 0, 0.2);

    a {
      color: white;
    }
  }

  .header-white {
    background-color: white;
    border-bottom: 1px solid #face11;
    a {
      color: #face11;
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

  a:hover{
    text-decoration: underline !important;
  }

  .logo {
    img {
      max-width: 125px;
      max-height: 125px;
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
    top:200px;
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