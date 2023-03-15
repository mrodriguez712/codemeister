import { works } from './projects.js'

const dateEl = document.getElementById('date-el')
const numberOfWorks = document.getElementById('number-of-works')
const projectsEl = document.getElementById('projects-el')

// date
let date = new Date()
let getMonth = date.toLocaleString('default', { month: 'long' })
let getYear = date.getFullYear()

dateEl.innerHTML =
    `
    <h4 class="date">
    ${getMonth} 
    <br/>
    ${getYear}
    </h4>
`
// project number
numberOfWorks.textContent = works.length

// projects
for (let work of works) {
    projectsEl.innerHTML +=
    `
    <h2>${work.name}</h2>
    <p>${work.desc}</p>
    <p>${work.linkdesc} 
    <a href='${work.link}'>HERE
    </p>
    `
}






