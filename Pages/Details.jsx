import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Payment from "./payment";

export default function Details() {
  const { id } = useParams();

  const [foods, setFood] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1)
const [currentImg, setCurrentImg] = useState(null)
const [showOrder, setShowOrder] = useState(false)

  const url = "http://localhost:5000/food";
  useEffect(() => {
    async function fetchFoods() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("cannot fetch data");
        }
        const data = await res.json();
        setFood(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFoods();
  }, []);
  const food = foods.find((u) => Number(u.id) === Number(id));

  useEffect(() => {
    if (food) {
      setTotal(Number(food.price));
    }
  }, [food]);

  const incrementTotal = () => {
    setQuantity((prev) => prev + 1)
    setTotal((prev) => prev + Number(food.price))
  };


  const decrementTotal = () => {
    if (total > 0) {
      setQuantity((prev) => prev - 1)
      setTotal((prev) => prev - Number(food.price));
    }
  };

  const handleView = (img) => {
    setCurrentImg(img)
  }

  const closeOrder = () => {

    if(showOrder){
      setShowOrder(false)
    }else{
      setShowOrder(true)
    }
  }

  useEffect(() => {
    if(food){
      setCurrentImg(food.images[0])
    }
  }, [food])

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!food) return <p className="text-white">no food found</p>;

  console.log("foods", foods);

  if (!food) return <p>Food not found</p>;

  return (
    <div>
      <div className="w-full h-full min-w-[220px] md:h-screen flex flex-col space-y-5 md:space-y-0 bg-black/80 p-5 md:flex-row">
        <div className="w-full flex bg-top">
          <img
            className="w-full h-full  min-h-[220px] md:h-3/5 rounded-[100px] hover:cursor-pointer hover:scale-105 transition-all duration-200"
            src={currentImg}
            alt=""
          />
        </div>

        <div className="flex w-full gap-5 flex-wrap justify-center items-center pb-20">
          {food.images.map((img, index) => (
            <img
            onClick={() => handleView(img)}
              className="w-40 h-40 rounded-md hover:cursor-pointer hover:scale-105 transition-all duration-200"
              key={index}
              src={img}
            />
          ))}
        </div>


        <div className=" w-full h-auto px-5  flex  flex-col space-y-10 ">
          <div className="w-full space-y-4">
            <p className="md:text-2xl w-full flex justify-between text-primary">
              <span className="w-full">Name:</span>
              <span className="text-lg w-full text-white/80">{food.name}</span>
            </p>
            <p className="md:text-2xl w-full  flex justify-between text-primary">
              <span className="w-full">Description:</span>
              <span className="text-lg w-full text-white/80">
                {food.description[0]}
              </span>
            </p>
            <p className="md:text-2xl w-full flex justify-between text-primary">
              <span className="w-full">Price: per order</span>
              <span className="text-lg w-full text-white/80">
                N{food.price}
              </span>
            </p>

            <p className="md:text-2xl w-full flex justify-between text-primary">
              <span className="w-full">Quantity: </span>
              <span className="text-lg w-full text-white/80 flex space-x-5">
                <button onClick={decrementTotal} className="hover:border transition-all duration-200 hover:border-primary border hover:text-primary rounded-lg py-0.5 px-3 font-black text-xl bg-primary hover:bg-transparent">-</button>
                <span>{quantity}</span>
                <button onClick={incrementTotal} className="hover:border transition-all duration-200 hover:border-primary border hover:text-primary rounded-lg py-0.5 px-3 font-black text-xl bg-primary hover:bg-transparent">+</button>
              </span>
            </p>
            
          </div>
          <div>
            <p className="md:text-2xl w-full flex justify-between text-primary">
              <span className="w-full">Total:</span>
              <span className="text-lg w-full text-white/80">N{total}</span>
            </p>
          </div>
          <div className="flex justify-center pb-10">
            <button onClick={closeOrder} type="submit" className="py-1 px-10 bg-primary hover:bg-transparent border hover:border-primary hover:text-primary font-black  text-white rounded-lg transition-all duration-200">Order Now</button>
          </div>
        </div>

        
      

      </div>

      <div style={{display: showOrder? "flex" : "none"}} className="fixed top-0 left-0 w-full h-screen z-90 flex justify-center items-center bg-black/80">
        <Payment food={food} currentImg={currentImg} quantity={quantity} total={total} showOrder={showOrder} closeOrder={closeOrder}/> 
      </div>
    </div>

    
  );
}
