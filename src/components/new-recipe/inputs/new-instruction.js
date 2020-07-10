import React from "react"

const InstructionList = (props) => {
  return (
    props.instructionList.map((val, idx) => {
      let instruction = `instruction-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input type="text" name="instruction" data-id={idx} id={instruction} className="form-control" placeholder="Instructions" />
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