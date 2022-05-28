<script>
	import Keypad from '../Keypad.svelte';

	let pin;
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

	function handleSubmit() {
		alert(`submitted ${pin}`);
	}
</script>

<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>

<Keypad bind:value={pin} on:submit={handleSubmit}/>

<!-- DOM 요소의 속성에 바인딩할 수 있는 것처럼 
    구성 요소 props에 바인딩할 수 있습니다. 
    예를 들어, 이 <Keypad> 구성 요소의 value prop을 마치 
        form element인 것처럼 바인딩할 수 있습니다. -->