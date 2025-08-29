import React from 'react'
import Navbar from '../components/Navbar'
import StaticBlock from '../components/StaticBlock'
import MainBlock from '../components/MainBlock'

const Home = () => {
    return (
        <div className='w-screen h-screen flex flex-wrap'>
            <Navbar/>
            <StaticBlock/>
            <MainBlock/>
        </div>
    )
}

export default Home