import React from 'react'

export default function Spinner(props) {   //기능이 간단할때 function based로 한다.
  return (
    <div className="spinner ui active dimmer"> 
        <div className="ui big text loader">
            {props.message}
        </div>
    </div>
  )
}

Spinner.defaultProps={
  massage: "Loading..."
}
