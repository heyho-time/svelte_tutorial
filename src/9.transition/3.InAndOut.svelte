<script>
	import { fade, fly } from 'svelte/transition';
	let visible = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p in:fly="{{ y: 200, duration: 2000 }}" out:fade>
		Flies in and out
	</p>
{/if}

<!-- transition 대신에 in or out이 있을 수 있고 둘 다 있을 수도 있습니다. -->

