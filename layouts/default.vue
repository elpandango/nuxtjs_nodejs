<template>
  <div class="main-site-wrap">
    <div class="wrapper">
      <Header/>
      <nuxt/>
    </div>

    <Footer/>
  </div>
</template>

<script>
  import Header from '~/components/Navigation/Header';
  import Footer from '~/components/Navigation/Footer';

  export default {
    components: {
      Header,
      Footer
    },
    data() {
      return {}
    }
  }
</script>

<style>
  body, html {
    height: 100%;
  }
  #__nuxt, #__layout {
    height: 100%;
  }
  .main-site-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  html {
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
  }

  .wrapper {
    position: relative;
    flex: 1 0 auto;
    transition: all .3s cubic-bezier(.2, .57, .36, .8);
  }
</style>
