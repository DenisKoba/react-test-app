import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import Controls from '../../components/Controls/Controls'


const INGRIDIENTS_VALUES = {
  cheese: 0.4,
  meat: 1.3,
  salad: 0.5,
  souse: 0.7,
}

class BurgerBuilder extends Component {
   state = {
      ingridients: {
        cheese: 1,
        meat: 1,
        salad: 1,
        souse: 1,
      },
     controls: [
       {label: 'salad', type: 'salad'},
       {label: 'meat', type: 'meat'},
       {label: 'cheese', type: 'cheese'},
       {label: 'souse', type: 'souse'}
     ],
     totalValue: 4,
  }

 addIngridient = (type) => {
    const oldValue = this.state.ingridients[type]
    const newValue = oldValue + 1
    const updatedIngridients = {
      ...this.state.ingridients
    }

   updatedIngridients[type] = newValue

   const oldPriceValue = this.state.totalValue
   const newPriceValue = oldPriceValue + INGRIDIENTS_VALUES[type]
   this.setState({totalValue: newPriceValue, ingridients: updatedIngridients})
 }

  removeIngridient = (type) => {
    const oldValue = this.state.ingridients[type]
    if (oldValue <= 0) {
      return false
    }
    const newValue = oldValue - 1
    const updatedIngridients = {
      ...this.state.ingridients
    }

    updatedIngridients[type] = newValue

    const oldPriceValue = this.state.totalValue
    const newPriceValue = oldPriceValue - INGRIDIENTS_VALUES[type]
    this.setState({totalValue: newPriceValue, ingridients: updatedIngridients})
  }

  render() {
    return (
      <Aux>
        <div className={ 'burger-builder' }>
          <Burger ingridients={this.state.ingridients} />
          <div className={'burger-builder__controls-wrap'}>
            <Controls controls={this.state.controls}
                         addIngridient={this.addIngridient}
                         removeIngridient={this.removeIngridient}/>
            <div>{this.state.totalValue.toFixed(2)}$</div></div>
        </div>
      </Aux>
    )
  }
}

export default BurgerBuilder;