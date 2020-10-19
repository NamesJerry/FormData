var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.post('/upload', function (req, res, next) {
    let f = req.files.file;
    let newFile = [].concat(f);//前台选择一个文件上传时,req.files.file为一个对象,多个文件为一个数组,所以都统一转化成数组来处理
    newFile.forEach((file, index) => {
        file.mv(path.join(__dirname, '../public', 'upload', file.name), function (err) {
            if (err) {
                return res.status(400).send("sdsdsdas");
            }
        });
    })
    res.send('文件上传成功!');
});

module.exports = router;
