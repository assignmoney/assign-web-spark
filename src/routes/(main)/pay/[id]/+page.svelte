<script lang="ts">
  import { notifications } from "$lib/stores/notification";

  export let data: {
    item: {
      slug: string;
      title: string;
      description: string;
      amount: number;
      unitsLeft: number;
      sellerWallet: string;
      network: string;
      image: string;
    };
  };

  function handlePay() {
    notifications.notify(
      `Paying ${data.item.amount} to ${data.item.sellerWallet} for slug ${data.item.slug}`,
    );
  }
</script>

<div class="md:max-w-2xl md:mx-auto">
  <div class="">
    <!-- Product Image -->
    <div class="relative overflow-hidden rounded-xl">
      <img
        src={data.item.image}
        alt={data.item.title}
        loading="lazy"
        class="w-full aspect-video object-cover"
      />
    </div>

    <!-- Content -->
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-2 text-gray-900">{data.item.title}</h1>
      <p class="text-gray-600 mb-4 leading-relaxed">{data.item.description}</p>

      <!-- Details -->
      <div class="space-y-2 mb-6 text-sm">
        <p>
          <span class="font-semibold text-gray-800">Amount:</span>
          <span
            class="inline-block bg-green-50 text-green-700 text-xs font-medium px-2 py-0.5 rounded ml-1"
          >
            ${data.item.amount}
          </span>
        </p>
        <p>
          <span class="font-semibold text-gray-800">Units left:</span>
          <span
            class="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-0.5 rounded ml-1"
          >
            {data.item.unitsLeft}
          </span>
        </p>
        <p>
          <span class="font-semibold text-gray-800">Seller wallet:</span>
          <span class="text-gray-700">{data.item.sellerWallet}</span>
        </p>
        <p>
          <span class="font-semibold text-gray-800">Network:</span>
          <span class="text-gray-700">{data.item.network}</span>
        </p>
      </div>

      <!-- CTA Button -->
      <button on:click={handlePay} class="w-full button"> Pay for this </button>
    </div>
  </div>
</div>
