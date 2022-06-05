<script>
	import { writable } from 'svelte/store';
    import { spring } from 'svelte/motion';

    // let coords = writable({ x: 50, y: 50 });
	// let size = writable(10);

    // let coords = spring({ x: 50, y: 50 });
    let coords = spring({ x: 50, y: 50 },{
        stiffness: 0.1,
	    damping: 0.25
    });  //초기값을 지정해줌
    
    let size = spring(10); 

</script>

<div style="position: absolute; right: 1em;">
	<label>
		<h3>stiffness ({coords.stiffness})</h3>
		<input bind:value={coords.stiffness} type="range" min="0" max="1" step="0.01">
	</label>

	<label>
		<h3>damping ({coords.damping})</h3>
		<input bind:value={coords.damping} type="range" min="0" max="1" step="0.01">
	</label>
</div>

<svg
	on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY })}"
	on:mousedown="{() => size.set(30)}"
	on:mouseup="{() => size.set(10)}"
>
	<circle cx={$coords.x} cy={$coords.y} r={$size}/>
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		margin: -8px;
	}
	circle {
		fill: #ff3e00;
	}
</style>


<!-- 스프링 함수는 자주 변경되는 값에 대해 더 잘 작동하는 트위닝의 대안입니다.
이 예제에는 두 개의 상점이 있습니다. 
하나는 원의 좌표를 나타내고 다른 하나는 크기를 나타냅니다. 
스프링으로 변환해 보겠습니다. -->