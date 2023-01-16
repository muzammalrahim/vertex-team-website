import styled from "styled-components";
import { Link } from "react-scroll";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useMenuContext } from "../context/menucontext";

const Nav = () => {
  const { matches, open, onTouchEnd, onSwitch } = useMenuContext();
  let navigate = useNavigate();
  const handleAbout = () => {
    navigate("/about");
    onTouchEnd();
  };
  const handleHome = () => {
    navigate("/");
    onTouchEnd();
  };
  const handleQuote = () => {
    navigate("/quote");
    onTouchEnd();
  };
  const Nav = styled.div`
    padding: 4rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .close-icon {
      display: block;
      margin: 0 -2.4rem 0 auto;
      font-size: 3.5rem;
      color: #fff;
    }

    .close-icon:focus {
      border: none;
    }
  `;

  const MenuLink = styled.a`
    padding: 1rem 1.5rem;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    color: #00204c;
    transition: all 0.3s ease-in;
    font-size: 1.5rem;
    font-weight: 600;
    &:hover {
      color: #a700fa;
    }

    .home-link {
      color: #a700fa;
    }

    @media (max-width: 768px) {
      padding: 1rem 1.2rem;
      font-size: 1.3rem;
    }

    @media (max-width: 576px) {
      font-size: 3rem;
      color: #fff;
    }
  `;

  const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 576px) {
      margin-top: 4rem;
      overflow: hidden;
      flex-direction: column;
      width: 100%;
      transition: max-height 0.3s ease-in;
    }
  `;

  const Logo = styled.a`
    padding: 2rem 4rem 4rem 2rem;
    box-shadow: 6.43px 7.66px 10px 0px rgba(167, 0, 250, 0.1);
    display: flex;
    align-items: center;
    color: #000;
    gap: 1.7rem;
    border-radius: 2rem;
    text-decoration: none;
    background: #fff;
    font-weight: 800;
    font-size: 1.9rem;
    span {
      font-family: "Suez One", serif;
    }

    @media (max-width: 768px) {
      padding: 2rem 3rem 4rem 3rem;
      gap: 1rem;
      font-size: 1.7rem;
    }
  `;

  return (
    <Nav>
      {!matches && (
        <Logo href="">
          <img src="cross.webp" alt="not found" /> <span>Vertex Team</span>
        </Logo>
      )}

      <div className="close-icon" onClick={onTouchEnd}>
        {matches && <CgClose />}
      </div>
      <Menu>
        <MenuLink href="" className="home-link">
          <Link
            activeClass="active"
            to="#"
            spy={true}
            smooth={true}
            offset={50}
            className="home-link"
            onClick={handleHome}
          >
            Home
          </Link>
        </MenuLink>
        <MenuLink href="">
          <Link
            activeClass="active"
            to="perche"
            spy={true}
            smooth={true}
            offset={50}
          >
            Perche noi
          </Link>
        </MenuLink>
        <MenuLink onClick={handleAbout}>I nostri servizi</MenuLink>
        <MenuLink href="">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
          >
            Contattaci
          </Link>
        </MenuLink>
        <MenuLink onClick={handleQuote}>Preventivi</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Nav;
