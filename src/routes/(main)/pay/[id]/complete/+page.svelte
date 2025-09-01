<script lang="ts">
  export let data: {
    order: {
      slug: string;
      title: string;
      fulfilled: boolean;
      type: "download" | "redirect" | "instructions";
      downloadUrl: string;
      redirectUrl: string;
      instructions: string;
    };
    pending: boolean;
  };

  // Auto-redirect if type === "redirect"
  if (!data.pending && data.order.type === "redirect") {
    window.location.href = data.order.redirectUrl;
  }
</script>

<div class="py-6">
  <div class="p-8 text-center">
    <!-- Title -->
    <h1 class="text-3xl font-extrabold mb-4 text-gray-900">
      Payment Completed 🎉
    </h1>
    <p class="mb-6 text-gray-700">
      Your payment for
      <span class="font-semibold text-blue-600">{data.order.title}</span>
      was successful.
    </p>

    <!-- States -->
    {#if data.pending}
      <div
        class="p-4 bg-yellow-100 text-yellow-800 rounded-lg text-sm border border-yellow-200"
      >
        ⏳ Your payment is still being confirmed.
        <span class="block mt-1 text-xs text-yellow-700"
          >Please refresh this page later.</span
        >
      </div>
    {:else if data.order.type === "download"}
      <a href={data.order.downloadUrl} class="button"> 📥 Download Now </a>
    {:else if data.order.type === "instructions"}
      <div class="p-5 bg-green-50 border border-green-200 rounded-lg text-left">
        <p class="font-semibold text-green-800 mb-2">Next steps:</p>
        <p class="text-gray-700 whitespace-pre-line leading-relaxed">
          {data.order.instructions}
        </p>
      </div>
    {:else if data.order.type === "redirect"}
      <div
        class="p-5 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800"
      >
        Redirecting you to
        <span class="font-mono text-blue-700">{data.order.redirectUrl}</span>...
      </div>
    {/if}
  </div>
</div>
