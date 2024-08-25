import React from 'react';
import PropTypes from 'prop-types';
import { LuClock3 } from "react-icons/lu";
import { FaFire } from "react-icons/fa";

const Recipecard = ({recipeProps,handleWantCookItemProps}) => {
    const {recipe_name, short_description, recipe_image, ingredients, preparing_time, calories} = recipeProps
    return (
            <div>
                <div className='text-left p-5 border-2 space-y-4 rounded-xl'>
                    <div className='border-b-2 space-y-4 pb-5'>
                        <img className='mb-5 rounded-xl' src={recipe_image} alt={recipe_name} />
                        <h4 className='text-xl lexend-600'>{recipe_name}</h4>
                        <p className='text-teal-600'>{short_description}</p>
                    </div>
                    <div className='border-b-2 space-y-4 pb-5'>
                        <p className='lexend-200'>Ingredients: {ingredients.length}</p>
                        <div>
                        <ul className='list-disc list-inside text-teal-600'>
                            {
                                ingredients.map((item,idx) => <li key={idx}>{item}</li>)
                            }
                            
                        </ul>
                        </div>
                    </div>
                    <div className='flex justify-start gap-4 text-teal-700'>
                        <p className='text-sm flex items-center'><LuClock3 /> {preparing_time}</p>
                        <p className='text-sm flex items-center'><FaFire /> {calories}</p>
                    </div>
                    <button onClick={() => handleWantCookItemProps(recipeProps)} type='button' className='h-auto p-3 rounded-3xl bg-rose-400 font-bold text-slate-700'>Want to Cook</button>                    
                </div>                
            </div>
    );
};

Recipecard.propTypes = {

};

export default Recipecard;