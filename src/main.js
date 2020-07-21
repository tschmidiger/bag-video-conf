import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

import SvgIcon from "@/components/SvgIcon.vue";

Vue.component("SvgIcon", SvgIcon);

import VTooltip from "v-tooltip";

let options = {
  defaultPlacement: "bottom",

  // Default events that trigger the tooltip
  defaultTrigger: "hover focus",

  // Default position offset (px)
  defaultOffset: "4",
  defaultPopperOptions: {},

  // Options for popover
  popover: {
    defaultPlacement: "bottom",
    defaultTrigger: "click",
    defaultOffset: 8
  }
};

Vue.use(VTooltip, options);

new Vue({
  components: { SvgIcon },
  render: h => h(App)
}).$mount("#video-conf");
