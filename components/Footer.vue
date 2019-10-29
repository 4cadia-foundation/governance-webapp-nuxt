<template>
  <div>
    <footer class="site-footer">
      <div class="container">
        <div class="logo">
          <img class="logo-image" :src="`${logo}`" />
        </div>
        <div>
          <ul class="social-icons">
            <li>
              <a href="#"><img src="../assets/icons/twitter.svg"/></a>
            </li>
            <li>
              <a href="#"><img src="../assets/icons/medium.svg"/></a>
            </li>
            <li>
              <a href="#"><img src="../assets/icons/github.svg"/></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import contentService from '../api/contentService'

export default {
  name: 'Footer',
  components: {},
  data() {
    return {
      logo: ''
    }
  },
  mounted() {
    contentService('footer').then((response) => {
      this.logo = response.data.logo
    })
  }
}
</script>

<style scoped>
.site-footer {
  background-color: var(--color-navy);
  flex-direction: row;
}

.logo {
  margin: auto 0;
}

.logo-image {
  width: 144px;
  vertical-align: middle;
  margin: 0px;
}

.site-footer .container {
  display: flex;
  justify-content: space-between;
  padding: 50px 6vw;
}

.site-footer .social-icons {
  text-align: right;
}

.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-bottom: 0px;
  line-height: 0px;
}

.social-icons li {
  display: inline-block;
  margin: auto 0;
  margin-left: 10px;
  line-height: auto;
}

.social-icons li a {
  display: block;
}

.social-icons img {
  width: 40px;
  height: 40px;
}
</style>
