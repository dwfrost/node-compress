const compressing = require('compressing')

compressing.zip
    .uncompress('zips/blogs.zip', '../blogs')
    .then(() => {
        console.log('解压缩完成')
    })
    .catch(err => {
        console.log('解压缩error', err.message)
    })
