import React from 'react';

const Container = ({children}) => {
    return (
        <div className='mx-auto max-w-7xl px-1 md:px-3 lg:px-5'>
            {children}
        </div>
    );
};

export default Container;