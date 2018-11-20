import React from 'react'
import './SeasonError.css'

export default function SeasonError(props) {
  return (
    <div className="season-error ui active"> 
        
        <i className="ui massive text close icon"></i>
        
        <h3 className="message">{props.message}</h3>
        
    </div>
  )
}