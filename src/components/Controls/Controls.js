import React from 'react'
import Control from './Control/Control'

const control = ( props ) => {
  const controls = props.controls
  return (
    <div className={'controls'}>
      {controls.map((key, i) => { return <Control label={key.label}
                                                  type={key.type}
                                                  key={key.label + i}
                                                  added={() => {props.addIngridient(key.type)}}
                                                  removed={() => {props.removeIngridient(key.type)}}/> })}
    </div>
  )
}

export default control