<script>
	import { count } from './store.js';
</script>

<h1>The count is {$count}</h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>


<!-- 개체가 subscribe 메서드를 올바르게 구현하는 한 저장소입니다. 
    그 이상은 무엇이든 됩니다. 따라서 도메인별 논리를 사용하여 
    사용자 지정 저장소를 만드는 것은 매우 쉽습니다.

예를 들어 이전 예제의 카운트 저장소에는 증가, 감소 및 재설정 메서드가 포함될 수 있으며
집합 및 업데이트 노출을 피할 수 있습니다. -->