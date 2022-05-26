<script>
	import Inner from '../Inner.svelte';

	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<Inner on:messag={handleMessage}/>


<!-- Inner 컴포넌트를 가져와 뿌리는데 그 안엔 btn이 있다.
click시 sayHello 함수가 실행 -> dispatch ->text를 보낼 수 있다. --> 