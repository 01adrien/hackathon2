import { getAllPosts } from '../../models/postsModel'

export default async function handleGetAllPosts(req, res) {
    const allposts = await getAllPosts()
    res.status(200).send(allposts)
}
