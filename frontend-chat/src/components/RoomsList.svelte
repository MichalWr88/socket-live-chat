<script lang="ts">
  interface Room {
    id: string;
    name: String;
  }
  const rooms: Array<Room> = [
    {
      id: "1",
      name: "main",
    },
    {
      id: "2",
      name: "news",
    },
    {
      id: "3",
      name: "random",
    },
    {
      id: "4",
      name: "ui-ux-design",
    },
    {
      id: "5",
      name: "code-review",
    },
    {
      id: "6",
      name: "shared-learn",
    },
  ];
  let activeRoom = 0;

  const selectRoom = (id: number) => {
    activeRoom = id;
  };
</script>

<ul>
  {#each rooms as room, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li
      class={`${activeRoom === i? "font-bold bg-yellow-500":""} list-item cursor-pointer uppercase p-2 border-spacing-1 border-cyan-700 border-2 rounded-2xl my-2 hover:bg-gray-300`}
      on:click={()=>selectRoom(i)}
    >
      {room.name}
    </li>
  {/each}
</ul>

<style>
  /* your styles go here */
</style>
