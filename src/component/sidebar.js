import { NavLink } from "react-router-dom"
import { sidebar_items } from "../variables"

const Sidebar=()=>{
    return(
        <>
            <div class="sidebar_wrapper">
                <ul class="flex g-20 menu_items ">
                    {
                        sidebar_items.map((item)=>{
                            return(
                            <>
                            <NavLink key={item.path} to={item.path} className={({ isActive }) => (isActive ? 'active-link' : null)}>
                                <li className="flex flex-al-center sidebar_menu_item g-10">
                                    <img src={item.src} alt={item.alt} />
                                    <a>{item.name}</a>
                                </li>
                            </NavLink>
                            </>
                            )
                            
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar

