let filledBookmarks = document.querySelectorAll('.card__bookmark')

filledBookmarks.forEach((filledBookmark) => {
    filledBookmark.addEventListener('click', () => {
    filledBookmark.classList.toggle('far')
    filledBookmark.classList.toggle('fas')     
    })
})

let buttons = document.querySelectorAll('.button__answer')
let answers = document.querySelectorAll('.card__answer')


buttons.forEach((button, index) => { // index = button[0] usw.

    button.addEventListener('click', () => {
    let answer = answers[index];
    answer.classList.toggle('hide');
    if (answer.classList.contains('hide')) {  
        (button.innerHTML='Show Answer');
    } else {
        button.innerHTML='Hide Answer';
        }
    });
});