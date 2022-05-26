<script>
	import Outer from '../Outer.svelte';

	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<Outer on:message={handleMessage}/>

<!-- DOM 이벤트와 달리 구성 요소 이벤트는 버블링되지 않습니다. 
    일부 깊게 중첩된 구성 요소에서 이벤트를 수신하려면 
    중간 구성 요소가 이벤트를 전달해야 합니다. -->
