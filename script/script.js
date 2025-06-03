const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')

//When clicked, remove hidden class
//Change icon to minus
//When closed, add hidden class
//Change icon to plus

questions.forEach( question => {
    question.addEventListener('click', (e) => {
       const parentDiv = e.currentTarget
       const p = parentDiv.querySelector('p')
       const img = parentDiv.querySelector('img')
    //    p.classList.contains('hidden') ? p.classList.remove('hidden') : p.classList.add('hidden')
       if (!parentDiv.classList.contains('active')) {
            parentDiv.classList.add('active')
            img.src = '../assets/images/icon-minus.svg'
            img.alt = 'Minus icon'
            p.classList.remove('hidden')
       } else {
            parentDiv.classList.remove('active')
            img.src = '../assets/images/icon-plus.svg'
            img.alt = 'Plus icon'
            p.classList.add('hidden')
       }
    })
})