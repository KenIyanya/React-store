import {Container} from "react-bootstrap";
import {Routes, Route, Navigate, useLocation, Link} from "react-router-dom";
import { useEffect, useState } from "react";

import Teammembers from "../components/Dashboard/Teammembers/index";
import Home from "../components/Dashboard/Home/index";

import Hm from "../components/Dashboard/Hm/index";

import Customers from "../components/Dashboard/Customers";

import profile from "../assets/svg/sidebar/profile.svg";
import logout from "../assets/svg/sidebar/logout.svg";
import menu from "../assets/svg/menu.svg";
import Products from "../components/Dashboard/Products/index";


function Dashboard () {
    const location = useLocation().pathname;
    const [path, setPath] = useState("");
    
    const openNav = () => {
        document.getElementById("sidebar").style.left = "0px";
    }
    
    const closeNav = () => {
        document.getElementById("sidebar").style.left = "-300px";
    }

    const changePathAndClose = (path) => {
        if(window.innerWidth<=992){
            closeNav()
        }
        setPath(path);
        
    }

    

    useEffect(()=>{
        setPath(location);
       
    }, [location])
   
    let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
    
    return(
        <div className="dashboard">
            <div className="dashboard_sidebar hide-scrollBar" id="sidebar">
                <img src={profile} alt="cancel" className="dashboard_sidebar-cancel" onClick={closeNav} />
                <h3> Welcome {userDetails.name} </h3>

                <div className="dashboard_sidebar-main"></div>
                
              
                <Link className="link-decor" to="/hm">
                    <div 
                        className={path.includes("hm") || path==="hm"
                            ?"dashboard_sidebar-items active"
                            :"dashboard_sidebar-items"}
                        onClick={()=>changePathAndClose("message") }
                    >
                        <img src={profile} alt="icon" />
                        <p>Home</p>
                    </div>
                </Link>

                <Link className="link-decor" to="/teammembers">
                    <div 
                        className={path.includes("teammembers") || path==="teammembers"
                            ?"dashboard_sidebar-items active"
                            :"dashboard_sidebar-items"}
                        onClick={()=>changePathAndClose("message") }
                    >
                        <img src={profile} alt="icon" />
                        <p>Teammembers</p>
                    </div>
                </Link>

                <Link className="link-decor" to="/customers">
                        <div 
                            className={path.includes("customer") || path==="customers"
                                ?"dashboard_sidebar-items active"
                                :"dashboard_sidebar-items"}
                            onClick={()=>changePathAndClose("customers") }
                        >
                            <img src={profile} alt="icon" />
                            <p>Clients</p>
                        </div>
                    </Link>
                
                
           
                <Link className="link-decor" to="/products">
                    <div 
                        className={path.includes("products") || path==="products"
                            ?"dashboard_sidebar-items active"
                            :"dashboard_sidebar-items"}
                        onClick={()=>changePathAndClose("products") }
                    >
                        <img src={profile} alt="icon" />
                        <p>Products</p>
                    </div>
                </Link>
                <hr />
               
               
                <Link className="link-decor" to="/signin">
                    <div 
                        className={path.includes("hm") || path==="hm"
                            ?"dashboard_sidebar-items active"
                            :"dashboard_sidebar-items"}
                        onClick={()=>changePathAndClose("hm") }
                    >
                        <img src={logout} alt="icon" />
                    <p>Logout</p>
                    </div>
                </Link>
                
                </div>
            <div className="dashboard_main">
                <Container>
                    <div className="dashboard_main-nav">
                        <img src={menu} alt="menu"  className="dashboard_main-nav-menu" 
                        onClick={()=>openNav()}/>
                        <h4 
                        //onClick={goToBoard} 
                        style={{cursor:"pointer"}}>
                            {
                                path.includes("dbhome")?"Home"
                                :path.includes("customers")?"Customers"
                                
                                :path.includes("hm")?"Home"

                                :path.includes("teammembers")?"Teammembers"
                                
                                :path.includes("products")?"Products"
                                :""
                            }
                           
                        </h4>
                        
                         
                    </div>
                        
                    
                    
                </Container>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="/hm" />}/>
                        <Route path="/home" element={<Home />} />

                        <Route path="/hm" element={<Hm />} />

                        <Route path="/customers" element={<Customers />} />
                       
                        <Route path="/teammembers/*" element={<Teammembers  />} />
                      
                        <Route path="/products/*" element={<Products   />} />
                      
                    </Routes>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard;