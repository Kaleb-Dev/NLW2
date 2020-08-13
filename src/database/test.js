// const DataBase = require('./db')
// const createProffy = require('./createProffy')


// DataBase.then(async (db) => {
//     proffyValue = {
//         name: "Diego Fernades",
//         avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
//         whatsapp: "9950403049",
//         bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
//     }

//     classValue = {
//         subject: 1,
//         cost: "20",
//     }

//     classScheduleValues = [
//         {
//             weekday: 1,
//             time_from: 720,
//             time_to: 1220,
//         },
//         {
//             weekday: 2,
//             time_from: 420,
//             time_to: 1720,
//         }
//     ]

//     // await createProffy(db, { proffyValue, classValue, classScheduleValues })

//     const selectedProffys =  await db.all("SELECT * FROM proffys")
//     // console.log(selectedProffys)

//     const selectedClassesAndProffys = await db.all(`
//         SELECT classes.*, proffys.*
//         FROM proffys
//         JOIN classes ON (classes.proffy_id = proffy_id)
//         WHERE classes.proffy_id = 1;
//     `)
    
//     // console.log(selectedClassesAndProffys)
//     const selectedClassesSchedules = await db.all(`
//         SELECT class_schedule.*
//         FROM class_schedule
//         WHERE class_schedule.class_id = "1"
//         AND class_schedule.weekday = "2"
//         AND class_schedule.time_from <= "320"
//         AND class_schedule.time_to > "678"
//     `)
//     console.log(selectedClassesSchedules)

// })