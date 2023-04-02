<script lang="ts">
  import RoomsList from "./components/RoomsList.svelte";
  import TextAreaMsg from "./components/TextAreaMsg.svelte";
  import WorkspaceList from "./components/WorkspaceList.svelte";
  import TailwindCss from "./TailwindCSS.svelte";
</script>

<main
  class="w-full container border-2 border-solid border-gray-700 h-full overflow-hidden flex"
>
  <TailwindCss />
  <WorkspaceList />
  <RoomsList />
  <TextAreaMsg />
</main>

<style>
</style>
