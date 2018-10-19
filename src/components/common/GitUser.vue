<template>
  <div class="git-user">
    <p>{{ user }}</p>
    <p>{{ git }}</p>
  </div>
</template>
<script>
/**
 * GitUser module
 * @module GitUser
 * @author Maxime Rolland
 */

export default {
  name: "GitUser",
  props: ["user", "git"]
};
</script>

<style scoped>
</style>