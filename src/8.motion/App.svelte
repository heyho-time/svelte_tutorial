<script>
	// import { writable } from 'svelte/store';
	// const progress = writable(0);

	import { tweened } from 'svelte/motion';

	// const progress = tweened(0);
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

</script>

<progress value={$progress}></progress>

<button on:click="{() => progress.set(0)}">
	0%
</button>

<button on:click="{() => progress.set(0.25)}">
	25%
</button>

<button on:click="{() => progress.set(0.5)}">
	50%
</button>

<button on:click="{() => progress.set(0.75)}">
	75%
</button>

<button on:click="{() => progress.set(1)}">
	100%
</button>

<style>
	progress {
		display: block;
		width: 80%;
		accent-color: pink;
	}
</style>


<!-- 

값을 설정하고 DOM 업데이트를 자동으로 지켜보는 것은 멋진 일입니다. 
더 멋진 것이 무엇인지 아십니까? 이러한 가치를 트위닝합니다. 
Svelte에는 애니메이션을 사용하여 변경 사항을 전달하는 매끄러운 사용자 인터페이스를 구축하는 데 도움이 되는 도구가 포함되어 있습니다.
진행률 저장소를 트위닝된 값으로 변경하여 시작해보겠습니다. 

버튼을 클릭하면 진행률 표시줄이 새 값에 맞춰 움직입니다. 하지만 약간 로봇적이고 불만족스럽습니다. 여유 기능을 추가해야 합니다.

svelte/easing 모듈은 Penner 이징 방정식을 포함하거나 
p와 t가 모두 0과 1 사이의 값인 고유한 p => t 함수를 제공할 수 있습니다.


The full set of options available to tweened:
delay — milliseconds before the tween starts
duration — either the duration of the tween in milliseconds, or a (from, to) => milliseconds function allowing you to (e.g.) specify longer tweens for larger changes in value
easing — a p => t function
interpolate — a custom (from, to) => t => value function for interpolating between arbitrary values. By default, Svelte will interpolate between numbers, dates, and identically-shaped arrays and objects (as long as they only contain numbers and dates or other valid arrays and objects). If you want to interpolate (for example) colour strings or transformation matrices, supply a custom interpolator


이 옵션을 두 번째 인수로 progress.set 및 progress.update에 전달할 수도 있습니다. 
이 경우 기본값을 재정의합니다. set 및 update 메서드는 모두 트윈이 완료될 때 해결되는 약속을 반환합니다.
-->