import { useEffect, useState } from "react";
import { GiphyRequest } from "../helpers/giphy-request";

//- Un hook puede tener estado
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        GiphyRequest(category).then(images => {
            setTimeout(() => {
                setState({
                    data: images,
                    loading: false
                })
            }, 500);
        });
    }, [category]);//EL segundo parametro es un arreglo de dependencias
            //si lo dejamos vacio el componente solo ejecuta la
            //instrucción GiphyRequest una sóla vez
    return state;

}