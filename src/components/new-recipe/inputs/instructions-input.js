import React from "react"
import InstructionList from "./new-instruction";

const InstructionsInput = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="required">Instructions</th>                                                
                </tr>
            </thead>
            <tbody>
                <InstructionList 
                    add={props.addNewInstructionRow} 
                    delete={props.deleteInstructionRow} 
                    instructionList={props.instructionList} 
                />
            </tbody>
            <tfoot>
                <tr><td colSpan="4">
                    <button 
                        onClick={props.addNewInstructionRow} 
                        type="button" 
                        className="btn btn-success text-center"
                    ><i className="fa fa-plus-circle" aria-hidden="true"></i>+
                    </button>
                </td></tr>
            </tfoot>
        </table>
    )
}

export default InstructionsInput;