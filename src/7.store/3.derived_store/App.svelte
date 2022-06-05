<script>
	import { time, elapsed } from './store.js';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1>The time is {formatter.format($time)}</h1>

<p>
	This page has been open for
	{$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
</p>

<!-- 값이 파생된 하나 이상의 다른 store 값을 기반으로 하는 상점을 작성할 수 있습니다. 
    이전 예제를 기반으로 페이지가 열린 시간을 파생시키는 저장소를 만들 수 있습니다. 
    여러 입력에서 저장소를 파생하고 값을 반환하는 대신 명시적으로 값을 설정할 수 있습니다(비동기적으로 값을 파생하는 데 유용함). 
-->