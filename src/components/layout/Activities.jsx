import React from 'react'
import activities from '../../static/activities'
import ActivityCard from '../common/ActivityCard'
import Divider from '../common/Divider'
const Activities = () => { 
    return (
        <section className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-14">
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#7A5933] mb-6 font-poppins tracking-tight">
                        Our Activities
                    </h2>
                   <Divider/>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {
                   activities.map((actitivity,i)=><ActivityCard key={i} activity={actitivity}/>)
                 }
                </div>
            </div> 
            <div className='flex justify-center my-2 font-medium'>
                <button className='px-6 py-2 rounded-md bg-primaryCustom text-white cursor-pointer hover:bg-secondaryCustom'>VIEW MORE</button>
            </div>
        </section>
    )
}

export default Activities