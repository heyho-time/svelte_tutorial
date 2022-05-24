<script>
	let count = 0;

	function incrementCount() {
		count += 1;
	}
</script>

<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>


<!-- Svelte의 핵심은 이벤트에 대한 응답과 같이 DOM을 애플리케이션 상태와 동기화하기 위한
     강력한 반응성 시스템입니다. 
    
    Svelte는 구성 요소의 상태가 변경되면 DOM을 자동으로 업데이트합니다. 
    종종 구성 요소 상태의 일부는 다른 부분(예: a 및 a fullname에서 파생됨 )에서 계산되어야 하고 
    변경될 때마다 다시 계산해야 합니다.

-->