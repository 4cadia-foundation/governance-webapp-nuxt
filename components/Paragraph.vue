<template>
  <div :class="['paragraph', paragraph.containerClass]">
    <div class="content-text">
      <h2 v-if="paragraph.title" class="title">{{ paragraph.title }}</h2>
      <p v-if="paragraph.text" class="text" v-html="paragraph.text"></p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    paragraph: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.paragraph {
  position: relative;
  margin: auto;
  padding: 100px 150px;
  align-items: center;
  float: none;
  clear: both;
  display: flex;
}

.paragraph .content-text {
  max-width: 50%;
}

.paragraph:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  height: 100%;
  width: 40%;
  background-repeat: no-repeat;
  background-size: contain;
}

.paragraph.text-left:before {
  background-image: url('../assets/images/symbol-group-a.svg');
  right: -100px;
  background-position: 100%;
}

.paragraph.text-right:before {
  background-image: url('../assets/images/symbol-group-c.svg');
  left: -100px;
  background-position: 0;
}

.paragraph.text-left {
  text-align: left;
  justify-content: flex-start;
}

.paragraph.text-right {
  text-align: right;
  justify-content: flex-end;
}

.paragraph.paragraph.text-left .content-text .title {
  color: var(--color-navy);
}

.paragraph.paragraph.text-right .content-text .title {
  color: var(--color-lazuli);
}

@media (max-width: 768px) {
  .paragraph {
    padding: 0 60px;
  }

  .paragraph .content-text {
    max-width: 100%;
  }

  .paragraph:before {
    width: 120%;
    z-index: -1;
    opacity: 0.3;
  }
}
</style>
