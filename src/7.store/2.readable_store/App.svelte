<script>
	import { time } from './store.js';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1>The time is {formatter.format($time)}</h1>


<!-- 
모든 저장소를 참조하는 사람이 모든 저장소에 쓸 수 있는 것은 아닙니다.
 예를 들어, 마우스 위치나 사용자의 지리적 위치를 나타내는 store가 있을 수 있으며
 '외부'에서 이러한 값을 설정할 수 있다는 것은 의미가 없습니다. 그런 경우를 위해 읽을 수 있는 store가 있습니다.

 readable에 대한 첫 번째 인수는 초기 값이며, 
 아직 없는 경우 null이거나 정의되지 않을 수 있습니다. 
 두 번째 인수는 집합 콜백을 사용하고 중지 함수를 반환하는 시작 함수입니다. 
 store가 첫 번째 구독자를 얻을 때 시작 함수가 호출됩니다. 
 stop은 마지막 구독자가 구독을 취소할 때 호출됩니다.
-->