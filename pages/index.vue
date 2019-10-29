<template>
  <div class="container container--about">
    <div v-for="(block, index) in content" :key="index" class="col">
      <div v-if="block['type'] == 'list_hero'" class="row row--full">
        <v-hero :hero="block['content']" float="right" classes=""> </v-hero>
      </div>
      <div v-if="block['type'] == 'list_paragraph'" class="row">
        <v-paragraph :paragraph="block['content']" />
      </div>
      <div v-if="block['type'] == 'list_card'" class="row">
        <v-cards-list :list="block['content']" />
      </div>
      <div v-if="block['type'] == 'roadmap'" class="row">
        <v-roadmap :content="block['content']" />
      </div>
      <div v-if="block['type'] == 'newsletter'" class="row">
        <v-newsletter :content="block['content']" />
      </div>
    </div>
  </div>
</template>

<script>
import contentService from '../api/contentService'
import Hero from '@/components/Hero'
import Paragraph from '@/components/Paragraph'
import CardList from '@/components/CardList'
import Newsletter from '@/components/Newsletter'
import Roadmap from '@/components/Roadmap'

export default {
  name: 'Home',
  components: {
    'v-hero': Hero,
    'v-cards-list': CardList,
    'v-paragraph': Paragraph,
    'v-newsletter': Newsletter,
    'v-roadmap': Roadmap
  },
  data() {
    return {
      content: []
    }
  },
  mounted() {
    contentService('home').then((response) => {
      this.content = response.data
    })
  }
}
</script>

<style></style>
