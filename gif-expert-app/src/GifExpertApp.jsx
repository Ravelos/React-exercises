import { useState } from "react"
import AddCategory from "./components/AddCategory"

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [ 'One Punch', 'Dragon Ball' ] )
    
    const onAddCategory = () => {
        setCategories([ 'One Piece',...categories ])        
    }

    return(
        <>
            <AddCategory setCategories={ setCategories }/>

            <h1>GifExpertApp</h1>
            <ol>
                {categories.map( category =>{
                    return <li key={ category }>{ category }</li>
                })}
            </ol>
        </>
    );
}