<template>
  <div class="header">
    <router-link to="/" class="header_logo">
      <img class="logo" :src="`${logo}`" />
      <span class="title logo">{{ title }}</span>
    </router-link>
    <div :class="`header_menu ${showMenu ? 'open' : ''}`">
      <v-menu :menu="menu" @handleMenuClick="handleMenuClick" />
      <button
        class="btn--icon menu-hamburguer"
        @click="toggleShowMenu()"
      ></button>
    </div>
  </div>
</template>

<script>
import contentService from '../api/contentService'
import BaseMenu from '@/components/BaseMenu'

export default {
  name: 'Header',
  components: {
    'v-menu': BaseMenu
  },
  data() {
    return {
      showMenu: false,
      menu: [],
      logo: '',
      title: ''
    }
  },
  mounted() {
    contentService('header').then((response) => {
      this.menu = response.data.menu
      this.logo = response.data.logo
      this.title = response.data.title
    })
  },
  methods: {
    toggleShowMenu: (value) => {
      this.showMenu = !this.showMenu
    },
    handleMenuClick: (link) => {
      if (this.showMenu) this.toggleShowMenu()
    }
  }
}
</script>

<style>
.header {
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  background: #071d49;
}
.header_logo {
  text-decoration: none;
}
.header_logo .logo {
  width: 144px;
}
.header_logo .logo,
.header_logo .title {
  display: inline-block;
  vertical-align: middle;
}
.header_logo .title {
  margin: 0 0 0 10px;
}
.header_menu {
  display: flex;
}
.header_menu .menu-hamburguer {
  display: none;
}
.header_menu .menu-item a {
  text-decoration: none;
  color: var(--color-white);
}
.header_menu .menu-item a:hover {
  color: var(--color-primary);
}

/* Media Mobile */
@media (max-width: 768px) {
  .header_menu {
    flex-direction: row-reverse;
    align-content: center;
  }
  .header_menu .menu-hamburguer {
    display: block;
    height: auto;
    z-index: 3;
    margin-left: 10px;
    background-image: url('../assets/icons/menu.svg');
  }
  .header_menu.open .menu {
    right: 0;
  }
  .header_menu.open .menu-hamburguer {
    background-image: url('../assets/icons/close.svg');
  }
  .header {
    display: flex;
    align-items: center;
  }
}
</style>
