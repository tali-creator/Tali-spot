import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./navigation/Nav";

export default function Layout() {

  const [backgroundImage, setBackgroundImage] = useState(0);

  const images = [
    "/background-images/background6.jpg",
    "/background-images/background5.jpg ",
    "/background-images/background4.jpg",
    "/background-images/background3.jpg",
    "/background-images/background2.jpg",
    "/background-images/background1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prv) => (prv + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div 
    style={{
      width: "100vw",
      height: "auto",
      backgroundImage: `url(${images[backgroundImage]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }} className="flex flex-col h-auto relative w-full min-h-screen">


     <div className="absolute top-0 left-0 overflow-y-scroll w-full h-full bg-black/85">
      <nav className=" fixed w-full  bg-black/50">
        <Nav />
      </nav>

      <main className="mt-20">
        <Outlet />
      </main>

      <footer></footer>

     </div>
    </div>
  );
}
