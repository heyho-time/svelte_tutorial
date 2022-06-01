<script>
    import Child from './Child.svelte'

    // export let name
</script>

<div>Parent</div>
<!-- <Child name={name} /> -->
<Child />


<!-- parent에서는 name이 쓰이지않고 전달하는 역할만 함. 이럴때 store가 쓰인다. -->