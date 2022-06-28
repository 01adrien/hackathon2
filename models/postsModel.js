import { db } from '../db.config'

export async function getAllPosts() {
    const [allPosts] = await db.promise().query('SELECT * FROM posts')
    return allPosts
}
