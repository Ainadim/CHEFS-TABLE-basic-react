import React from 'react';
import PropTypes from 'prop-types';

const WantToCook = ({ itemProps, handleWantCookProps }) => {
    const { recipe_name, preparing_time, calories } = itemProps
    return (
        <div className='table-row table-fixed text-xs'>
            <div className='table-cell p-2'>{recipe_name}</div>
            <div className='table-cell p-2'>{preparing_time}</div>
            <div className='table-cell p-2'>{calories}</div>
            <button onClick={() => handleWantCookProps (itemProps)} className='text-sm font-bold text-slate-100 bg-slate-400 py-1 px-3 mr-2 rounded-xl' type="button">Preparing</button>
        </div>
    );
};

WantToCook.propTypes = {

};

export default WantToCook;