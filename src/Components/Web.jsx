import { website } from "./Card"


const Web1 = ({name,rating,about}) =>{
    return(
        <>
        
          <div className='h-[300px] w-fit bg-white rounded-xl shadow-lg p-12
            transition-all duration-400 ease-in-out
            hover:translate-y-4 hover:shadow-3xl  '>
            <h1 className='font-[Roboto] text-xl' >Name : {name}</h1>
            <h2 className=' font-[Roboto] text-lg' > Rating: {rating}</h2>
           
           
            <p className='font-[Roboto]'> About:{about}.</p>
          </div>
        </>
    )
}


const Web = () => {
  return (

    <>

       <h1 className='font-[Roboto] text-2xl mt-8 ml-10'>Website Records</h1>

      <div className='scroll-container 2xl-container mx-auto  ' id="Web" >
        <div className='scroll-track  w-[90%] mx-auto mt-8 grid lg:grid-cols-2'>


                    {
                        website.map((items, index) => {
                            console.log(website)
                            return (    
                                <Web1

                                    key={index}
                                    name={items.name}
                                    rating={items.rating}
                                    experience={items.experience}

                                    about={items.about}
                                />

                            )
                        })
                    }



        </div>
      </div>


    </>
  )
}

export default Web ;