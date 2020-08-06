import React from "react";

const GeneralRow = (props) => {
    let classes = `interactive-row ${props.isActive ? "active-row" : ""}`;

    const handleClick = () => {
        props.setSelectedId(props.record.id);
    }

    return (
        <tr className={classes} onClick={handleClick}>
            <td>{props.record.name}</td>
        </tr>
    );
};

export default GeneralRow;