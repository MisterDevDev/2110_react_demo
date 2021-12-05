import React, { Component } from  'react'
import Nav from './components/Nav'
import Body from './components/Body'
import axios from "axios";

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            selectedCategory: 'popular',
            posts: [],
            saved:[],
            showSaved: false
        }
    }

    async componentDidMount() {
        const {children} = (await axios.get(`/${this.state.selectedCategory}`)).data
        const savedPosts = (await axios.get('/saved')).data
        this.setState({
            posts: children,
            saved: savedPosts
        })
    }

    changeCategory = async (category) => {
        this.setState({
            posts:[]
        })
        const {children} = (await axios.get(`/${category}`)).data
        this.setState({
            selectedCategory: category,
            posts: children
        })
    }

    toggleShowSaved = () => {
        this.setState({
            showSaved: !this.state.showSaved
        })
    }

    savePost = async(details) => {
        const newSavedPost = (await axios.post('./create', {details})).data
        this.setState({
            saved:[...this.state.saved, newSavedPost]
        })
        alert('You did it!!')
    }

    render() {
        const {selectedCategory, posts, showSaved, saved} = this.state
        return(
            <div>
                <Nav 
                    selectedCategory = {selectedCategory} 
                    changeCategory = {this.changeCategory}
                />
                <Body 
                    selectedCategory = {selectedCategory}
                    posts = {posts}
                    saved = {saved}
                    showSaved = {showSaved}
                    toggleShowSaved = {this.toggleShowSaved}
                    savePost = {this.savePost}
                />
            </div>
            
        )   
    }
}