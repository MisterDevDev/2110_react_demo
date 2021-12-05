import React, { Component } from  'react'
import Nav from './components/Nav'
import Body from './components/Body'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            selectedCategory: 'popular'
        }
    }
    changeCategory = (category) => {
        this.setState({
            selectedCategory: category
        })
    }
    render() {
        const {selectedCategory} = this.state
        return(
            <div>
                <Nav 
                    selectedCategory = {selectedCategory} 
                    changeCategory = {this.changeCategory}
                />
                <Body 
                    selectedCategory = {selectedCategory}
                />
            </div>
            
        )   
    }
}