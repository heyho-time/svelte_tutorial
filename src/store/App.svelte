<script>
    import Parent from './Parent.svelte'
    import {storeName} from './store.js'

    let name ='harry'
    // console.log($storeName) 
    // 데이터가 나온다.(hi)
    // auto subscription자동구독 이라고 한다.

    $storeName = name
</script>

<h1>hello {name}</h1>
<!-- <Parent name = {name} /> -->
<Parent />