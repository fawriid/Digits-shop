import React from 'react';
import { useParams } from 'react-router-dom';

const Phone = () => {
    const params = useParams()
    return (
        <div>
            phone is {params.id}
        </div>
    );
};

export default Phone;