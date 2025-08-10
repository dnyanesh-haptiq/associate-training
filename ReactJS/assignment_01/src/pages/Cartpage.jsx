import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { getTotalAmount } from '../redux/slices/cart.slice';
import UserTotalCard from '../components/UserTotalCard';

const Cartpage = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotalAmount());
    }, [dispatch]);

    return (
        <section className="w-full">
            <div className="container container-md container-lg mx-auto p-4">
                <header className='mb-3'>
                    <h2 className='font-semibold text-2xl'>Your cart ({cart.size})</h2>
                </header>
                <main className='flex gap-10'>
                    <ul className="flex-1 space-y-4 col-span-8">
                        {cart?.items?.map((product) => (
                            <ProductCard orientation='horizontal' key={product._id} product={product} />
                        ))}
                    </ul>

                        <UserTotalCard />
                </main>
            </div>
        </section>
    );
}

export default Cartpage;