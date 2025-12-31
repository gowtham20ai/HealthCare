import { TrichyWeb } from "../Components/Card"
import {  Link } from "react-router-dom"
import React from "react"

const Trichy1 = ({ name, specialty, rating, experience_notes, location, google_maps }) => {
    return (
        <>

            <div className=' w-fit h-fit p-5 space-x-2 space-y-3 shadow-2xl shadow-orange-50 m-3 bg-white rounded-2xl 
           
              '>
                <h1 className='font-[Roboto] text-xl' >Name : {name}</h1>
                <h2 className='font-[Roboto] text-xl' >specialty : {specialty}</h2>
                <h3 className='font-[Roboto] text-xl' >Rating : {rating}</h3>
                <h3 className=' text-xl' >experience_notes: {experience_notes}</h3>
                <h3 className='  text-lg' > location: {location}</h3>

                  <Link to = {google_maps}  >
                <p className='py-1 px-3 shadow-2xl bg-gradient-to-r from-[#2dd4bf]  to-[#1f2937] p-2 text-center rounded-xl'>Maps!</p>
                    </Link>
            </div>
        </>
    )
}


const Trichy = () => {
    return (

        <>

            <h1 className='font-[Roboto] text-2xl mt-8 ml-10'>Tiruchirappalli City</h1>

            <div className='2xl-container mx-auto '>
                <div className='  w-[90%]  
                 mx-auto mt-8 justify-between items-center gap-8 m-4 grid md:grid-cols-2 lg:grid-cols-3'>


                    {
                        TrichyWeb.map((items, index) => {
                            console.log(TrichyWeb)
                            return (
                                <Trichy1

                                    key={index}
                                    name={items.name}
                                    specialty={items.specialty}
                                    rating={items.rating}
                                    experience_notes={items.experience_notes}
                                     location={items.location}
                                     google_maps={items.google_maps}
                                   
                                />

                            )
                        })
                    }



                </div>
            </div>


        </>
    )
}

export default Trichy;