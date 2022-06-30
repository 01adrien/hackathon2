import {
    getAllTechnosProject,
    addTechnosProject,
    getTechnosProjectById,
} from '../../models/projectModel'

export default async function handleAllTechnosProject(req, res) {
    if (req.query.id) {
        const technosProjectById = await getTechnosProjectById(req.query.id)
        res.status(200).send(technosProjectById)
    }
    if (req.method == 'GET') {
        const alltechnosproject = await getAllTechnosProject()
        res.status(200).send(alltechnosproject)
    }
    if (req.method == 'POST') {
        const { project_id, technos_id } = req.body
        const newTechProject = await addTechnosProject(project_id, technos_id)
        res.status(201).send(newTechProject)
    }
}
