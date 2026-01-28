
import { useState } from "react";
import Appoinments from "../DocApp/Appoinments";
import { Link } from "react-router-dom";

const Header = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <>
      <header >
        <nav className=" 2xl-container max-auto">
          <div className=" w-[90%] mx-auto top-5  scroll-smooth ">


            <div className='flex items-center mt-4'>
              <img src="https://ik.imagekit.io/8wxvbajv2/Health-Insurance.jpg" alt="HealthCare" className='w-[100px] object-cover
            h-[80px] rounded-[30px] rounded-bl-none flex justify-start items-center lg:w-[100px] lg:h-[80px]  ' />
              <h1 className='ml-2 text-3xl font-semibold'>HealthCare</h1>


              {/* <input className='w-[120px] h-[40px] rounded-xl rounded-bl-none border border-b-red-500 p-2  m-8 md:w-[900px]
              md: h-[50px] md:items-center md:ml[60%]' placeholder='search '
                /> */}

              <div className='  flex  -mr-8  justify-end w-screen   '>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className=" rotate-center lucide lucide-text-align-justify-icon lucide-text-align-justify mr-[20%] size-[25px]  lg:hidden block "

                  onClick={() => setIsopen(!isopen)}

                ><path d="M3 5h18" /><path d="M3 12h18" /><path d="M3 19h18" />
                </svg>
                {/* {isopen ? "X" : "-"} */}

                <svg
                  xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x hidden   "
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>

              </div>
            </div>
            {/* lg */}
            <div className=' hidden  animate-fade-in  lg:block    justify-between items-center  '>
              <ul className=' text-[40px] font-semibold  flex justify-between items-center gap-5 ml-5 p-2  lg:text-[20px] '>

                <Link to="/" >

                  <li className='text-blue-800 hover:text-xl hover:scroll-smooth' id="">Home</li></Link>

                <Link to="/AIchat" >

                  <li className='' >Al Health chatbot</li></Link>


                <Link to="/Appoinments" >

                  <li className=' '>Doctor Appoinments </li>
                </Link>

                <a href="#Web" >

                  <li className=' ' >webiste Records</li>
                </a>

                <a href="mailto:gowthamtkd80@gmail.com"  >
                  <li className=' '>Contact</li>
                </a>

                <Link to="/Login" >

                  <li className="bg-blue-600 w-fit px-3 py-1 rounded-xl text-white" >Login</li>
                </Link>


              </ul>


            </div >






            <div className=' lg:hidden  animate-fade-in   rounded-xl rounded-tl-none  h-screen absolute  top-[62px]  z-20  '>
              {isopen && (
                <ul className='  bg-slate-200 text-xl  flex flex-col   items-start  w-[90%] h-screen p-12 gap-6 mt-12  '>
                  <Link to="/"  >
                    <li className='  lg:text-blue-800 hover:text-xl scroll-smooth ml-3' onClick={() => setIsopen(false)}>Home</li></Link>
                  <Link to="/AIchat"  >

                    <li className='hover:text-xl hover:bg-slate-400 p-2 rounded-lg '  onClick={() => setIsopen(false)} >Al Health chatbot</li></Link>

                  <Link to="/Appoinments"  >
                    <li className='hover:text-xl hover:bg-slate-400 p-2 rounded-lg '   onClick={() => setIsopen(false)}  >Doctor Appoinments</li></Link>


                  <a href="#Web"  >

                    <li className='hover:text-xl hover:bg-slate-400 p-2 rounded-lg '  onClick={() => setIsopen(false)}   >webiste Records </li></a>


                   <a href="mailto:gowthamtkd80@gmail.com"  >
                    <li className='hover:text-xl hover:bg-slate-400  p-2 rounded-lg '    onClick={() => setIsopen(false)}     >contact</li></a>


                  <Link to="/Login"  >


                    <li className='hover:text-xl hover:bg-slate-400  p-2 rounded-lg '   onClick={() => setIsopen(false)}    >Login</li></Link>

                </ul>
              )}
            </div >


          </div>
        </nav>
      </header>


    </>
  )
}

export default Header;