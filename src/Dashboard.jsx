import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  const [foods, setFood] = useState(null);
  const [error, setError] = useState("");

  const url = "/foods.json";
  useEffect(() => {
    async function fetchFoods() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("cannot fetch data");
        }
        const data = await res.json();
        console.log(data);
        setFood(data.food);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    }
    fetchFoods();
  }, []);

  if(error){
    return <div>Error</div>
  }

  if (!foods) {
    return <div>Loading...</div>;
  }
  return (
    <div className="scroll-bar text-white/80">
      <h1 className="text-5xl mb-10 text-primary text-center font-bold">
        Welcome to Tali&#39;s Pot
      </h1>

      <div id="scroll-bar" className="scroll-bar w-full overflow-x-scroll flex flex-wrap gap-10 px-10 md:px-0">
        {foods.map((food) => {
          const total = foods.price;

          return food.id % 2 === 0 ? (
            <NavLink to={`/foods/${food.id}`} key={food.id} className="  w-full md:w-2/3 h-auto">
              <div className=" rounded-2xl  w-full flex flex-col md:flex-row overflow-hidden md:rounded-none">
                <div className="w-full h-auto relative flex flex-col justify-center  py-10 pl-7 md:rounded-l-full  bg-black/70">
                  <p className="md:text-lg  flex justify-between text-primary">
                    {" "}
                    <span className="w-full">Name:</span>{" "}
                    <span className="text-lg w-full text-white/80">
                      {food.name}
                    </span>{" "}
                  </p>
                  <p className="md:text-lg flex justify-between text-primary">
                    {" "}
                    <span className="w-full">price Per Single Order: </span>
                    <span className="text-lg w-full text-white/80">
                      N{food.price}
                    </span>{" "}
                  </p>
                  <p className="md:text-lg text-primary flex justify-between items-center">
                    {" "}
                    <span className="w-full">Description:</span>{" "}
                    <span className="text-lg w-full text-white/80">
                      {" "}
                      {food.description[0]}
                    </span>
                  </p>
                  <p className="md:text-lg  text-primary flex justify-between">
                    <span className="w-full">Total:</span>{" "}
                    <span className="text-lg w-full text-white/80">
                      {total}
                    </span>
                  </p>
                </div>
                <div className="w-full">
                <img
                  className="w-full h-[300px] md:rounded-r-full "
                  src={food.images[0]}
                  alt={food.name}
                />
                </div>
              </div>
            </NavLink>
          ) : (
            <NavLink to={`/foods/${food.id}`}  key={food.id}  className="w-full flex justify-end rounded-lg md:rounded-none overflow-hidden">
              <div className="  w-full md:w-2/3 h-auto  flex-col md:flex-row flex">
              <div className="w-full">
                <img  className="w-full h-[300px] md:rounded-l-full"  src={food.images[0]}  alt={food.name}/>

              </div>
                <div className="w-full h-auto  flex flex-col justify-center py-10 px-3 md:rounded-r-full bg-black/70">
                  <p className="md:text-lg flex justify-between text-primary">
                    {" "}
                    <span className="w-full">Name:</span>{" "}
                    <span className="text-lg w-full text-white/80">
                      {food.name}
                    </span>{" "}
                  </p>
                  <p className="md:text-lg flex justify-between text-primary">
                    {" "}
                    <span className="w-full">price Per Single Order: </span>
                    <span className="text-lg w-full text-white/80">
                      N{food.price}
                    </span>{" "}
                  </p>
                  <p className="md:text-lg text-primary flex justify-between items-center">
                    {" "}
                    <span className="w-full">Description:</span>{" "}
                    <span className="text-lg w-full text-white/80">
                      {" "}
                      {food.description[0]}
                    </span>
                  </p>
                  <p className="md:text-lg  text-primary flex justify-between">
                    <span className="w-full">Total:</span>{" "}
                    <span className="text-lg w-full text-white/80">total</span>
                  </p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
