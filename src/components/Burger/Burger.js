import React from 'react'
import BurgerIngridients from './BurgerIngridients/BurgerIngridients'

const burger = ( props ) => {
  const arrayOfIngridients = Object.keys(props.ingridients)

  let transformedIngridients = arrayOfIngridients.map(key => {
    const numberOfIngridients = props.ingridients[key]
    const engridientsCount = [...Array(numberOfIngridients)]
    return engridientsCount.map((_, i) => {
      return <BurgerIngridients key={key + i} type={key}/>
    })
  })

  const isTransformedIngridients = transformedIngridients.reduce((arr, el) => {
    return arr.concat(el)
  }, [])

  if (isTransformedIngridients.length === 0) {
    transformedIngridients = <p>no ingridients selected</p>
  }

  return (
    <div className={'ingridient'}>
      <BurgerIngridients type={'bread-top'} />
      {transformedIngridients}
      <BurgerIngridients type={'bread-bottom'}/>
    </div>
  )
}

export default burger