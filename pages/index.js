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
            <p className="text-[3rem] text-center mt-40">HACKATON</p>
        </Layout>
    )
}
