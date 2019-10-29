<template>
  <div class="roadmap">
    <h2 class="roadmap-title">{{ content.title }}</h2>
    <h3 v-if="content.text" class="roadmap-text" v-html="content.text"></h3>
    <img
      src="../static/images/Timeline.png"
      alt="Time Line"
      class="roadmap-img"
    />
    <ul :class="`list`">
      <li
        v-for="(item, index) in content.list.data"
        :key="index"
        :class="`item`"
      >
        <h3 class="title">{{ item.title || capitalize }}</h3>
        <div class="text" v-html="item.text"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Roadmap',
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>
<style scoped>
.roadmap {
  display: inline-block;
  text-align: center;
  margin: 0 auto 6vw;
  width: 100%;
}
.roadmap-title {
  color: var(--color-navy);
}
.item {
  display: inline-table;
  margin: 1.5em;
  max-width: 15.5%;
  text-align: left;
}
.title {
  font-size: 1.2em;
}
.item:nth-child(odd) {
  color: var(--color-lazuli);
}
.item:nth-child(even) {
  color: var(--color-navy);
}
.text {
  color: var(--color-black);
}

@media (max-width: 768px) {
  .roadmap-img {
    display: none;
  }
  .item {
    display: block;
    margin: auto;
    max-width: 80%;
  }
}
</style>
