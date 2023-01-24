<template>
  <div id="footer" class="bg-light mt-3">
    <router-link :to="{path: '/impressum'}">Impressum</router-link>
  </div>
</template>

<script>
export default {
  name: "FooterOrganism"
}
</script>

<style scoped>
#footer {
  bottom: 0;
  position: sticky;
  width: 100%;
  height: 45px;
  padding: 8px;
  outline: 3px white solid;
}
</style>