import axios from 'axios'

const NEXT_API = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export async function getAllPosts() {
    return NEXT_API.get('/posts')
}
