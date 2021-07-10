var express = require('express')
var router = express.Router()
var child_process = require('child_process')

// 调用本地模型
router.post('/cls', (req, res) => {
  let mode = req.body.mode
  let command = ''
  if (mode === 1) {
    let filename = req.body.filename
    command = ['python src/file_predict.py ', 'upload/', filename].join('')
  } else {
    let title = req.body.title
    let content = req.body.content
    command = ['python src/one_predict.py', content, title].join(' ')
  }
  console.log(command)
  // command = ['python src/test.py'].join('')
  child_process.exec(command, function (error, stdout, stderr) {
    if (error) {
      console.error('error: ' + error)
      res.send({
        code: 500,
        msg: '新闻分类分析过程出错！',
      })
    }
    if (mode === 1) {
      console.log('文件分析结束，新闻分类分析完成！')
      res.send(JSON.stringify({ code: 200, msg: '新闻分类分析完成！' }))
    } else {
      console.log('单条分析结束，新闻类别：', stdout)
      res.send(JSON.stringify({ code: 200, msg: stdout }))
    }
  })
})

module.exports = router
