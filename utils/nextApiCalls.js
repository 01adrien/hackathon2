import axios from 'axios'

const NEXT_API = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export async function getAllProject() {
    return NEXT_API.get('/project')
}

export async function getProject(id) {
    return NEXT_API.get(`/project?id=${id}`)
}
