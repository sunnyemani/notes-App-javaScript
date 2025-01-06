const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll(".input-box");


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();


function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className='input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = './notes-app-img/images/delete.png';
    notesContainer.appendChild(inputBox)
    inputBox.appendChild(img);
    inputBox.addEventListener('keyup', function () {
        updateStorage();
    });
    updateStorage();
})


notesContainer.addEventListener('click', function (e){
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.input-box')
        notes.forEach(note =>{
            note.onKeyup = function(){
                updateStorage();
            }            
        })
    }
})

document.addEventListener('keydown', event =>{
    if(event.key === 'Enter'){
        let range = window.getSelection().getRangeAt(0);
        let br = document.createElement('br');
        range.insertNode(br);
        range.setStartAfter(br);
        event.preventDefault();
    }
})