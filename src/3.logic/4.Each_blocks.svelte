



<script>
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<h1>The Famous Cats of YouTube</h1>

<!-- <ul>
	open each block
		<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
			{cat.name}
		</a></li>
	close each block
</ul> -->

<ul>
	{#each cats as cat, i}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
			{i+1} : {cat.name}
		</a></li>
	{/each}
</ul>



<!-- svelte에선 반복문으로 each 블록을 이용한다. 

    - 배열 또는 유사배열객체또한 사용할 수 있다.

    - 2번째 인자로 index도 받을 수 있다.

    - 구조화를 사용할 수 있다. 
        each cats as {id, name}

-->