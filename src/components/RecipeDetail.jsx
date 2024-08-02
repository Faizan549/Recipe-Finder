import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetail = ({ recipes }) => {
    let { id } = useParams()
    let [recipeDetails, setRecipeDetails] = useState({})

    useEffect(() => {
        let filterRecipe = recipes.find((element) => element.id === id)
        setRecipeDetails(filterRecipe)
    }, [recipes, id])

    return (
        recipeDetails && (
            <div className='recipe-details'>
                <img src={recipeDetails.image} alt={recipeDetails.title} />
                <h1>{recipeDetails.title}</h1>
                <p>{recipeDetails.description}</p>
                <div>
                    <h3>Steps:</h3>
                    <ul>
                        {recipeDetails.ingredients && recipeDetails.ingredients.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                </div>
                <h5>Cooking Time : {recipeDetails.cookingTime}</h5>
            </div>
        )
    )
}

export default RecipeDetail
