import { useState } from "react";

export default function Contact() {

    const  [counter, setCounter] = useState(0)
    const [email, setEmail] = useState('')
    const [textarea, setTextarea] = useState('')
    const [error, setError] = useState(false)

    function handleCounter(e){

        const newValue = e.target.value;

        if(textarea.length <= 500 || newValue.length < textarea.length){
            setTextarea(newValue)
            setCounter(newValue.length)
        }

    }

    function submitmessage(e){
       
        e.preventDefault()
        if(textarea.length > 500){
            setError("cant be more than 500 character")
        }else if(textarea.length < 10){
            setError("please give a more details explanation")
        }
        else{
            alert("Success")
            setCounter(0)
            setEmail('')
            setTextarea('')
            setError(false)
        }
    }
    
  return (
    <div className="text-white">
      <h1 className="text-3xl font-black text-center">Contact-Us</h1>

      <div className="w-full sm:w-5/6 md:w-3/4 border rounded-lg border-primary mx-auto px-5 py-10">
        <form onSubmit={submitmessage} action="" className="space-y-5">
          <div className="flex  text-lg flex-col space-y-2 w-full sm:w-4/5 md:w-1/2">
            <label className="" htmlFor="email">
              {" "}
              Email Address:
            </label>
            <input
              className="outline-none  text-primary  bg-white/80 px-5 rounded-md hover:border-2 py-1 hover:border-primary"
              type="email"
              id="email"
              name="email"
              value={email}
            />
          </div>
          <div className="flex  text-lg flex-col space-y-2 w-full sm:w-4/5 md:w-1/2">
            <label className="" htmlFor="message">
              {" "}
              Message/ complaint
            </label>
            <textarea
              className="outline-none max-h-[200px] py-3 text-[16px] min-h-[100px] text-primary  bg-white/80 px-5 rounded-md hover:border-2 hover:border-primary"
              type="text"
              id="message"
              name="message"
              value={textarea}
              onChange={handleCounter}
              >
            
              </textarea>
              <div className="flex justify-between text-sm italic w-full">
               <span className="text-red-700">{error}</span> <span>{counter}/500</span>
              </div>
          </div>
          <div>
            <button onSubmit={submitmessage} className="bg-white/80 text-primary py-1 px-5 rounded-md font-black border hover:bg-transparent" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
