<script lang="ts">
  import { notifications, type Notification } from "$lib/stores/notification";
  import { fly } from "svelte/transition";
  import { onDestroy } from "svelte";

  let items: Notification[] = [];
  const unsubscribe = notifications.subscribe((val) => (items = val));

  // cleanup
  onDestroy(unsubscribe);
</script>

<div
  class="w-full flex justify-center md:justify-end fixed top-4 right-0 md:right-4 space-y-2 z-50"
>
  {#each items as n (n.id)}
    <div
      in:fly={{ x: 100, duration: 200 }}
      out:fly={{ x: 100, duration: 200 }}
      class="w-[95%] md:w-70 px-4 py-2 rounded-lg shadow text-white text-sm font-medium
        {n.type === 'error' ? 'bg-red-500/90' : 'bg-gray-800/90'}"
    >
      {n.message}
    </div>
  {/each}
</div>
