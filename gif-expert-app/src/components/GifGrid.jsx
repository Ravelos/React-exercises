import { getGifs } from '../helpers/GetGifs';


export const GifGrid = ({ category }) => {

    getGifs();
    
    return (
        <>
            <h3>{category}</h3>    
        </>
    )
}
