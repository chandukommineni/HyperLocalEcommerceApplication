import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.png"
const Navbar = () => {
  const user={role:"user"}
  return (
    <nav className="w-full h-20  flex justify-between items-center px-10 bg-gray-100">
      <div className="font-bold flex items-center w-[25%]  gap-2">
        <img src={logo} alt="" className="w-16 h-16 rounded-full mix-blend-multiply"/>
        <h2>Hyper Local Ecommerce Application</h2>

      </div>
      <div className="w-[60%] font-semibold flex justify-evenly">
        <Link to="/home">Home</Link>
       
        {
          user.role=="user" && 
           <>
           <Link to="/orders">My Orders</Link>
           <Link to="/orders">Search Products</Link>
           <Link to="/shops">All Shops</Link>
           </>
          
        }
        {
          user.role!=="user" &&   <Link to="/addshop">Add Shop</Link>

        }
        

      </div>
      <div className="w-[10%] text-3xl flex justify-around">
        {
          user.role=="user" &&  <Link to="/cart"><FaShoppingCart /></Link>
        }
       
        <Link to="/userDetails"><FaUser/></Link>
      </div>
    </nav>
    
  )
};

export default Navbar;