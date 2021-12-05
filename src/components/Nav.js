import React, { Component } from 'react'

export default class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[
            {id: 0, name: 'popular'},
            {id: 1, name: 'minecraft'},
            {id: 2, name: 'wellthatsucks'}, 
            {id: 3, name: 'memes'},
            {id: 4, name: 'pcmasterrace'}
        ]
        }
    }
    render () {
        const {categories} = this.state

        return(
            <nav>
                <h2>
                    Welcome to our Reddit App
                </h2>
                <div className ='links'>
                    {categories.map( category => {
                        return(
                            <div key={`${category.id}`} onClick={ () => this.props.changeCategory(category.name)}>
                                { category.name }
                            </div>
                        )
                    })}
                </div>
            </nav>
        )
    }
}