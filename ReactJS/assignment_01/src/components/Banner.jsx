import React from 'react';
import "./../index.css";

const Banner = () => {
    return (
        <section className="w-full bg-gray-100 p-32">
            <div className="container container-md container-lg mx-auto p-4 flex items-center justify-between">
                <div className='text-center'>
                    <h3 className='playwriteFont font-semibold text-5xl text-blue-700 italic'>Season Sale</h3>
                    <h1 className='text-7xl font-extrabold'>MEN'S FASHION</h1>
                    <p>Min. 35-70% off</p>
                </div>

                <div>
                    {/* <img src='/banner.png' className='' /> */}
                </div>
            </div>
        </section>
    );
}

export default Banner;