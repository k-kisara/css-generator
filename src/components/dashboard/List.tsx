import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

const Component: React.FC = () => {
    return (
        <>
            {Object.values(routes).map(item => (
                <Link key={item} to={item}>
                    {item.replace('/', '')}
                </Link>
            ))}
        </>
    );
};

export default Component;
