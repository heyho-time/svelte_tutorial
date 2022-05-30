<script>
    import {onMount} from 'svelte';
	
    let photos = [];

    onMount(async ()=> {
        const res = await fetch(`/tutorial/api/album`);
        photos = await res.json();
    });
</script>

<h1>Photo album</h1>

<div class="photos">
	{#each photos as photo}
		<figure>
			<img src={photo.thumbnailUrl} alt={photo.title}>
			<figcaption>{photo.title}</figcaption>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>

<style>
	.photos {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}

	figure, img {
		width: 100%;
		margin: 0;
	}
</style>

<!-- 가장 자주 사용하게 될 onMount는 구성 요소가 DOM에 처음 렌더링된 후 실행되는 onMount입니다. -->

<!-- 서버 측 렌더링(SSR) 때문에 <script>의 최상위 레벨이 아닌 onMount에
     가져오기를 넣는 것이 좋습니다. onDestroy를 제외하고 수명 주기 기능은 
     SSR 동안 실행되지 않습니다. 즉, 구성 요소가 DOM에 마운트된 후 느리게
      로드되어야 하는 데이터를 가져오는 것을 피할 수 있습니다. 
    
      콜백이 setTimeout이 아닌 구성 요소 인스턴스에 바인딩되도록 구성 요소가 초기화되는 동안
       수명 주기 함수를 호출해야 합니다.

onMount 콜백이 함수를 반환하면 구성 요소가 파괴될 때 해당 함수가 호출됩니다.
    -->