<template>
  <div class="page-content">
    <h1 class="title">
      Hello you.
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
  .page-content {
    & > .title {
      font-weight: normal;
    }
  }
</style>
