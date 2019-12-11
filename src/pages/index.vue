<template>
  <div class="page-content">
    <h1>Enter your name</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="name">Name</label>
        <input id="name" v-model="name" type="text">
      </div>
      <div>
        <button type="submit">
          Go to the next
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {
  /** ユーザー名 */
  name = '';

  /** 次のステップにすすむ */
  onSubmit () {
    this.$router.push({
      path: '/profile',
      query: {
        name: this.name
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .page-content {
    & > .title {
      font-weight: normal;
    }
  }
</style>
