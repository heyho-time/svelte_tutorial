<script>
	let a = 1;
	let b = 2;
</script>

<label>
	<input type=number bind:value={a} min=0 max=10>
	<input type=range bind:value={a} min=0 max=10>
</label>

<label>
	<input type=number bind:value={b} min=0 max=10>
	<input type=range bind:value={b} min=0 max=10>
</label>

<p>{a} + {b} = {a + b}</p>

<style>
	label { display: flex }
	input, p { margin: 6px }
</style>

<!-- DOM에서 모든 것은 문자열입니다. 
    숫자 입력(type="number" 및 type="range")을 처리할 때는 도움이 되지 않습니다. 
    이는 사용하기 전에 input.value를 강제 변환해야 한다는 것을 의미하기 때문입니다.

bind:value를 사용하면 Svelte가 이를 처리합니다. -->