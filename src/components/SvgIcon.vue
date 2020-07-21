<template>
    <img :src="iconPath" :class="className" :title="title" />
</template>

<script>
export default {
  name: "SVGIcon",

  props: {
    /**
     * Name of the svg file
     */
    name: {
      type: String,
      required: true
    },

    /**
     * Optional title
     */
    title: {
      type: String,
      default: null
    }
  },

  computed: {
    iconPath() {
      let icon = require(`@/assets/icons/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, "default")) {
        icon = icon.default;
      }
      return 'https://vbst.safezone.ch'  + icon;
    },

    className() {
      return "svg-icon svg-icon--" + this.name;
    }
  }
};
</script>
