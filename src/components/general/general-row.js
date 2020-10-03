import React from "react";

const GeneralRow = (props) => {
    let classes = `interactive-row ${props.isActive ? "active-row" : ""}`;

    const handleClick = () => {
        props.setSelectedId(props.record.id);
    }

    if(props.setTextClickHandeler){
        return (
            <tr className={classes} onClick={handleClick}>
                <td ><a onClick={props.textClickHandeler} value ={props.record.id}>{props.record.name}</a></td> 
            </tr>
        );
    }
    else{
        return (
            <tr className={classes} onClick={handleClick}>
                <td>{props.record.name}</td>
            </tr>
        );
    }

    
};

export default GeneralRow;