import Layout from '../components/layout'
import { useState, useEffect } from 'react'
import { getAllPosts } from '../utils/nextApiCalls'

export default function Home() {
    const [posts, setPosts] = useState([])

    async function getPostsList() {
        const data = await getAllPosts()
        setPosts(data.data)
    }

    useEffect(() => {
        getPostsList()
    })
    return (
        <Layout pageTitle={'Home'}>
            <h1 className="text-2xl text-center mt-20">INDEX</h1>
        </Layout>
    )
}
