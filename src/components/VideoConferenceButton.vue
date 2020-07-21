<template>
  <v-popover @show="isShown = true" @hide="isShown = false">
    <button class="btn btn:hover flex items-center ml-2 my-1 font-sans text-xl">
      <svg-icon name="video-light" class="w-6 h-6" />
      <div class="ml-2">Video Konferenz starten</div>
    </button>

    <div slot="popover">
      <!--
        The v-if part is a little trick to force the component to be
        re-rendered so each time the button is pressed, the URL will be
        genereated newly
      -->
      <video-conference-generator v-if="isShown" />
    </div>
  </v-popover>
</template>

<script>
import VideoConferenceGenerator from "@/components/VideoConferenceGenerator";

export default {
  components: {
    VideoConferenceGenerator
  },
  data() {
    return {
      isShown: false
    };
  }
};
</script>
<style>
    .btn {
        @apply bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded;
    }

    .btn:hover {
        @apply bg-blue-700;
    }
</style>