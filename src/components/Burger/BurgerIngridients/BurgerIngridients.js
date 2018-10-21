import React from 'react'

const burgerIngridients = ( props ) => {
  let ingridient = null

  switch (props.type) {
    case ('meat') :
      ingridient = <div className={'ingridient__meat ingridient__item'}></div>
      break
    case ('cheese') :
      ingridient = <div className={'ingridient__cheese ingridient__item'}></div>
      break
    case ('salad') :
      ingridient = <div className={'ingridient__salad ingridient__item'}></div>
      break
    case ('souse') :
      ingridient = <div className={'ingridient__souse ingridient__item'}></div>
      break
    case ('bread-top') :
      ingridient = <div className={'ingridient__bread-top ingridient__item'}></div>
      break
    case ('bread-bottom') :
      ingridient = <div className={'ingridient__bread-bottom ingridient__item'}></div>
      break
    default:
      ingridient = null
  }

  return ingridient
}

export default burgerIngridients