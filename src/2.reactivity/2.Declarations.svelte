

<script>
	let count = 0;
    $: doubled = count * 2;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

<!-- 
이를 위해 반응형 선언 이 있습니다. 

let count = 0;
$: doubled = count * 2;

참조된 값이 변경될 때마다 이 코드를 다시 실행'하는 것으로 해석합니다. 

물론 대신 마크업을 작성할 수 {count * 2}있습니다. 

반응 값을 사용할 필요가 없습니다. 

반응성 값은 여러 번 참조해야 하거나 다른 반응성 값에 의존하는 값이 있는 경우 특히 유용합니다.
-->