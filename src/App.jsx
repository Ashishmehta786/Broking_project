
import Navbar from './ui/Navbar';
import "./index.css"
import { Link, redirect } from "react-router-dom";
import Rupee from "./assets/Rupee.svg";
import Buy from "./assets/buy.svg";
import sell from "./assets/sell.svg";
import stockgraph from "./assets/stockgraph.gif";
import Charts from "./assets/Charts.png";
import { Plans } from './ui/Plans';
import Footer from './ui/Footer';
function App() {


  return (
    <div >
    <Navbar/>
    <div className="md:mx-[100px] flex flex-col gap-20 ">
  <div className='  flex flex-col items-center justify-between text-slate-800 gap-3'>
    <div className="text-4xl mt-10 text-slate-900 text-center"> Welcome to BrokerABC</div>
    <div className="text-3xl  m-2 p-2  flex text-center mt-3  text-slate-900"> Start direct investing in stocks ,  mutual funds ,  etfs , bonds etc</div>
    <button className ="m-2 p-2 hover:bg-opacity-80 bg-yellow-400 text-slate-900 hover:text-slate-800 mb-9" ><Link to="/Signup">Register Now!</Link></button>
  </div>
  <div className=' bg-slate-200  md:rounded-2xl items-center py-10 '>
   
<div className='m-2 p-2  text-slate-700 md:text-4xl text-3xl font-medium text-center  pt-5'> We have ZERO Brokerage* </div>
<div className="   flex text-center items-center justify-center  mt-4 text-xl font-normal text-slate-900  ">For Lifetime with Zero Brokerage and Unlimited Trades in F&O and Intraday 
<img  className="  mt-4  mx-1 md:mx-3 w-12" src={Buy} />

</div>
<div className="text-sm text-center md:mt-5 mt-3 ">*Note: For Delivery Trades there is 0.05% Brokerages and for unlimited F&O and Intraday one must have BrokerABC Pro plan.  </div>
  </div>
  <div className="flex flex-col m-4 p-4 items-center  my-10 justify-center "> 
  <div className="md:text-4xl text-3xl text-center font-medium text-zinc-800 my-6 ">
    Don't Know Where To Start Investing?
  </div>
  <div className="text-2xl text-center text-zinc-800 my-5   leading-relaxed bg-slate-50 flex flex-col justify-center items-center  "> We have Regular Seminars Regarding Understanding Core Investing.  Create Wealth! 

  </div>
  </div>
  <div className="flex flex-col items-center justify-center bg-[#fff]  py-10  p-10 rounded-3xl"> 
  <h1 className='text-4xl'>Understand When to Buy and When to sell!</h1>

  <img className="md:h-[30%] md:w-[30%] my-5 "  src={Charts}/>
  <h2 className='text-4xl mt-4 '>Master Chart Patterns</h2>
  </div>
<div className="flex flex-col justify-center items-center mt-[100px]">
  <div className="font-medium text-4xl text-slate-800">Our plans</div>
  <div className='mt-10 md:grid grid-cols-6 '>
<div className="md:col-span-2"><Plans  title="Basic Plan" pricing="0" features={["Unlimited Trades","Summary of Day","Technical Analysis","Fundamental Analysis","Daily News"]}/></div>
<div className="col-span-2"><Plans link='/Plusplan'  title="Plus Plan" pricing="400/year" features={["Unlimited Trades","Summary of Day","Technical Analysis","Fundamental Analysis","Daily News","No Brokerage F&O Trades"]}/></div>
<div className="cols-span-2"><Plans  link='/Proplan' title="Pro Plan"extra="(Lifetime)" pricing="1000" features={["Unlimited Trades","Summary of Day","Technical Analysis","Fundamental Analysis","Daily News","No Brokerage in F&O","No Brokerage in Intraday","Stock Recommendations","Resources available for Trading","Regular Workshops"]}/></div>

  </div>
 
</div>
<div className="items-center text-center justify-center flex flex-col mt-10 gap-8 mb-10"> 
  <h1 className='md:text-4xl text-3xl'  >Query For more Details</h1>
  <button className=' text-xl font-medium bg-yellow-400 text-slate-900 hover:bg-yellow-500'><Link to="/Contact">Query</Link></button>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default App
