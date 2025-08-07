import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { getTotalAmount } from '../redux/slices/cart.slice';

const Cartpage = () => {
    const cart = useSelector(state => state.cart);
    const dispach = useDispatch();

    useEffect(() => {
        dispach(getTotalAmount());
    }, [dispach]);

    return (
        <section className="w-full">
            <div className="container container-md container-lg mx-auto p-4">
                <header className='mb-3'>
                    <h2 className='font-semibold text-2xl'>Your cart ({cart.size})</h2>
                </header>
                <main className='grid grid-cols-12 gap-10'>
                    <ul className="space-y-4 col-span-8">
                        {cart?.items?.map((product) => (
                            <ProductCard orientation='horizontal' key={product._id} product={product} />
                        ))}
                    </ul>

                    <div className='p-4 bg-gray-100 w-full col-span-4'>
                        amount
                    </div>
                </main>
            </div>
        </section>
    );
}

export default Cartpage;