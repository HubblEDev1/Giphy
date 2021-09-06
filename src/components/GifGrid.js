import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { GiphyRequest } from '../helpers/giphy-request';
import { GifGridItem } from './GifGridItem';
//import { GiphyRequest } from '../data/giphy-request'

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);
    /*const [images, setImages] = useState([]);


    useEffect(() => {
        GiphyRequest(category).then(image => setImages(image));
    }, [category])//EL segundo parametro es un arreglo de dependencias
            //si lo dejamos vacio el componente solo ejecuta la
            //instrucción GiphyRequest una sóla vez
    console.log(images);
 */
    return (
        <>
            <h3>{category}</h3>    
                <p className="animate__animated animate__swing">{loading && 'Loading...'}</p>
                <div className="card-grid animate__swing">
            
                    {
                        /*images.map(dataImage => {
                            return <li key={dataImage.id}>{dataImage.id}</li>
                        })*/
                        images.map(dataImage => 
                        <GifGridItem
                            key={dataImage.id}
                            {...dataImage}
                        />)
                    }
            </div>
        </>
    )
}
