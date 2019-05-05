<template>
  <nuxt-link :to="'/products/' + id" class="game-item billet">
      <span class="logo">
        <img :src="imageUrl" :alt="title" :title="title">
      </span>
      <span class="name">{{ title }}</span>
      <span class="rating">
          <div class="rating-info"
               :class="rating"
               title="User rating 5"></div>
      </span>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'ProductPreview',
    props: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      rating: {
        type: String
      }
    },
    computed: {

    }
  }
</script>

<style>
  /*.owl-item {*/
    /*padding: 10px 25px 20px 25px;*/
  /*}*/
</style>

<style scoped>
  .game-item {
    padding: 20px 15px;
    text-align: center;
  }
  .billet {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    background: #fff;
    margin-bottom: 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    transition: all 0.4s cubic-bezier(0.2, 0.57, 0.36, 0.8);
    cursor: pointer;
  }
  .billet > span {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .billet .logo img {
    height: 120px;
    width: auto;
    display: block;
  }
  .billet .name {
    display: inline-block;
    position: relative;
    margin: 15px 0 5px 0;
    font-size: 18px;
    font-weight: bold;
    line-height: 27px;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
