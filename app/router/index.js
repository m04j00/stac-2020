const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hurry Up node.js backend with STAC2020')
})

router.get('/report', (req, res) => {
  res.send('긴급신고가 요청되었습니다.')
})
module.exports = router;
