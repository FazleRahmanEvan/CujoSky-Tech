import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllWork from './Components/AllWork/AllWork';
import Management from './Components/AllWork/Management';
import WebDesign from './Components/AllWork/WebDesign';
import Artical from './Components/Blog/Article';

import BlogDetails from './Components/Blog/BlogDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';

import Navbar from './Components/Shared/Navbar';
import OurPrice from './Components/OurPrice/OurPrice';
import UIUXDesign from './Components/OurPrice/UIUXDesign/UIUXDesign';
import Content from './Components/OurPrice/Content/Content';
import About from './Components/About/About';
import Article2 from './Components/Blog/Article2';
import Article3 from './Components/Blog/Article3';


// import About from './Pages/About';

function App() {
  return (
<div className=''>
<Navbar></Navbar>
<Routes>
<Route path="/" element ={<Home></Home>}></Route>
<Route path="/blogs" element ={<BlogDetails></BlogDetails>}></Route>
<Route path="/ourWork" element ={<AllWork></AllWork>}></Route>
<Route path="/ourPrice" element ={<OurPrice></OurPrice>}></Route>
<Route path="/about" element ={<About></About>}></Route>
<Route path="/ourContent" element ={<Content></Content>}></Route>
<Route path="/uiuxDesign" element ={<UIUXDesign></UIUXDesign>}></Route>
<Route path="/article1" element ={<Artical></Artical>}></Route>
<Route path="/article2" element ={<Article2></Article2>}></Route>
<Route path="/article3" element ={<Article3></Article3>}></Route>
<Route path="/managementSoftware" element ={<Management></Management>}></Route>
<Route path="/webDesign" element ={<WebDesign></WebDesign>}></Route>
<Route path="/appdevelopment" element ={<WebDesign></WebDesign>}></Route>
<Route path="/meettechdashboard" element ={<Dashboard></Dashboard>}></Route>
<Route path="/login" element ={<Dashboard></Dashboard>}></Route>

</Routes>
<Footer></Footer>
</div>
  );
}

export default App;
