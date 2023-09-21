import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <Helmet>
        <title>Tripsure - {title}</title>
        </Helmet>
    );
};

export default PageTitle;