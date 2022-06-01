<script>
	import { onDestroy } from 'svelte';
	import { count } from './store.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let countValue;

	// 1
	// count.subscribe(value => {
	// 	countValue = value;
	// });

	// 2
    // const unsubscribe = count.subscribe(value => {
	// 	countValue = value;
	// })
	// onDestroy(unsubscribe);
</script>

<!-- <h1>The count is {countValue}</h1> -->

<!-- 3 -->
<h1>The count is {$count}</h1>

<Incrementer/>
<Decrementer/>
<Resetter/>


<!-- 

1. 
앱은 작동하지만 버그가 있다.
스토어가 구독되지만 구독은 취소되지 않는다는 것.
구성 요소가 여러번 인스턴스화되고 파괴되면
메모리 누수가 발생한다. 

2.
unsubscribe를 만들어 보자.

3.
구성요소가 여러 저장소를 구독하는 경우 boiler plate를 얻기 시작한다.
store 앞에 $를 붙여 store의 값을 참조할 수 있다.
자동 구독은 구성 요소의 최상위 범위에서 선언된(또는 가져온) 저장소 변수에서만 작동합니다.

마크업 내에서 $count를 사용하는 것에 국한되지 않습니다. 
이벤트 핸들러나 반응 선언과 같이 <script>의 어느 곳에서나 사용할 수 있습니다.

$로 시작하는 모든 이름은 store 값을 참조하는 것으로 간주됩니다. 
사실상 예약어 입니다. 
Svelte는 $ 접두사를 사용하여 변수를 선언하는 것을 방지합니다.
-->