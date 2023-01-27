import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);  
    }

    return (
        <>
            <h1>Buscador de Gifs variados</h1>

            <AddCategory 
                onNewCategory={ value => onAddCategory(value) }
            />

            { categories < 1 ? <h2>Los Gifs se irán desplegando en la parte inferior...</h2> : '' }

            {
                categories.map( category => (
                        <GifGrid 
                            key={ category } 
                            category={ category }
                        />
                    ))
            }

        </>
    );
}
