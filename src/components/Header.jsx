import { Link } from "react-scroll";
import Logo from "./Logo";
import { styled } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  height: var(--header-height);
  background-color: var(--lightBlue_1);
  border-bottom: 1px solid var(--mediumSlateBlue);

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }
  .navMenu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  nav ul li {
    a {
      font-size: 1rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
      color: var(--darkBlue_2);
    }
    &:hover {
      a {
        text-decoration: underline;
      }
    }
    display: inline-block;
    margin: 0 0.5rem;
  }

  .menuIcon,
  .closeNavBtn {
    display: none;
    visibility: hidden;
  }

  @media only screen and (max-width: 768px) {
    nav {
      position: fixed;
      right: 0;
      top: 0;
      width: 80%;
      max-width: 250px;
      height: 100vh;
      background-color: var(--lightBlue_2);
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 100;
      transform: translateX(100%);
      transition: 0.3s ease transform;
      overflow: hidden;
    }

    nav.open {
      transform: translateX(0);
    }

    nav ul li {
      display: inline-block;
      width: 100%;
      text-align: center;
      margin: 0.5rem 0;
    }
    .menuIcon {
      width: 30px;
      height: 30px;
      cursor: pointer;
      margin-left: 10px;
      padding: 5px;
      display: flex;
      visibility: visible;
      border-radius: 5px;
      svg {
        color: var(--darkBlue_1);
      }

      &:hover {
        background-color: #8080803b;
      }
    }
    .closeNavBtn {
      display: flex;
      visibility: visible;
      width: 35px;
      height: 35px;
      position: absolute;
      top: 15px;
      right: 30px;
      cursor: pointer;
      padding: 5px;
      border-radius: 5px;

      &:hover {
        background-color: #8080803b;
        svg {
          color: var(--white);
        }
      }
    }
  }
`;

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const showNavBarMobile = () => {
    setIsNavOpen(true);
  };
  const closeNavBarMobile = () => {
    setIsNavOpen(false);
  };
  return (
    <HeaderStyle>
      <div className="container">
        <div className="navigation">
          <Logo />

          <div className="navMenu">
            <nav className={isNavOpen ? "open" : undefined}>
              <div className="closeNavBtn">
                <AiFillCloseCircle onClick={closeNavBarMobile} />
              </div>

              <ul>
                <li>
                  <Link to="home"> Home</Link>
                </li>
                <li>
                  <Link to="services">Services</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <ThemeSwitcher />

            <div className="menuIcon">
              <GiHamburgerMenu onClick={showNavBarMobile} />
            </div>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
}
