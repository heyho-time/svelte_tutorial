<p>This is a paragraph.</p>
<Nested />


<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>

<script>
	import Nested from '../Nested.svelte';
</script>


<!-- Nested 컴포넌트를 import 해왔다.
p에 스타일 준건 지금 이곳 컴포넌트에만 적용이 되어
<Nested />는 스타일없는 p만 나오게 된다. -->