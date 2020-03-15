import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        posts: []
    }

    async componentDidMount(){
        const post = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await post.json();
        console.log(data);
        this.setState({
            posts : data
        })
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => {
                    return <div key = {post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                })}
            </div>
        )
    }
}
