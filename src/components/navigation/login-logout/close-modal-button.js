import React from "react";

export default function CloseModalButton(props) {

    return (
        <button type="button" 
            onClick={() => props.setIsOpen(false)} 
            className="close" 
            data-dismiss="modal" 
            aria-label="Close"
        >
            <span aria-hidden="true">&times;</span>
        </button>
    );
}