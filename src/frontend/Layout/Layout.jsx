import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Layout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname == '/login' || location.pathname == '/register' ? true : false ;
    const noHeader = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <>    
            { noHeaderFooter || <Navbar></Navbar> }
            <Outlet></Outlet>
            { noHeader ||  <Footer></Footer> }
        </>
    );
};

export default Layout;