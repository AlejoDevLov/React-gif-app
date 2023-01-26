import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    // event.target.input
    const onInputChange = ( {target} ) => { // desestructuracion de target

        // console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {

        event.preventDefault();

        if( inputValue.trim().length <= 1 ) return;
        // setCategories( categories => [...categories, inputValue ] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (
    // <form onSubmit={ (event) => onSubmit(event) }>
    <form onSubmit={ onSubmit }>
        <input
            type='text'
            placeholder="Ej: Dragon Ball, Naruto, Superman, Terror, etc."
            onChange={ onInputChange } // recibe 'event' implicitamente como argumento  
            value={inputValue}
        />
    </form>
  );
}
