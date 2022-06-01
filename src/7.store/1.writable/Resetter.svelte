<script>
	import { count } from './store.js';

	function reset() {
		// TODO reset the count
		count.set(0);
	}
</script>

<button on:click={reset}>
	reset
</button>