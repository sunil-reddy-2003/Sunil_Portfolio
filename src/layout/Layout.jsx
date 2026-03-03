import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";
const Layout=()=>{
    return(
        <div className="bg-purple-300 ">
            
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;