<script lang="ts">
  import RoomsList from "./components/RoomsList.svelte";
  import Socket from "./components/Socket.svelte";
  import TextAreaMsg from "./components/TextAreaMsg.svelte";
  import UserInfo from "./components/UserInfo.svelte";
  import WorkspaceList from "./components/WorkspaceList.svelte";
  import TailwindCss from "./TailwindCSS.svelte";
</script>

<TailwindCss />
<header>
  <div class="flex">
    <UserInfo />
  </div>
</header>
<main
  class=" container border-2 border-solid border-gray-700 h-full overflow-hidden flex flex-col"
>
  <div class="flex flex-1">
    <Socket/>
    <WorkspaceList />
    <RoomsList />
    <TextAreaMsg />
  </div>
</main>

<style>
</style>
