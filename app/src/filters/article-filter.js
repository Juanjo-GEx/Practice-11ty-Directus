module.exports = (categoryId) => {
    return articles.filter((item) => item.category === categoryId)
}