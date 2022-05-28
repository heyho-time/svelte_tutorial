import App from "./5.binding/14.Binding_component_instances.svelte";

const app = new App({
  target: document.body,
  props: {
    // name: "world",
  },
});

export default app;
