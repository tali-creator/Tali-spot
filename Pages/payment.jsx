

export default function Payment({food, currentImg, total, quantity, closeOrder}) {

    const toggle = true

  return (
    <div className=" w-full h-auto sm:w-4/5 md:w-1/2 bg-primary p-5 flex md:flex-row  flex-col relative rounded-4xl">
        <div className="w-full flex my-3  justify-center">
            <img className="w-full sm:w-2/3 md:w-5/6 rounded-4xl" src={currentImg} alt="" />
        </div>
        <div className="w-full flex  flex-col space-y-5">
            <p className="flex w-full text-white justify-between text-xl font-black "><span className="flex justify-center w-full">Name: </span> <span className="flex justify-center w-full">{food.name}</span></p>
            <p className="flex w-full text-white justify-between text-xl font-black "><span className="flex justify-center w-full">Quantity: </span> <span className="flex justify-center w-full">{quantity}</span></p>
            <p className="flex w-full text-white justify-between text-xl font-black "><span className="flex justify-center w-full">Total: </span> <span className="flex justify-center w-full"> {total}</span></p>
            <div className="flex justify-center">
            <button type="submit" className="py-1 px-10 bg-white hover:bg-transparent hover:text-white hover:border-white border font-black  text-primary rounded-lg transition-all duration-200">Order Now</button>
          </div>
        </div>
        <div onClick={closeOrder} className="absolute top-5 right-5">
          <div  className={`w-7 transform transition-all p-0.5 duration-300  bg-white/80 ${toggle && "-rotate-45 translate-y-2"} `} ></div>
          <div className={`w-7 transform transition-all p-0.5  duration-300 bg-white/80 ${toggle && "rotate-45"}`}></div>
        </div>
    </div>
  )
}
