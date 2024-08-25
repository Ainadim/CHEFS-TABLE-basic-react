import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WantToCook from '../WantToCook/WantToCook';
import CurrentCooking from '../CurrentCooking/CurrentCooking';

const SideBar = ({ wantCookProps, handleWantCook, currentCook }) => {

    return (
        <div className='md:w-5/12'>
            <div className=' border-2 rounded-xl py-5'>
            {
                wantCookProps.length > 0 ? (
                    <div className='space-y-5'>
                        <h2 className='lexend-800'>Want to cook: {wantCookProps.length}</h2>
                        <div className="w-8/12 mx-auto border-b border-gray-300"></div>
                        <div className="table w-11/12 m-auto">
                            <div className='table-header-group'>
                                <div className='table-row font-bold text-center space-y-2'>
                                    <div className='table-cell'>Name</div>
                                    <div className='table-cell'>Time</div>
                                    <div className='table-cell'>Calories</div>
                                </div>
                            </div>
                            <div className='table-row-group bg-slate-100 mb-5'>
                                {
                                    wantCookProps.map((item, idx) => <WantToCook key={idx} itemProps={item} handleWantCookProps={handleWantCook}></WantToCook>)
                                }
                            </div>
                        </div>
                    </div>
                ) : (<div className='text-center mt-5 text-lg font-semibold text-gray-500'>
                    No List to prepare! 
                </div>)
            }

            {
                currentCook.length > 0 ? (
                    <div className='space-y-5'>
                        <h2 className='mt-5 lexend-800'>Currently cooking: {currentCook.length}</h2>
                        <div className="w-8/12 mx-auto border-b border-gray-300"></div>
                        <div className="table w-11/12 m-auto">
                            <div className='table-header-group'>
                                <div className='table-row font-bold text-center space-y-2'>
                                    <div className='table-cell'>Name</div>
                                    <div className='table-cell'>Time</div>
                                    <div className='table-cell'>Calories</div>
                                </div>
                            </div>
                            <div className='table-row-group bg-slate-100 mb-5'>
                                {
                                    currentCook.map((item, idx) => <CurrentCooking key={idx} currentCook={item}></CurrentCooking>)
                                }
                            </div>
                        </div>
                    </div>
                ) : (<div className='text-center mt-5 text-lg font-semibold text-gray-500'>
                    Nothing is cooking
                </div>)
            }
            </div>
        </div>
    );
};

SideBar.propTypes = {

};

export default SideBar;