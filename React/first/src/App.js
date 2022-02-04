import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import { My } from "./Component/My";
import UseState from "./Component/Hooks/UseState";
import BGDisplay from "./Component/BGDisplay";
import Logo  from "./Component/Logo";
import MyTime from "./Component/MyTime";
import CoWrite from "./Component/CoWrite";
import ArrayInUseState from "./Component/ArrayInUseState";
import { datafor } from "./Component/Data";
import Child from "./Component/Child";
import SearchBar from "./Component/SearchBar";
import CounterWithReduse from "./Component/CounterWithReduse";
import Ourmember from "./Class/OurMembers";
import NavigationBar from "./Routing/NavigationBar";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Google from "./Routing/Google";
import Bing from "./Routing/Bing";

function App() {
  const data=[
    {Name:"FaceBook",link:"http://www.facebook.com"},
    {Name:"Picupbizz",link:"http://www.pickupbizz.com"},
    {Name:"google",link:"http://www.google.com"},
    {Name:"Bing",link:"http://www.bing.com"}]
  

  return (
    <div className="App">  
           {/* <Navbar navData={data}/>
          <My/  > 
          <UseState/>
          <BGDisplay/>
          <Logo/>
          <MyTime/>         
          <CoWrite/> 
          <ArrayInUseState/> 
          <Child Childata={datafor}/> 
          <SearchBar/> 
          <CounterWithReduse/> 
          <Ourmember/> */}          
          {/* <BrowserRouter>
          <NavigationBar />
          <Routes>
          <Route path="google" element={<Google/>}/>
          <Route path="bing" element={<Bing/>}/>
          </Routes>
          </BrowserRouter> */}
          





    </div>
  );
}

export default App;

// rsc
// rcc
