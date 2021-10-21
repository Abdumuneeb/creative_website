import React from 'react';
import Consult from '../../component/consult';
import Discount from '../../component/Discount';
import Gallery from '../../component/Gallery';
import Hero from '../../component/Hero';
import Navbar from '../../component/Navbar';
// import style from './Home.module.css';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Gallery/>
            <Discount/>
            <Consult/>
        </div>
    )
}

export default Home;
;