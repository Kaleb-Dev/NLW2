const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const arrayIndex = +subjectNumber -1
    return subjects[arrayIndex]
}

function HoursToMinutes(time) {
    const [hour, minutes] = time.split(':')
    return Number((hour * 60) + minutes)
}

function UrlTime(time) {
    const time_url = time.replace(':', '%3A')
    return time_url
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    HoursToMinutes,
    UrlTime
}