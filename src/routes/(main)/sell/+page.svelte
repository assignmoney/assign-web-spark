<script lang="ts">
  import FileUpload from "$lib/components/FileUpload.svelte";
  import Dropdown from "$lib/components/Dropdown.svelte";

  let type: string = "Place holder";
  let selectedNetwork: string | null = null;
  const networks = [
    { value: "ethereum", label: "Ethereum" },
    { value: "binance-smart-chain", label: "Binance Smart Chain" },
    { value: "polygon", label: "Polygon" },
  ];
</script>

<svelte:head>
  <title>Create a payment link - Assign</title>
  <meta
    name="description"
    content="Create a simple payment link. Get paid in stablecoins."
  />
</svelte:head>

<section class="space-y-6">
  <h1 class="text-2xl font-bold tracking-tight">Create a payment link</h1>
  {#if type}
    <p class="text-gray-600 text-sm">
      You’re creating a link for <span class="font-medium">{type}</span>.
    </p>
  {/if}

  <div class="space-y-4 max-w-md">
    <div>
      <label for="title" class="label">Title</label>
      <input
        id="title"
        type="text"
        required
        class="input"
        placeholder="e.g. Logo design service"
      />
    </div>

    <div>
      <label for="product-image" class="label">Product Image</label>
      <FileUpload id="product-image" />
    </div>

    <div>
      <label for="amount" class="label">Amount (USD)</label>
      <input
        id="amount"
        type="number"
        required
        min="1"
        step="any"
        class="input"
        placeholder="50"
      />
    </div>

    <div>
      <label for="units" class="label">Units</label>
      <input
        id="units"
        type="number"
        required
        min="1"
        step="any"
        class="input"
        placeholder="1"
      />
    </div>

    <div>
      <label for="description" class="label">Description</label>
      <textarea id="description" rows="3" class="input" placeholder="Optional"
      ></textarea>
    </div>

    <div>
      <label for="wallet-address" class="label">Wallet Address</label>
      <input
        id="wallet-address"
        type="text"
        class="input"
        placeholder="Address"
      />
    </div>

    <div>
      <label for="wallet-network" class="label">Wallet Network</label>
      <Dropdown
        id="wallet-network"
        bind:selected={selectedNetwork}
        options={networks}
      />
    </div>

    <div>
      <label for="email" class="label">Email <span class="text-gray-500">(optional, used for payment notifications)</span></label>
      <input
        id="email"
        type="email"
        class="input"
        placeholder="Email address"
      />
    </div>

    <button class="w-full button"> Generate payment link </button>
  </div>
</section>
