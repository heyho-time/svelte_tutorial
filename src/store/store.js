import { writable } from "svelte/store";

// export let storeName = '';
// 외부에서 수정을 못한다.

export let storeName = writable("hi");
