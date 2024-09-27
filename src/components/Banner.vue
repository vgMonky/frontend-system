<template>
  <section class="banner">
    <div class="banner-background" :style="backgroundStyle"></div>
    <div class="banner-glass" :style="glassStyle"></div>
    <div class="banner-content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    backgroundImage: {
      type: String,
      default: ''
    },
    blurPixel: {
      type: Number,
      default: 0
    }
  },
  computed: {
    backgroundStyle() {
      return this.backgroundImage
        ? { backgroundImage: `url(${this.backgroundImage})` }
        : {}
    },
    glassStyle() {
      return {
        backdropFilter: `blur(${this.blurPixel}px)`
      }
    }
  }
}
</script>

<style scoped>
.banner {
  position: relative;
  color: var(--c0);
  text-align: left;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: var(--pad);
  overflow: hidden;
}

.banner-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.banner-glass {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.banner-content {
  position: relative;
  max-width: 800px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  z-index: 3;
}
</style>