const compressing = require('compressing')

// compress a file
// compressing.zip
//     .compressFile('example/a.txt', 'dist.zip')
//     .then(res => {
//         console.log('done', res)
//     })
//     .catch(err => {
//         console.log('error', err)
//     })

// compress a dir
compressing.zip
    .compressDir('example', 'zips/blogs.zip', { ignoreBase: true })
    .then(res => {
        console.log('done', res)
    })
    .catch(err => {
        console.log('error', err)
    })
