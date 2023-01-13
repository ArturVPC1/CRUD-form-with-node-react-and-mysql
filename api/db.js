import mysql from "mysql"

export const db = mysql.createConnection({
    host: " INSERIR ",
    user: " INSERIR ",
    password: " INSERIR ",
    database: " INSERIR "
})