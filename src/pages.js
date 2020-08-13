const { subjects, weekdays, getSubject, HoursToMinutes, UrlTime } = require('./utils/format')
const dataBase = require('./database/db')


function pageLanding(req, res) {
    return res.render("index.html")
}
async function pageStudy(req, res) {
    const filters = req.query

    if (!filters.weekday || !filters.time || !filters.subject) {
        return res.render("study.html", { filters, subjects, weekdays })
    }


    const timeToMinutes = HoursToMinutes(filters.time)

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffy_id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = '${filters.subject}'
    `

    try {
        const db = await dataBase
        const proffys = await db.all(query)
        proffys.map((proffy => {
            proffy.subject = getSubject(proffy.subject)
        }))

        res.render('study.html', { proffys, subjects, filters, weekdays })

    } catch (error) {
        console.log(error)
    }

}
function pageGiveClasses(req, res) {
    return res.render("give-classes.html", { weekdays, subjects })
}

async function pageSaveClass(req, res) {
    const createProffy = require('./database/createProffy')
    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio

    }

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost,
    }

    const classScheduleValues = req.body.weekday.map((weekday, index) => {
        return {
            weekday,
            time_from: HoursToMinutes(req.body['time-from'][index]),
            time_to: HoursToMinutes(req.body['time-to'][index])
        }
    })

    try {
        const db = await dataBase
        await createProffy(db, { proffyValue, classValue, classScheduleValues })

        let queryString = "?subject=" + req.body.subject
        queryString += "&weekday=" + req.body.weekday[0]
        queryString += '&time=' + UrlTime(req.body['time-from'][0])

        return res.redirect("/study" + queryString)
    } catch (error) {
        console.log(`Erro ao tentar coletar as informações do formulário. Function pageSaveClass: src/page.js \n ${error}`)
    }
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    pageSaveClass
}