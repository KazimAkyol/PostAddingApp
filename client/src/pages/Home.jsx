import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    const { posts } = useSelector(state => state.posts)

    console.log("posts", posts);

    return (
        <div>Home</div>
    )
}

export default Home