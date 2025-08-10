import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products }) => {

    const newProducts = products?.filter((product) => product.isNew);
    const bestProducts = products?.filter((product) => product.rating >= 3 && product.rating <5);
    const topProducts = products?.filter((product) => product.rating === 5);

    return (
        <section className="w-full">
            <div className="container container-md container-lg mx-auto p-4">
                <header className=''>
                    <h3 className='font-semibold text-3xl text-center mb-4'>Featured Products</h3>

                    <Tabs defaultValue="new">
                        <TabsList className="mb-10">
                            <TabsTrigger value="new">New Arrival</TabsTrigger>
                            <TabsTrigger value="best">Best Selling</TabsTrigger>
                            <TabsTrigger value="top">Top Rated</TabsTrigger>
                        </TabsList>
                        <TabsContent value="new">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                                {newProducts?.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                            </ul>
                        </TabsContent>
                        <TabsContent value="best">
                            {/* data */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                                {bestProducts?.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                            </ul>
                        </TabsContent>
                        <TabsContent value="top">
                            {/* data */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                                {topProducts?.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                            </ul>
                        </TabsContent>
                    </Tabs>
                </header>
            </div>
        </section>
    );
}

export default FeaturedProducts;
