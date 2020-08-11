import React, { useState } from "react";
import Modal from "react-modal";
import CloseModalButton from "../navigation/login-logout/close-modal-button";
import NewIngredientForm from './new-ingredient-form'

export default function NewIngredientModal(props) {
    const [info, setInfo] = useState({});

    const handleFormChange = (e) => {
        const inputField = e.target.name;
        const inputValue = e.target.value;
        setInfo({...info, [inputField]: inputValue});
        console.log(info);
    }  

    return (
    <Modal className="modal modal-dialog modal-dialog-centered" 
            role="dialog"
            ariaHideApp={false}
            isOpen={props.newIngIsOpen}
            onRequestClose={() => props.setNewIngIsOpen(false)}
    >  
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Create new ingredient</h5>
                <CloseModalButton setIsOpen={props.setNewIngIsOpen}/>
            </div>
            <div className="modal-body">
                <NewIngredientForm ingredientData={info} onChange={handleFormChange}/>
            </div>
        </div>
    </Modal>
    );
}