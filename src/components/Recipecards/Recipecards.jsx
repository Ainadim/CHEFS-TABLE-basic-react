import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Recipecard from '../Recipecard/Recipecard';

const Recipecards = ({handleWantCookItemProps}) => {

    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        fetch("data.json")
        .then (res => res.json())
        .then (data => setRecipe(data))
    }, [])

    return (
        <div className='w-7/12'>
            <div className='grid grid-cols-2 gap-4'>
                {
                    recipe.map((recipes,idx) =>
                        <Recipecard key={idx} recipeProps = {recipes} handleWantCookItemProps = {handleWantCookItemProps}></Recipecard>
                    )
                }
            </div>
        </div>
    );
};

Recipecards.propTypes = {
    
};

export default Recipecards;