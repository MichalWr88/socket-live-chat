<script lang="ts">
  import { io } from "socket.io-client";
  import type { MainEvents } from "../../../shared/models/socketEvents";
  import { onMount } from 'svelte';

  const socket = io("http://localhost:3000", { query: { user: "test1" } });


  onMount(() => {
    socket.on("connect", () => { 
        console.log("connect")
    });
    socket.on<MainEvents>("list", (resp) => { 
        console.log("resp",resp)
    });

	});

</script>

<!-- markup (zero or more items) goes here -->

<style>
  /* your styles go here */
</style>
