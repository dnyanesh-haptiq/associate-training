import React from 'react';

const FeatureElement = ({Icon, title, description}) => {
    return (
        <div className='flex items-center gap-4 p-4'>
            {Icon && <Icon className = "text-blue-700" size = {40} />}
            <div>
                <h4 className='font-semibold text-xl mb-2'>{title}</h4>
                <p className='text-gray-600 font-light text-sm'>{description}</p>
            </div>
        </div>
    );
}

export default FeatureElement;
