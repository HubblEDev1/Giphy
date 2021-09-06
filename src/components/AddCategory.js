import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //console.log(e);
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();// method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
        if(inputValue.trim().length > 2){
            setCategory(cats => [inputValue, ...cats ]);
            setInputValue('')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                placeholder='Search'
                type = "text"
                value = {inputValue}
                onChange = {handleInputChange} 
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategory: PropTypes.func.isRequired
}




