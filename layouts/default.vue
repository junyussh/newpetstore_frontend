<template>
  <div>
    <Navbar />
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Petstore</strong> by
          Spring Project Team. The source code is licensed
          <a
            href="http://opensource.org/licenses/mit-license.php"
          >MIT</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>
<style lang="scss">
body {
  background: #fff;
}
</style>
