<script>
	import Info from '../Info.svelte';

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};

</script>

<Info name={pkg.name} version={pkg.version} speed={pkg.speed} website={pkg.website}/>
<Info {...pkg}/>

<!-- wow....이렇게 스프레드로 다 넣어버릴수도있다..최적화 안되서 권장하진 않는단다. 
        키 없는걸 넣으면 워닝뜸..
-->