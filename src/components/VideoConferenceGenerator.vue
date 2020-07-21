<template>
  <div class="bg-white border border-gray-600 rounded flex flex-col p-3">
    <div class="font-bold">Video Konferenz</div>

    <copy-input :value="url" class="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readonly />

    <button
      class="flex flex-row items-center justify-between mt-3 btn btn--primary class"
      @click="open"
    >
      <div>Video-Konferenz öffnen</div>
      <div class="text-white">
        <svg-icon
          name="external-link"
          class="w-5 h-5 ml-3 text-white fill-current"
        />
      </div>
    </button>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
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
