const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');

btn.addEventListener('click', (fn) => {
    const content = input.value;
    if(content === '') return
    createDeleteElements(content)
    content = ''
})

function createDeleteElements(value) {
    const li = document.createElement('li')
    const btn = document.createElement('button')

    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    btn.textContent = 'X'

    li.appendChild(btn)
    list.appendChild(li)
}