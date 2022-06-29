import {
    getAllProject,
    createProject,
    getProjectById,
} from '../../models/projectModel'

export default async function handleAllProject(req, res) {
    if (req.query.id) {
        const projectById = await getProjectById(req.query.id)
        res.status(200).send(projectById)
    }
    if (req.method == 'GET') {
        const allprojects = await getAllProject()
        res.status(200).send(allprojects)
    }
    if (req.method == 'POST') {
        const { name, type, sector, city } = req.body
        const newProject = await createProject(name, type, sector, city)
        res.status(201).send(newProject)
    }
}
