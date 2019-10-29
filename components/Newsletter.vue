<template>
  <div class="newsletter">
    <div class="newsletter_wrapper">
      <div class="newsletter_content newsletter_header">
        <h3 class="title">{{ content.title || capitalize }}</h3>
        <div class="text" v-html="content.text"></div>
      </div>
      <div v-if="this.$slots.body" class="newsletter_content newsletter_body">
        <slot name="body"></slot>
      </div>
      <div class="newsletter_content newsletter_footer">
        <form class="form form--newsletter" @submit.prevent="handleSubscribe">
          <div class="form_field">
            <v-input
              v-model="emailValue"
              placeholder-txt="Email Address"
              input-type="email"
              input-name="email"
              minlength="3"
            />
          </div>
          <div class="form_control">
            <button type="submit" class="btn btn--primary">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BaseInput from '@/components/BaseInput'

export default {
  name: 'Newsletter',
  filters: {
    capitalize: (content) => {
      return content.toUpperCase()
    }
  },
  components: {
    'v-input': BaseInput
  },
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      emailValue: ''
    }
  },
  methods: {
    handleSubscribe() {
      // eslint-disable-next-line no-console
      console.log(this.emailValue)
      axios
        .request({
          method: 'POST',
          url: `/api/newsletter/addMember`,
          data: {
            email: this.emailValue
          }
        })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log('response', response)
          this.$toasted.success(response.data.msg, {
            duration: 5000
          })
          alert(response.data.msg)
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.error(e)
          this.$toasted.success(e, { duration: 5000 })
          alert(e)
        })
    }
  }
}
</script>

<style>
.newsletter {
  color: var(--color-navy);
  background-image: url('../assets/images/symbol-group-1.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 110%;
  padding: 3vw 60px;
  margin-bottom: 20px;
}
.newsletter_wrapper {
  max-width: 50%;
  margin: auto;
}
</style>
