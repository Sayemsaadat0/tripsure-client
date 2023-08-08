import React from 'react';

const Container = ({children}) => {
    return (
        <div className='mx-auto max-w-7xl my-2'>
            {children}
        </div>
    );
};

export default Container;