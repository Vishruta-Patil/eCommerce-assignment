import { Link, useNavigate } from "react-router-dom";
import { User } from "../../context/userContext";
import { useWishList } from "../../context/wishlistContext";
import { navData } from "../../data/navData";
import { logOut } from "../../utils/handler";
import { NavUnit } from "./NavUnit";

export const CollapseNav = ({ open, setOpen }) => {
  const { authState, authDispatch } = User();
  const navigate = useNavigate();
  const { dispatch } = useWishList();

  return (
    <div>
      <div
        id="empty-box"
        className={`${open ? "overlay-container" : "white-container"}`}
      ></div>
      <nav
        className={`collape-navbar-container ${
          open ? "display-nav" : "hide-nav"
        }`}
      >
        <div className="header-navbar flex justify-between">
          <h2>
            magni
            <span className="secondary-color highlight-letter-header">Z</span>
            ent
          </h2>
          <button className="nav-close-btn" onClick={() => setOpen(!open)}>
            <span className="material-icons icon"> close </span>
          </button>
        </div>
        <hr className="hr-line" />
        <div className="navbar-item-container secondary-color">
          {navData.map(
            (item, index) =>
              item.type === "normal" && <NavUnit key={index} item={item} />
          )}

          <div className="hide-mini-desktop">
            {navData.map(
              (item, index) =>
                item.type === "mini-desktop" && (
                  <NavUnit key={index} item={item} />
                )
            )}
            {!authState.loginStatus ? (
              <Link to="/login" className="secondary-color">
                <div className="navbar-unit flex">
                  <span className="material-icons nav-icon"> login </span>
                  <div className="navbar-unit-title">Login</div>
                </div>
              </Link>
            ) : (
              <Link
                to="/login"
                className="secondary-color"
                onClick={() => logOut(authDispatch, navigate, dispatch)}
              >
                <div className="navbar-unit flex">
                  <span className="material-icons nav-icon"> logout </span>
                  <div className="navbar-unit-title">Logout</div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
