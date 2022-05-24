<script>
	let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<!-- <p>{string}</p> -->
<!-- 위의 string 그대로 출력. -->

<p>{@html string}</p>
<!-- strong이 적용된 string 출력. -->