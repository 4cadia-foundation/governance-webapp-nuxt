<template>
  <div :class="`hero float--${float} ${classes}`">
    <div class="hero_content">
      <div class="content content--text">
        <img v-if="hero.logo" :src="hero.logo" alt="" />
        <h1 v-if="hero.title" class="title">{{ hero.title }}</h1>
        <div v-if="hero.text" class="text subtitle" v-html="hero.text"></div>
      </div>
      <div v-if="hero.image" class="content content--image">
        <img :src="hero.image" alt="" />
      </div>
      <div class="content content--slot">
        <slot></slot>
      </div>
    </div>
    <div class="hero_background"></div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    hero: {
      type: Object,
      default: () => {}
    },
    float: {
      type: String,
      default: 'none'
    },
    classes: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped>
.content--text img {
  width: 30vw;
}

.hero {
  position: relative;
  overflow: hidden;
  min-height: 50vw;
}

.hero.colapsed {
  max-height: 15vw;
  min-height: auto;
}

.hero.colapsed .title {
  font-size: 2.441em;
  /* font-size: 43.95px */
  margin-bottom: 0;
  text-align: left;
}

.hero .hero_background {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('../assets/images/hero.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* z-index: -1; */
}

.hero.colapsed .hero_background {
  background-size: cover;
}

.hero_content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
  padding: 8% 0;
  position: relative;
  z-index: 1;
}

.hero.colapsed .hero_content {
  padding: 30px 0;
}

.hero .content--text {
  color: white;
  width: 50%;
}

.hero .content--text .title {
  color: white;
  margin: 49.5px 0;
}

.hero .content--text .text {
  color: var(--color-white);
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 35.16px;
  line-height: 48px;
}

.hero .content--image,
.hero .content--text {
  vertical-align: middle;
}

.hero .content--image {
  width: 40vw;
  max-width: 800px;
}

.hero .content--image img {
  width: 100%;
}

.hero.full-content .hero_content {
  flex-direction: column;
}

.hero.full-content .content--text {
  width: 80%;
  margin: auto;
  text-align: center;
}

.hero.full-content .content--slot {
  width: 100%;
  margin: auto;
  text-align: center;
}

@media (max-width: 768px) {
  .hero {
    max-height: 100%;
    height: auto;
  }
  .hero .hero_background {
    -webkit-transform: skew(0deg, -3deg) translateY(-20px);
    transform: skew(0deg, -3deg) translateY(-20px);
  }
  .hero_content {
    padding: 40px 0 80px;
    display: block;
  }
  .hero.full-content .content--text {
    width: 90%;
    min-width: 304px;
  }
  .hero .content--image {
    margin: auto;
    width: 80%;
  }
}
@media (min-width: 1920px) {
  .hero .content--text .title {
    font-size: 2vw;
  }
  .hero .content--text {
    font-size: 1.2vw;
  }
  .hero_content {
    padding: 6vw 0;
  }
}
</style>
