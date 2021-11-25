function toggleBookmark(bookmark) {
    bookmark.addEventListener('click', () => {
        bookmark.classList.toggle('far')
        bookmark.classList.toggle('fas')
    })
}

/* const filledBookmark = document.querySelectorAll('.card__bookmark')

filledBookmark.addEventListener('click', () => {
filledBookmark.classList.add('.card__bookmark--active ')
}) */