

 export function currentAgeForBirthYear(year) {
    let currentYear = new Date().getFullYear()
    let age = currentYear - year
    return age
}