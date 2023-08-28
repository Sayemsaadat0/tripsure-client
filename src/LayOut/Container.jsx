import React from 'react';

const Container = ({children}) => {
    return (
        <div className='mx-auto max-w-7xl px-2 md:px4'>
            {children}
        </div>
    );
};

export default Container;