var container = document.getElementById('container')


window.addEventListener('load', function editable(){
    container.contentEditable = true;
})

const create_btn = document.querySelector('button')
create_btn.addEventListener('click', changeName)

function changeName () {
    var container = document.getElementById('container')
    if (create_btn.textContent === 'Create'){
        createPost
        create_btn.textContent = 'Edit'
        container.style.color = 'grey';
        container.contentEditable = false;
        
    } else if (create_btn.textContent === 'Edit') {
        create_btn.textContent = 'Update'
        container.style.color = 'black';
        container.contentEditable = true;

    } else if (create_btn.textContent === 'Update') {
        create_btn.textContent = 'Edit'
        container.style.color = 'grey';
        container.contentEditable = false;
    }
}
