<script>
	import { name, greeting } from './store.js';
</script>

<h1>{$greeting}</h1>
<input bind:value={$name}>

<button on:click="{() => $name += '!'}">
	Add exclamation mark!
</button>

<!-- 저장소가 쓰기 가능한 경우(즉, set 메서드가 있는 경우) 
    로컬 구성 요소 상태에 바인딩할 수 있는 것처럼 해당 값에 바인딩할
     수 있습니다.

이 예에는 쓰기 가능한 store 이름과 파생된 store 인사말이 있습니다. 
<input> 요소를 업데이트합니다. 

이제 입력 값을 변경하면 이름과 모든 종속 항목이 업데이트됩니다.

구성 요소 내부에 값을 저장하기 위해 직접 할당할 수도 있습니다. <button> 요소 추가:

    $name += '!' 같다. <-> name.set($name + '!').
-->