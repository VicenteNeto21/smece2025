const tabButtons = document.querySelectorAll('.tab-button');
const programacaoLists = document.querySelectorAll('.programacao-list');

function update(newIndex) {
    document.querySelector('.tab-button.active').classList.remove('active');
    document.querySelector('.programacao-list.active').classList.remove('active');

    tabButtons[newIndex].classList.add('active');
    programacaoLists[newIndex].classList.add('active');
}

tabButtons.forEach((button, index) => {
    button.addEventListener('click', function(){
        update(index);
    });
}); 