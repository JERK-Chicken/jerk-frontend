import React, {useState, useEffect} from 'react'
import {requestCategories} from '../../helpers/requests/ingredient-requests';

export const IngredientSelect = (props) => {
    const [ categories, setCategories ] = useState([]);
    useEffect(()=>{
        (async (_) => requestCategories(setCategories))();
    }, []);

    const categoryDropList = () => {
        categories.sort((a, b)=>{return a.category > b.category ? 1 : -1});
        return categories.map((obj) => (
            <option key={obj.id} value={`${obj.category}_${obj.id}`}>
                {obj.category}
            </option>
        ));
    };

    return <select className='form-control' name={props.name} onChange={props.onChange}>
        <option value="">-Category-</option>
        {categoryDropList()}
        </select>

}