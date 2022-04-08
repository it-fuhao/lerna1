import { createApp } from "vue";
import App from "./app.vue";

import FhHelloWorld from '../packages/hello-world/src/index.vue'

const app = createApp(App);
app.component("FhHelloWorld", FhHelloWorld);
app.mount("#app");
