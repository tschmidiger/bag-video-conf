<template>
  <div class="flex flex-col">
    <div class="font-bold">Video Konferenz</div>

    <copy-input :value="url" class="mt-3" readonly />

    <button
      class="flex flex-row items-center justify-between mt-3 btn btn--primary class"
      @click="open"
    >
      <div>Video-Konferenz öffnen</div>
      <div class="text-white">
        <svg-icon name="external-link" class="w-5 h-5 text-white fill-current" />
      </div>
    </button>
  </div>
</template>

<script>
import { uuid } from "uuidv4";
import CopyInput from "@/components/CopyInput";

export default {
  components: {
    CopyInput
  },
  computed: {
    uuid() {
      return uuid();
    },
    url() {
      return `${process.env.VUE_APP_JITSI_URL}/${this.uuid}`;
    }
  },
  methods: {
    open() {
      window.open(this.url, "_blank");
    }
  }
};
</script>
