<script lang="ts">
  export let file: File | null = null;
  export let isDragging: boolean = false;
  export let id: string = "";
  export let accept: string = "image/*";

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    isDragging = false;
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      file = event.dataTransfer.files[0];
    }
  }

  function handleBrowse(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      file = target.files[0];
    }
  }

  let input: HTMLInputElement;
  function handleClick() {
    input?.click();
  }

  function clearFile() {
    file = null;
    input.value = "";
  }
</script>

<div class="flex flex-col items-center justify-center w-full">
  <!-- Dropzone -->
  <div
    class={`w-full flex flex-col items-center justify-center rounded-xl border-2 border-dashed cursor-pointer transition 
            ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"} p-6`}
    on:dragover|preventDefault={() => (isDragging = true)}
    on:dragleave|preventDefault={() => (isDragging = false)}
    on:drop={handleDrop}
    on:click={handleClick}
    on:keydown={() => {}}
    tabindex="0"
    role="button"
  >
    <input
      type="file"
      class="hidden"
      on:change={handleBrowse}
      {id}
      {accept}
      bind:this={input}
    />
    <div class="flex flex-col items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-12 text-primary"
      >
        <path
          fill-rule="evenodd"
          d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
          clip-rule="evenodd"
        />
      </svg>

      <p class="text-gray-600 text-sm font-medium">Browse Files to upload</p>
    </div>
  </div>

  <!-- File Info -->
  {#if file}
    <div
      class="mt-3 w-full flex items-center justify-between rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm bg-gray-50"
    >
      <div class="flex items-center gap-3 w-full">
        {#if file.type.startsWith("image/")}
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            class="h-12 w-12 object-cover rounded"
          />
        {/if}
        <span class="truncate">{file.name}</span>
      </div>
      <button
        class="text-red-500 hover:text-red-700 cursor-pointer"
        on:click={clearFile}
        aria-label="Remove file"
      >
        ✕
      </button>
    </div>
  {/if}
</div>
