
import { Link } from "react-router-dom";
import Trichy from "../visit/trichy";
import Karur from "../visit/Karur";


const Doctor = () => {
  return (

    <>
      <div className='2xl-container mx-auto '>
        <div className='  w-[95%] backdrop:md:w-[90%] mx-auto mt-8'>
          <h1 className=' text-2xl font-[Roboto]'> Place of Visiting Doctor </h1>

          <div className='mt-6'>
            <div className=' flex justify-around '>
             <Link to = "/Trichy" >
              <h1 className='w-fit  bg-white shadow-xl rounded-lg p-1 '>Tiruchirappalli</h1>
              </Link>

               <Link to = "/Karur" >
              <h1 className=' w-fit bg-white shadow-xl rounded-lg p-1'>Karur</h1></Link>
              <h1 className='  w-fit   bg-white shadow-xl rounded-lg p-1'>Soon Coming next City </h1>


            </div>

          </div>
        </div>
      </div>


    </>
  )
}
export default Doctor;