import Doctor from "./Doctor"
import DoctorSkill1 from "./DoctorSkill1"
import {DocSkill} from "./Card.jsx"








const DoctorSkill = () => {
    return (

        <>   
            
            <div className='2xl-container mx-auto '>
                <div className=' w-[90%] mx-auto mt-8   gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>

                    {
                        DocSkill.map((items, index) => {
                            console.log(DoctorSkill)
                            return (    
                                <DoctorSkill1

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

export default DoctorSkill;