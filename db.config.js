import mysql from 'mysql2'

export const db = mysql.createPool({
    host: process.env.NEXT_PUBLIC_DB_HOST,
    port: process.env.NEXT_PUBLIC_DB_PORT,
    user: process.env.NEXT_PUBLIC_DB_USER,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    database: process.env.NEXT_PUBLIC_DB_NAME,
})
