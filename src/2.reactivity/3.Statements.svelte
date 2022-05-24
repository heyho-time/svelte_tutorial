<script>
	let count = 0;
    // $: console.log('the count is ' + count);
//     $: {
// 	console.log('the count is ' + count);
// 	alert('I SAID THE COUNT IS ' + count);
// }

$: if (count >= 10) {
	alert('count is dangerously high!');
	count = 9;
}


	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<!-- count값이 바뀔때마다 $절이 실행된다. 
    중괄호로 묶어서 실행도 가능하다.
    if문과 함께 쓸수도 있다.
-->
