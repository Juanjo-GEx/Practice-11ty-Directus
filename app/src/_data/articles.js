const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async () => {
    try {
        const { data } = await Cache('http://127.0.0.1:8055/items/articles', {
            duration: '1d',
            type: 'json'
        });
        return data
    } catch(ex) {
        console.log(ex)
        return []
    }
}