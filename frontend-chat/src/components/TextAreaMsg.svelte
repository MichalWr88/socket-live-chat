<script lang="ts">
  // your script goes here
  import { format } from "date-fns";
  let msg = "";
  const onWriteMsg = (e: KeyboardEvent) => {
    if (e.code === "Enter" && !e.shiftKey) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      // alert("send msg");
      msg = "";
      msg = msg.trim()
      console.log(msg);
      return;
    }

    console.log(e);
  };
</script>

<div class=" flex-1 bg-gray-300 p-3 flex flex-col">
  <div class="flex-1 flex flex-col i">
    <h6 class="uppercase bg-slate-600 text-gray-100 p-2">history msg</h6>

    <div class="bg-gray-100 flex-1 p-4 flex-col justify-end">
      <div class="flex flex-col my-6">
        <div class="flex flex-wrap">
          <h6 class="font-bold px-2">Michal Jakis</h6>
          <span class="px-2">{format(new Date(), "EEEE")}</span>
          <span>{new Date().toLocaleString("pl-PL")}</span>
        </div>
        <div class="text-left ml-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
          malesuada rhoncus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Integer condimentum mauris
          eu risus mollis euismod. Fusce sollicitudin tortor velit, id consequat
          ligula sagittis eu. Fusce sed dolor vel dui consequat elementum quis a
          risus. Ut ac sollicitudin lorem, et dictum nunc. Aenean imperdiet
          purus non fermentum rutrum.
        </div>
      </div>
      <div class="flex flex-col my-6">
        <div class="flex flex-wrap">
          <h6 class="font-bold px-2">Michal Jakis</h6>
          <span class="px-2">{format(new Date(), "EEEE")}</span>
          <span>{new Date().toLocaleString("pl-PL")}</span>
        </div>
        <div class="text-left ml-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
          malesuada rhoncus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Integer condimentum mauris
          eu risus mollis euismod. Fusce sollicitudin tortor velit, id consequat
          ligula sagittis eu. Fusce sed dolor vel dui consequat elementum quis a
          risus. Ut ac sollicitudin lorem, et dictum nunc. Aenean imperdiet
          purus non fermentum rutrum.
        </div>
      </div>
    </div>
  </div>

  <div class="w-full flex flex-wrap items-center my-2">
    <textarea
      class="flex-1 rounded-2xl border-2 border-blue-600 h-full p-2"
      name=""
      id=""
      cols="30"
      rows="2"
      bind:value={msg}
      on:keyup={onWriteMsg}
    />
    <button class="p-2 border-2 border-solid border-blue-400 mx-2 w-20"
      >send</button
    >
    <small class="flex-1 basis-full">shift + enter = next line</small>
  </div>
</div>

<style>
  textarea {
    resize: none;
  }
  /* your styles go here */
</style>
