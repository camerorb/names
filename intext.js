{
    const personForm = document.querySelector('form')
    const names = (text) => {
        const name = document.createElement('li')
        name.textContent = text
        return name
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        const form = ev.target
        const details = document.querySelector('.details')
       
        const personName = form.personName.value 
        const list = document.createElement('ul')
        list.appendChild(names(personName))
        details.appendChild(list) 
    }
    personForm.addEventListener('submit', handleSubmit)
}