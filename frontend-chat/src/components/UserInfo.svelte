<script>
  import Avatar from "./Avatar.svelte";

  // your script goes here
  import LoginForm from "./LoginForm.svelte";
  let opened = false;
  const toggleLogin = () =>{
    opened = !opened
  }
</script>

<Avatar />
<button on:click={toggleLogin}>log in</button>
{#if opened}
  <LoginForm />
{/if}
<!-- markup (zero or more items) goes here -->

<style>
  /* your styles go here */
</style>
