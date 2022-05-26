<script>
	import Thing from '../Thing.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' },
	];

	function handleClick() {
		things = things.slice(1);
	}
</script>

<button on:click={handleClick}>
	Remove first thing
</button>

<!-- 
{#each things as thing }
	<Thing name={thing.name}/>
{/each} -->

{#each things as thing (thing.id)}
	<Thing name={thing.name}/>
{/each}

<!-- 
	id 안넣어주면 제대로 작동하지 않는다.
	
	id를 넣어줘야 제대로 작동한다. 
	loop 처리할땐 꼭 index를 넣어주자.

-->