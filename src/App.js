import { useState } from "react";
import "./App.css";
import Todolistitem from "./Todolistitem";


function App() {

  const [inputlist , setinputlist] = useState("");
  const [items , setitems] = useState([]);

  const itemEvent = (event)=>{
    setinputlist(event.target.value);
  };
 

 const addlistitem = ()=>{
     setitems((olditem)=>{
      return [...olditem , inputlist]
     });
     setinputlist('');
 }

 const deleteitem = (id)=>{
  console.log("Deleted"); 
  setitems((olditem)=>{
    return olditem.filter((arrayelement , index)=>{
      return index !== id;
    })
  })
 }

  return (
    <div className="w-[100%] h-[100vh] bg-emerald-500 flex justify-center items-center">
        
        <div className=" bg-gray-300 h-[500px] w-[300px] rounded-2xl drop-shadow-lg ">
          <br />
          <h1 className="text-center text-3xl font-bold bg-emerald-700 py-2 text-white ">ToDo List</h1>
          <br />
          <div className="text-center">
          <input type="text" placeholder="Add a item" value={inputlist} onChange={itemEvent}  className=" bg-gray-300 border-b-4 border-emerald-700 text-center text-lg outline-none"/>
          <button className="bg-emerald-700 h-12 w-12 rounded-full ml-3 font-bold text-3xl text-white hover:bg-green-600 " onClick={addlistitem} >+</button>
          </div>
          <ol>
            {
              items.map((item , index)=>{
               return <Todolistitem key={index} id={index} text={item} onSelect = {deleteitem} />
              })
            }
          </ol>
        </div>
    </div>
  );
}

export default App;
