import React from 'react';

const Container = ({children}) => {
    return (
        <div className='mx-auto max-w-[1920px] px-2 md:px-4'>
            {children}
        </div>
    );
};

export default Container;