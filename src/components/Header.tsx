import Nav from "./Nav";
import { CgMenu } from "react-icons/cg";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";
import { useMenuContext } from "../context/menucontext";

const Header = () => {
  const { matches, open, onTouchEnd, onSwitch } = useMenuContext();
  return (
    <div>
      {matches ? (
        <>
          <Drawer
            open={open}
            onClose={onTouchEnd}
            placement={"left"}
            width="100%"
            style={{ background: "#00204c" }}
          >
            <Nav />
          </Drawer>
          <div className="hamburger-icon">
            <div className="vertex-logo">
              <img src="cross.webp" alt="not found" /> <span>Vertex Team</span>
            </div>
            <CgMenu className="toggle-border" onClick={onSwitch} />
          </div>
        </>
      ) : (
        <Nav />
      )}
    </div>
  );
};

export default Header;
