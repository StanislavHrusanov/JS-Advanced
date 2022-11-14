function getArticleGenerator(articles) {
    return function () {
        if (articles.length > 0) {
            const text = articles.shift();
            const newArticle = document.createElement('article');
            newArticle.textContent = text;
            const div = document.getElementById('content');
            div.appendChild(newArticle);
            return div;
        }
    }
}
