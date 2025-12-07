import React from 'react';
import FeatureElement from './FeatureElement';
import { features } from '../utils/paths';

const Features = () => {
    return (
        <section className="w-full">
            <div className="container container-md container-lg mx-auto p-4">
                <ul className='flex items-center justify-between'>
                    {features.map((feature) => (
                        <li key={feature.id}>
                            <FeatureElement Icon={feature.icon} title={feature.title} description={feature.description} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Features;
