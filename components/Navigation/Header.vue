<template>
  <div class="header-container">
    <header class="the-header">
      <div class="logo">
        <nuxt-link to="/">FR Header</nuxt-link>
      </div>
    </header>
  </div>
</template>

<script>

  export default {
    name: 'Header',
    components: {

    }
  }
</script>

<style scoped>
  .header-container {
    height: 60px;
  }

  .the-header {
    width: 100%;
    position: fixed;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000000;
    z-index: 100;
    box-sizing: border-box;
    padding: 0 20px;
  }

  .logo {
    margin: 0 10px;
    font-size: 1.3rem;
  }

  .logo a {
    text-decoration: none;
    color: #ffffff;
  }

  .spacer {
    flex: 1;
  }

  .navigation-items {
    display: none;
  }

  @media (min-width: 768px) {
    .navigation-items {
      display: block;
    }
  }

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  .nav-item {
    margin: 0 10px;
  }

  .nav-item a {
    text-decoration: none;
    color: #ffffff;
  }

  .nav-item a:hover,
  .nav-item a:active,
  .nav-item a.nuxt-link-active {
    color: red;
  }

</style>
