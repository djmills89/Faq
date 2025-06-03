const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')

//When clicked, remove hidden class
//Change icon to minus
//When closed, add hidden class
//Change icon to plus

questions.forEach( question => {
    question.addEventListener('click', (e) => {
       const parentDiv = e.currentTarget

       questions.forEach(q => {
         if (q !== parentDiv) {
            q.classList.remove('active')
            q.querySelector('p').classList.add('hidden')
            const icon = q.querySelector('img')
            icon.src = '../assets/images/icon-plus.svg'
            icon.alt = 'Plus Icon'
         }
       })

       const p = parentDiv.querySelector('p')
       const img = parentDiv.querySelector('img')

       const isActive = parentDiv.classList.contains('active')
       parentDiv.classList.toggle('active')
       p.classList.toggle('hidden')
       img.src = isActive
         ? '../assets/images/icon-plus.svg'
         : '../assets/images/icon-minus.svg'
       img.alt = isActive ? 'Plus icon' : 'Minus icon'
    })
})