const router = require('express').Router()
const axios = require('axios')
const baseUrl = 'https://cnodejs.org/api/v1'

router.post('/login', (req, res, next) => {
  const token = req.body.accessToken

  axios.post(`${baseUrl}/accesstoken`, {
    accesstoken: token
  })
    .then(resp => {
      if (resp.status === 200 && resp.data.success) {
        req.session.user = {
          accessToken: token,
          loginName: resp.data.loginname,
          id: resp.data.id,
          avatarUrl: resp.data.avatar_utl
        }
        res.json({
          success: true,
          data: resp.data
        })
      }
    })
    .catch(err => {
      if (err.response) {
        res.json({
          success: false,
          data: err.response.data
        })
        console.log(err.response)
      } else {
        next(err)
      }
    })
})

module.exports = router
