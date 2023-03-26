import { Link } from "react-router-dom"

export const NavUnit = ({item}) => {
    return (
        <Link to={item?.link} className="secondary-color">
            <div className="navbar-unit flex">
              <span className="material-icons nav-icon"> {item?.icon} </span>
              <div className="navbar-unit-title">{item?.title}</div>
            </div>
        </Link>
    )
}