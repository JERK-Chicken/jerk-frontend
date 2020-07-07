import React from "react"

const InstructionList = (props) => {
  return (
    props.taskList.map((val, idx) => {
      let instructions = `quantity-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input type="int"  name="instructions" data-id={idx} id={instructions} className="form-control" placeholder="Instructions" />
          </td>
          
          <td>
            {
            
             <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default InstructionList