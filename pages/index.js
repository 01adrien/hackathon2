import Layout from '../components/layout'
import { useState, useEffect } from 'react'
import { getAllPosts } from '../utils/nextApiCalls'

export default function Home() {
    console.log(process.env)
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
            <p className="text-[3rem] text-center text-red-800 mt-40">
                HACKATON
            </p>
            {posts.map((post, key) => {
                return (
                    <div key={key} className="border-t-2 pt-4 mb-4">
                        <p>{post.date}</p>
                        <p>{post.hour}</p>
                        <p>{post.content}</p>
                    </div>
                )
            })}
        </Layout>
    )
}
