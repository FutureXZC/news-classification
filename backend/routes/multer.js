var express = require('express')
var router = express.Router()

const multer = require('multer')
const fs = require('fs')
const { query } = require('express')

// 单个文件上传
router.post(
  '/upload',
  multer({
    dest: 'upload',
  }).single('file', 10),
  (req, res) => {
    const file = req.file
    console.log(file)
    fs.rename(file.path, `upload/${file.originalname}`, (err) => {
      if (err) {
        console.log(err)
      }
      console.log('文件保存完成!')
    })
    res.send(file)
  }
)

// 单个文件下载
router.get('/download', (req, res) => {
  res.download(`upload/${req.query.filename}`)
})

module.exports = router
