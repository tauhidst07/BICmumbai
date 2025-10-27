import React from 'react'
import Hero from '../components/layout/Hero'
import Quicklink from '../components/layout/Quicklink'
import Welcome from '../components/layout/Welcome'
import Activities from '../components/layout/Activities'
import CTA from '../components/layout/CTA'

const Home = () => {
    return (
        <div className=''> 
            <Hero />
            <Quicklink />
            <Welcome />
            <Activities />
            <CTA />
        </div>
    )
}

export default Home