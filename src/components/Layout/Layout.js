import React from 'react'
import Aux from '../../hoc/Aux'

const layout = ( props ) => (
  <Aux>
    <div className={ 'layout' }>Main Toolbar</div>
    <div>{ props.children }</div>
  </Aux>
);

export default layout;