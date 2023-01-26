import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { useFetchGifs } from "./Hooks/useFetchGifs";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;

        setCategories([ ...categories, newCategory ]);  
    }

    return (
        <>
            <div className="background"></div>

            <h1>Buscador de Gifs variados</h1>

            <AddCategory 
                setCategories={ setCategories }
                onNewCategory={ value => onAddCategory(value) }
                />
            {
                categories < 1 ? <h2>Los Gifs se irán desplegando en la parte inferior...</h2> : ''
            }
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
