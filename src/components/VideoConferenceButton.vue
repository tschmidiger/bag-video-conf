<template>
  <v-popover @show="isShown = true" @hide="isShown = false">
    <button class="flex items-center ml-2 font-sans text-xl">
      <svg-icon name="video-light" class="w-6 h-6" />
      <div class="ml-2">Video Konferenz starten</div>
    </button>

    <div slot="popover" class="py-2">
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
