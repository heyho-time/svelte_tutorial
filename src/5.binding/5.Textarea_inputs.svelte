<script>
	// import { marked } from 'marked';
	let value = `Some words are *italic*, some are **bold**`;
</script>

<!-- {@html marked(value)} -->
<!-- 마크다운 파싱 라이브러리. 여긴 없어서 에러남..
    text input과 비슷하게 동작한다.
-->

<textarea bind:value={value}></textarea>

<style>
	textarea { width: 100%; height: 200px; }
</style>
