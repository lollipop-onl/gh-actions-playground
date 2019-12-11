<template>
  <div class="page-content">
    <h1 class="title">
      Welcome!
    </h1>
    <p id="greeting">Nice to meet you, {{ name }}!</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ProfilePage extends Vue {
  /** ユーザー名 */
  get name () {
    const { name } = this.$route.query

    return Array.isArray(name) ? name[0] : name
  }

  /** ライフサイクル */
  beforeMount () {
    // ユーザー名が指定されなかったらトップへ飛ばす
    if (!this.name) {
      this.$router.replace('/')
    }
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
