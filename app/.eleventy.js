const articleFilter = require('./src/filters/article-filter');
module.exports = config => {
    config.addFilter('getArticlesByCategory', articleFilter);
    return {        
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}