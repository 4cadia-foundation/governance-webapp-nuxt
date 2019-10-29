const Mailchimp = require('mailchimp-api-v3')

class MailchimpApi {
  constructor(key, id) {
    this.listId = id
    this.mailchimp = new Mailchimp(key)
  }

  addMember(params) {
    return this.mailchimp.post(`/lists/${this.listId}/members`, {
      email_address: params.email,
      status: params.status
    })
  }

  listMember() {
    return this.mailchimp.get(`/lists/${this.listId}/members`)
  }
}

export default MailchimpApi
