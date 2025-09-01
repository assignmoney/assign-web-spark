<script lang="ts">
  import { fade, scale, fly } from "svelte/transition";
  import { browser } from "$app/environment";

  export let options: { value: string; label: string }[] = [];
  export let selected: string | null = null;
  export let placeholder: string = "Select an option";
  export let id: string = "";

  let open = false;
  let search = "";

  function selectOption(value: string) {
    selected = value;
    open = false;
    const event = new CustomEvent("change", { detail: value });
    dispatchEvent(event);
  }

  $: filtered = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  // Lock/unlock scroll when overlay is open
  $: if (browser) document.body.style.overflow = open ? "hidden" : "";

  function close() {
    open = false;
  }
</script>

<div class="relative">
  <!-- Trigger -->
  <button
    type="button"
    class="w-full flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2.5 bg-white shadow-sm cursor-pointer 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition 
           hover:shadow-lg active:scale-[0.98] user-select-none"
    on:click={() => (open = !open)}
    {id}
  >
    <span class="truncate text-gray-700 font-medium">
      {#if selected}
        {options.find((o) => o.value === selected)?.label}
      {:else}
        <span class="text-gray-400">{placeholder}</span>
      {/if}
    </span>

    <svg
      class="w-5 h-5 text-gray-500 transition-transform duration-300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      style="transform: rotate({open ? 180 : 0}deg)"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
</div>

<!-- Overlay -->
{#if open}
  <div
    class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center md:overflow-y-auto"
    on:click={close}
    on:keydown={() => {}}
    role="button"
    tabindex="0"
    transition:fade={{ duration: 200 }}
  >
    <!-- Desktop modal -->
    <div
      class="hidden md:flex flex-col bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-hidden border border-gray-200"
      on:click|stopPropagation
      on:keydown={() => {}}
      role="dialog"
      tabindex="0"
      transition:scale={{ duration: 250, start: 0.95 }}
    >
      <div class="p-3 border-b border-gray-300 bg-gray-50">
        <input
          type="text"
          placeholder="Search..."
          bind:value={search}
          class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
      <ul class="overflow-y-auto flex-1 divide-y divide-gray-100">
        {#each filtered as option}
          <li>
            <button
              type="button"
              class="w-full text-left px-4 py-2.5 cursor-pointer hover:bg-blue-50 active:bg-blue-100 transition font-medium text-gray-700"
              on:click={() => selectOption(option.value)}
            >
              {option.label}
            </button>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Mobile bottom sheet -->
    <div
      class="md:hidden fixed bottom-0 left-0 right-0 h-2/3 bg-white rounded-t-2xl shadow-xl flex flex-col border-t border-gray-200"
      on:click|stopPropagation
      on:keydown={() => {}}
      role="dialog"
      tabindex="0"
      transition:fly={{ y: 300, duration: 250 }}
    >
      <div class="p-3 border-b border-gray-300 bg-gray-50">
        <input
          type="text"
          placeholder="Search..."
          bind:value={search}
          class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
      <ul class="overflow-y-auto flex-1 divide-y divide-gray-100">
        {#each filtered as option}
          <button
            type="button"
            class="w-full text-left px-4 py-2.5 cursor-pointer hover:bg-blue-50 active:bg-blue-100 transition font-medium text-gray-700"
            on:click={() => selectOption(option.value)}
          >
            {option.label}
          </button>
        {/each}
      </ul>
    </div>
  </div>
{/if}
