var express = require('express');
var router = express.Router();

const { User } = require('./../model/User');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/login',  async function (req, res) {
    // req: 客户端 携带的信息
    // console.log(req.query)
    // console.log(req.params)
    const user =  await User.create({username: req.body.name});
    res.set('sadsadsadsafdgsfadgfsdfsd', '789')
    res.send({
        msg: '登录成功'
    })
});


/*GET list page.*/
router.get('/list', function (req, res, next) {
    res.json({
        data: {},
        code: '200',
        codeStr: '发送成功'
    })
});
/*所有请求*/
router.all("*", (req, res) => {
    res.json("请求错误")
})

module.exports = router;