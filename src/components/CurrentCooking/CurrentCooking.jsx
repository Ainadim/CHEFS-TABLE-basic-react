import React from 'react';
import PropTypes from 'prop-types';

const CurrentCooking = ({currentCook}) => {
    const { recipe_name, preparing_time, calories }  = currentCook
    return (
        <div className='table-row table-fixed text-xs'>
            <div className='table-cell p-2'>{recipe_name}</div>
            <div className='table-cell p-2'>{preparing_time}</div>
            <div className='table-cell p-2'>{calories}</div>
        </div>
    );
};

CurrentCooking.propTypes = {
    
};

export default CurrentCooking;