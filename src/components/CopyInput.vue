<template>
  <div class="flex flex-row form-input">
    <input
      ref="input"
      :value="value"
      :readonly="readonly"
      class="mr-auto bg-transparent transition-bg transition-text"
      :class="{ 'bg-black': isCopying, 'text-white': isCopying }"
      @change="change"
    />
    <button class="w-6 h-6" @click="copy">
      <svg-icon
        name="clone"
        class="w-5 h-5 transition-size"
        :class="{ 'w-6': isCopying, 'h-6': isCopying }"
        title="Link in Zwischenablage kopieren"
      />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      isCopying: false
    };
  },
  methods: {
    change(value) {
      this.$emit("change", value);
    },

    copy() {
      this.isCopying = true;
      this.$refs.input.focus();
      this.$refs.input.select();
      document.execCommand("copy");
      this.$refs.input.blur();

      setTimeout(() => {
        this.isCopying = false;
      }, 300);
    }
  }
};
</script>
