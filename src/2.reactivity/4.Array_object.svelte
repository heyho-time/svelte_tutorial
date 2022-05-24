
<script>
	let numbers = [1, 2, 3, 4];

	function addNumber() {
		// numbers.push(numbers.length + 1);
        // numbers = numbers;
        // 스벨트의 반응성은 할당에 의해 트리거되기 때문에, 
        // 배열에서 push 혹은 splice 와 같은 메소드를 사용하면 자동으로 업데이트를 발생시키지 않습니다.
        // 다시한번 할당해줘야 반영해줌..
        // 이게 번거로우니 array push, slice이런거 하지말고 spread연산자로 재배정을 해라.
        numbers = [...numbers, numbers.length + 1];

        // numbers[numbers.length] = numbers.length + 1; 이것도 똑같다.
        // 하지만 이와 같은 참조에 대한 간접 할당은...
        // const foo = obj.foo;
        // foo.bar = 'baz';
        // 위 경우 obj = obj 가 존재하지 않으면, obj.foo.bar 에 대한 반응성은 작동하지 않습니다.
        // or
        // function quox(thing) {
	    // thing.foo.bar = 'baz';
        // }
        // quox(obj);
        // 간단한 룰은 변수가 업데이트 됐을때 이름이 반드시 왼쪽에 나와야 한다는 것.
        // obj = obj. 재할당 해주지 않으면 모른다.

        
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>



<!-- 스벨트는 배정에 대해만 반영.
자동으로 업데이트 되지 않는다. -->