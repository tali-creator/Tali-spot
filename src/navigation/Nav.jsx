import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {

  const [toggle, setToggle] = useState(false);

  function handleToggle(){

    if(toggle){
      setToggle(false);
    }else{
      setToggle(true);
    }
  }

  return (
    <div className="flex justify-between px-10 py-5  z-90">
      <NavLink to={"/"} className="w-fit text-white text-2xl  font-black italic border-b-4 border-r-8 px-3 rounded-br-3xl rounded-tr-2xl  border-primary">
        Tali&#39;spot
      </NavLink>
      <div className="space-x-4 md:text-xl hidden sm:flex text-white/80">
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/menu"}>Menu</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <div style={{position: toggle ? "absolute" : "", backgroundColor: toggle? "black" : "" }} className="animate-slide-in transition ease-linear duration-300 top-0 right-0 px-5 flex sm:hidden flex-col items-end w-full md:w-1/2  ">
        <div onClick={handleToggle} style={{paddingTop: toggle? "20px": "0px"}} className="animate-slide-in flex flex-col space-y-1 w-fit cursor-pointer">
          <div  className={`w-7 transform transition-all p-0.5 duration-300  bg-white/80 ${toggle && "-rotate-45 translate-y-2"} `}></div>
          <div className={`w-7 transform transition-all p-0.5  duration-300 bg-white/80 ${toggle && "hidden"}`}></div>
          <div className={`w-7 transform transition-all p-0.5  duration-300 bg-white/80 ${toggle && "rotate-45"}`}></div>
        </div>
        <div style={{display: `${toggle ? "flex" : "none"}`}} className=" animate-slide-in space-x-4 flex-col space-y-3 md:text-xl w-full items-start text-white/80">
          <NavLink onClick={handleToggle} className='hover:text-primary border-primary hover:border-b w-full ' to={"/about"}>About</NavLink>
          <NavLink onClick={handleToggle} className='hover:text-primary border-primary hover:border-b w-full ' to={"/menu"}>Menu</NavLink>
          <NavLink onClick={handleToggle} className='hover:text-primary border-primary hover:border-b w-full ' to={"/contact"}>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}
