const ghpages = require('gh-pages')

ghpages.publish('build', {
    remote: 'origin'
}, function (err) {
    // eslint-disable-next-line no-console
    err && console.error(err)
})