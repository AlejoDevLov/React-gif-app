import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;

        setCategories([ ...categories, newCategory ]);     
    }

    return (
        <>
            <h1>Busca tu anime</h1>

            <AddCategory 
                setCategories={ setCategories }
                onNewCategory={ value => onAddCategory(value) }
                />
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
