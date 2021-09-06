import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import { GiphyRequest } from '../data/giphy-request';

export const GiftExpertApp = () => {
    //const categories = ['BMW', 'Audi', 'Code'];
    const [categories, setCategory] = useState(['Space']);
    /*
    const handleAdd = () => {
        setCategory([...categories, 'IBM']);//Mantenemos los elementos anteriores y agregamos uno
        //setCategory((elem) => [...categories, 'IBM']);//Mantenemos los elementos anteriores y agregamos uno
    }*/

    return(
        <>
            <h2 className="animate__animated animate__flipInX">Testing GiphyApi</h2>
            <hr/>
            {/*<button onClick={handleAdd}>Add</button>*/}
            <AddCategory 
                setCategory={setCategory}
            />
            <ol>
            {
                /*
                categories.map((category) => { 
                    return <li key={category}>{category}</li>//Es importante mantener una key unica
                })
                */
                categories.map(category => (
                    <GifGrid 
                        key={category}
                        category = {category}
                    />
                ))
            }
            </ol>
            <footer>@eadev 2021</footer>
        </>
    )
};


