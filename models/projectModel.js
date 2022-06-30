import { db } from '../db.config'

// ------------------------- GET --------------- //

export async function getAllProject() {
    const [allProject] = await db.promise().query('SELECT * FROM project')
    return allProject
}

export async function getProjectById(id) {
    const [projectById] = await db
        .promise()
        .query('SELECT * FROM project WHERE id = ?', [id])
    return projectById
}

// export async function getAllTechnos() {
//     const [allTechnos] = await db.promise().query('SELECT * FROM technos')
//     return allTechnos
// }

// export async function getTechnosById(id) {
//     const [technosById] = await db
//         .promise()
//         .query('SELECT * FROM technos WHERE id = ?', [id])
//     return technosById
// }

// export async function getAllTechnosProject() {
//     const [allTechnosProject] = await db
//         .promise()
//         .query('SELECT * FROM technosProject')
//     return allTechnosProject
// }

// export async function getTechnosProjectById(id) {
//     const [technosProjectById] = await db
//         .promise()
//         .query('SELECT * FROM technosProject WHERE id = ?', [id])
//     return technosProjectById
// }

// ------------------------- ADD --------------- //

export async function createProject(
    name,
    type,
    sector,
    city,
    tech1,
    tech2,
    tech3
) {
    const [{ insertId }] = await db
        .promise()
        .query(
            'INSERT INTO project (name, type, sector, city, tech1, tech2, tech3) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, type, sector, city, tech1, tech2, tech3]
        )
    return { name, insertId }
}

// export async function addTechnosProject(project_id, technos_id) {
//     const [{ insertId }] = await db
//         .promise()
//         .query(
//             'INSERT INTO technosProject (project_id, technos_id) VALUES (?, ?)',
//             [project_id, technos_id]
//         )
//     return { project_id, technos_id, insertId }
// }
