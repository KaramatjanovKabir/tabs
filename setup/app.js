const about = document.querySelector('.about')
const btn = document.querySelectorAll('.btn')
const articles = document.querySelectorAll('.content')
const element = document.getElementById(id)

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id
    
    if (id) {
         btn.forEach(function (btn) {
           btn.classList.remove("active");
         });
        e.target.classList.add('active')

        articles.forEach(function (article) {
            article.classList.remove('active')
        })
        
        
        element.classList.add('active')
    }
})