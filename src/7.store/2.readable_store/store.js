import { readable } from "svelte/store";

export const time = readable(new Date(), function start(set) {
  // implementation goes here
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});
