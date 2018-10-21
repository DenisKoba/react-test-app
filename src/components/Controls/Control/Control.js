import React from 'react'

const control = ( props ) => {
  return (
    <div className={'control'}>
      <div className={'control__less control__button'} onClick={props.removed}>-</div>
      <div className={'control__label'}>{props.label}</div>
      <div className={'control__more control__button'} onClick={props.added}>+</div>
    </div>
  )
}

export default control