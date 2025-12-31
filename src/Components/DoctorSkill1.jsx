



const DoctorSkill1 = ({name,rating,experience,about}) =>{
    return(
        <>
        <div className="w-fit">
        <div className='w-fit  bg-white rounded-xl shadow-lg p-4
            transition-all duration-400 ease-in-out
            hover:translate-y-4 hover:shadow-3xl space-y-3 '>
            <h1 className='font-[Roboto] text-xl' >Doctor:{name}</h1>
            <h2 className=' font-[Roboto] text-lg' > Rating:{rating}</h2>
            <p className='font-[Roboto '>experience:{experience}</p>
            <div className=' flex justify-between  gap-4 '>

              <p className='bg-slate-400 rounded-xl px-5 py-1' >s1</p>
              <p  className='bg-slate-400 rounded-xl px-5 py-1' >s2</p>
              <p   className='bg-slate-400 rounded-xl px-5 py-1' >s3</p>
              <p  className='bg-slate-400 rounded-xl px-5 py-1' >s4</p>

            </div>
           
            <p className='font-medium'>About : {about}</p>
             <p className='py-1 px-3 shadow-2xl bg-slate-400 p-2 text-center rounded-xl'>viewBox</p>
          </div>
        </div>
        
        
        </>
    )
}
export default  DoctorSkill1;





