import React, {useState} from "react";
import NameInput from "./inputs/name-input";
import PrepTimeInput from "./inputs/prep-time-input";
import CookTimeInput from "./inputs/cook-time-input";
import IngredientsInput from "./inputs/ingredients-input";
import InstructionsInput from "./inputs/instructions-input";

// import axios from 'axios';
// import { NotificationContainer, NotificationManager } from 'react-notifications';

const NewRecipe = (props) => {
    const [ingredientList, setIngredientList] = useState([
        { index: Math.random(), quantity: "", unit: "", category: "", ingredient: "", description: "" }
    ]);
    const [instructionList, setInstructionList] = useState([
        { index: Math.random(), instruction: "" }
    ]);
    const [name, setName] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [cookTime, setCookTime] = useState("");   

    const handleChange = (e) => {
        if (["quantity", "unit", "category", "ingredient", "description"].includes(e.target.name)) {
            let temp = [...ingredientList]
            temp[e.target.dataset.id][e.target.name] = e.target.value;
            setIngredientList(temp);
        } 
        else if (e.target.name === "instruction") {
            let temp = [...instructionList]
            temp[e.target.dataset.id][e.target.name] = e.target.value;
            setInstructionList(temp);
        }
        else if (e.target.name === "recipe-name") {
            setName(e.target.value);
        }
        else if (e.target.name === "prepTime") {
            setPrepTime(e.target.value);
        }
        else if (e.target.name === "cookTime") {
            setCookTime(e.target.value);
        }
    }

    const addNewIngredientRow = (e) => {
        setIngredientList([
            ...ingredientList, 
            { index: Math.random(), quantity: "", unit: "", category: "", ingredient: "", description: "" }
        ]);
    }

    const addNewInstructionRow = (e) => {
        setInstructionList([...instructionList, { index: Math.random(), instruction: "" }]);
    }

    const deleteIngredientRow = (record) => {
        setIngredientList(ingredientList.filter(r => r !== record));
    }

    const deleteInstructionRow = (record) => {
        setInstructionList(instructionList.filter(r => r !== record));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ingredientList, instructionList, name, prepTime, cookTime);
        // if(this.state.name==='' || this.state.prepTime==='' || this.state.cookTime==='')
        // {
        //     NotificationManager.warning("Please input required Fields");
        //     return false;
        // }
        // for(var i=0;i<this.state.ingredientList.length;i++)
        // {
        //         if(this.state.ingredientList[i].quantity==='' || this.state.ingredientList[i].unit==='' || this.state.ingredientList[i].description==='')
        //         {
        //             NotificationManager.warning("Please include Quantity. Unit, and Description");
        //             return false;
        //         }
        // }
        // for(var j=0;j<this.state.instructionList.length;j++)
        // {
        //         if(this.state.instructionList[j].instructions==='')
        //         {
        //             NotificationManager.warning("Please include Instructions");
        //             return false;
        //         }
        // }
        // let data = { formData: this.state, userData: sessionStorage.getItem('user') }
        // axios.defaults.headers.common["Authorization"] = sessionStorage.getItem('token');
        // axios.post("http://3.136.11.92:8083/users/newrecipe", data).then(res => {
        //     if(res.data.success) NotificationManager.success(res.data.msg);
        // }).catch(error => {
        //     if(error.response.status && error.response.status===400)
        //     NotificationManager.error("Bad Request");
        //     else NotificationManager.error("Something Went Wrong");
        //     this.setState({ errors: error })
        // });
    }
    
    return (
        <div className="content container-fluid">
            {/* <NotificationContainer/> */}
            <form onSubmit={handleSubmit} onChange={handleChange} >
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="card">
                            <div className="card-header text-center">Add a New Recipe</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4"><NameInput/></div>
                                    <div className="col-sm-1"><PrepTimeInput/></div>
                                    <div className="col-sm-1"><CookTimeInput/></div>
                                </div>                                
                                <IngredientsInput
                                    addNewIngredientRow={addNewIngredientRow}
                                    deleteIngredientRow={deleteIngredientRow}
                                    ingredientList={ingredientList}
                                />
                                <InstructionsInput
                                    addNewInstructionRow={addNewInstructionRow}
                                    deleteInstructionRow={deleteInstructionRow}
                                    instructionList={instructionList}
                                />
                            </div>
                            <div className="row card-footer justify-content-between">
                                <button type="submit" className="btn btn-primary text-center">Submit</button>
                                <a className="btn btn-danger" href="/user" role="button">Cancel</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </form>
        </div>
    )
}

export default NewRecipe