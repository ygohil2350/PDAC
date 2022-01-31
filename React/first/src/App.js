import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import { My } from "./Component/My";
import UseState from "./Component/Hooks/UseState";
import BGDisplay from "./Component/BGDisplay";
import Logo  from "./Component/Logo";
import MyTime from "./Component/MyTime";
import CoWrite from "./Component/CoWrite";

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
          <MyTime/> */}
          <CoWrite/>
    </div>
  );
}

export default App;

// rsc
// rcc
