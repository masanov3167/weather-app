import { NavLink } from "react-router-dom"

const FooterItem = ({pagelink, pageClass}) =>{
    return (
        <NavLink className={pageClass} to={pagelink} />
    )
}

export default FooterItem;