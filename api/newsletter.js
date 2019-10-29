import express from 'express'
import 'dotenv/config'
import MailchimpApi from './mailchimp.js'
const router = express.Router()

const mailchimp = new MailchimpApi(
  process.env.MAILCHIMP_API_KEY,
  process.env.MAILCHIMP_LIST_ID
)

router.post('/addMember', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('req', req.body)
  mailchimp.addMember(req.body)
})

router.get('/listMembers', (req, res) => {
  mailchimp.listMembers()
})

module.exports = router
