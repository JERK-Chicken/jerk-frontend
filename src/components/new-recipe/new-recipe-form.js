import React from "react";
import IngredientList from "./new-ingredient";
import InstructionList from "./new-instruction";
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class NewRecipe extends React.Component {
    state = {
        ingredientList: [{ index: Math.random(), quantity: "", unit: "", category: "", ingredient: "", description: "" }],
        instructionList: [{ index: Math.random(), instruction: "" }],
        name: "",
        prepTime: "",
        cookTime: "",
    }

    handleChange = (e) => {
        if (["quantity", "unit", "category", "ingredient", "description"].includes(e.target.name)) {
            let ingredientList = [...this.state.ingredientList]
            ingredientList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
        if (["instruction"].includes(e.target.name)) {
            let instructionList = [...this.state.ingredientList]
            instructionList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    addNewRow = (e) => {
        this.setState((prevState) => ({
            ingredientList: [...prevState.ingredientList, { index: Math.random(), quantity: "", unit: "", category: "", ingredient: "", description: "" }],
        }));
        this.setState((prevState) => ({
            instructionList: [...prevState.instructionList, { index: Math.random(), instruction: "" }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            ingredientList: this.state.ingredientList.filter((s, sindex) => index !== sindex),
        });
        this.setState({
            instructionList: this.state.instructionList.filter((s, sindex) => index !== sindex),
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name==='' || this.state.prepTime==='' || this.state.cookTime==='')
        {
            NotificationManager.warning("Please input required Fields");
            return false;
        }
        for(var i=0;i<this.state.ingredientList.length;i++)
        {
                if(this.state.ingredientList[i].quantity==='' || this.state.ingredientList[i].unit==='' || this.state.ingredientList[i].description==='')
                {
                    NotificationManager.warning("Please include Quantity. Unit, and Description");
                    return false;
                }
        }
        for(var j=0;j<this.state.instructionList.length;j++)
        {
                if(this.state.instructionList[j].instructions==='')
                {
                    NotificationManager.warning("Please include Instructions");
                    return false;
                }
        }
        let data = { formData: this.state, userData: sessionStorage.getItem('user') }
        axios.defaults.headers.common["Authorization"] = sessionStorage.getItem('token');
        axios.post("http://3.136.11.92:8083/users/newrecipe", data).then(res => {
            if(res.data.success) NotificationManager.success(res.data.msg);
        }).catch(error => {
            if(error.response.status && error.response.status===400)
            NotificationManager.error("Bad Request");
            else NotificationManager.error("Something Went Wrong");
            this.setState({ errors: error })
        });
    }

    clickOnDelete(record) {
        this.setState({
            ingredientList: this.state.ingredientList.filter(r => r !== record)
        });
        this.setState({
            instructionList: this.state.instructionList.filter(r => r !== record)
        });
    }

    render() {
        let { ingredientList } = this.state
        let { instructionList } = this.state
        // console.log(ingredientList);
        // console.log(instructionList);
        return (
            <div className="content container-fluid">
                <NotificationContainer/>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center">Add a New Recipe</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group ">
                                                <label className="required">Recipe Name</label>
                                                <input type="text"  name="date" id="date" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-1">
                                            <div className="form-group ">
                                                <label className="required">Prep Time</label>
                                                <input type="number"  id="PrepTime" className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-sm-1">
                                            <div className="form-group ">
                                                <label className="required">Cook Time</label>
                                                <input type="number"  id="cookTime" className="form-control"></input>
                                            </div>
                                        </div>
                                    </div>                                
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required">Ingredients</th>                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <IngredientList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} ingredientList={ingredientList} />
                                        </tbody>
                                        <tfoot>
                                            <tr><td colSpan="4">
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                            </td></tr>
                                        </tfoot>
                                    </table>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required">Instructions</th>                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <InstructionList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} instructionList={instructionList} />
                                        </tbody>
                                        <tfoot>
                                            <tr><td colSpan="4">
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                            </td></tr>
                                        </tfoot>
                                    </table>
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
}
export default NewRecipe