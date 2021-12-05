import React, {Component} from 'react'
import axios from 'axios'

class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const {children} = (await axios.get('/posts')).data
        this.setState({
            posts: children
        })
    }

    render(){
        console.log('MY POSTS!! ', this.state.posts)
        const category = this.props.selectedCategory
        return(
            <div>
                {category}
            </div>
        )
    }
}

export default Body