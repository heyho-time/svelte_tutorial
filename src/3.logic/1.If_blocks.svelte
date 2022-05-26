<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>


<!-- <button on:click={toggle}>
	Log out
</button>

<button on:click={toggle}>
	Log in
</button> -->


<!-- html은 로직을 표현할 수 없다.
svelte는 가능하다. -->

{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{/if}

{#if !user.loggedIn}
	<button on:click={toggle}>
		Log in
	</button>
{/if}