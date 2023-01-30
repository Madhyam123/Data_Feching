import logo from './logo.svg';
import './App.css';
import Add from './components/Add'
import User from './components/User'
import Sub from './components/Sub'
import User_listing from './components/User_listing';
function App() {
  var user_data={
    name:"aditya",
    age:22,
    city:"nagpur"
  }
  return (
   <>
   <User_listing/>
   {/* <h1>hello react</h1>
   <h1>{3*5}</h1> */}
   {/* <Add x={5} y={10}/>
   <Sub/> */}
   {/* <User data={{name:"Madhyam",age:21,city:"Mumbai", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kdAe6l8zWQJOVvQ4bKFec0oM1i3jvx_DfzD_EQeu&s"}}/>
   <User data={user_data} /> */}
   </>
  );
}

export default App;
