import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/Features';
import FeaturedProducts from '../components/FeaturedProducts';
import { useLoaderData } from 'react-router-dom';

const Indexpage = () => {
    const products = useLoaderData();

    return (
        <div className='space-y-5'>
            <Banner />
            <Features />
            <FeaturedProducts products = {products} />
        </div>
    );
}

export default Indexpage;
