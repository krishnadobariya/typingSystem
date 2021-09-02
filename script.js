const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random"
const quotedisplayelement = document.getElementById('quotedisplay')
const quoteinputelement = document.getElementById('quoteinput')
const btnelement = document.getElementById('btn')
const   timerelement = document.getElementById('timer')


let correct = true
quoteinputelement.addEventListener('input', () => {
    const arryquote = quotedisplayelement.querySelectorAll('span')
    const arrayvalue = quoteinputelement.value.split('')
    arryquote.forEach((characterspan, index) => {
        const character = arrayvalue[index]
        if(character == null){
            characterspan.classList.add('correct')
            characterspan.classList.remove('incorrect')
            correct = false
        }
        else if(character === characterspan.innerText){
            characterspan.classList.add('correct')
            characterspan.classList.remove('incorrect')
        }else{
            characterspan.classList.add('incorrect')
            characterspan.classList.remove('correct')
            correct = false
        }
    })
    if(correct) renderNewQuote()
})


function getRandmQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderNewQuote() {
    const quote = await getRandmQuote()
    quotedisplayelement.innerHTML = ''
    quote.split('').forEach(character => {
        const characterspan = document.createElement('span')
      
        characterspan.innerText = character
        quotedisplayelement.appendChild(characterspan)
    });
    quoteinputelement.value = null
    starttimer()
}
let starttime
function starttimer() {
    timerelement.innerText = 0
    starttime = new Date()
    setInterval(() => {
       timer.innerText = gettimertime()
    },1000)
} 

function gettimertime() {
   return  Math.floor((new Date() - starttime)/1000)
}

renderNewQuote() 