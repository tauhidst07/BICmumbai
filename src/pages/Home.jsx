import React from 'react'
import Hero from '../components/layout/Hero'
import Quicklink from '../components/layout/Quicklink'
import Welcome from '../components/layout/Welcome'
import Activities from '../components/layout/Activities'
import CTA from '../components/layout/CTA'
import AppWithSplash from '../components/loader/AppWithSplash'
import Spinner from '../components/common/Spinner'


const Home = () => {
    return ( 
        <AppWithSplash>
        <div className=''> 
            <Hero /> 
            <Quicklink />
            <Welcome />
            <Activities />
            <CTA />
        </div> 
        </AppWithSplash>
    )
}

export default Home