<script lang="ts">
  let link: string = "https://pay.example.com/inv/9d3f2c4e";
  let feedback = "";
  let timer: number | null = null;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(link);
      showFeedback("✅ Link copied to clipboard");
    } catch {
      showFeedback("⚠️ Couldn't copy — select manually");
    }
  }

  async function shareLink() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Payment Completed",
          text: "Payment was successful. Reference link:",
          url: link,
        });
        showFeedback("✅ Link shared");
      } catch {
        showFeedback("❌ Share canceled");
      }
    } else {
      showFeedback("⚠️ Sharing not supported");
    }
  }

  function showFeedback(msg: string) {
    feedback = msg;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => (feedback = ""), 2500) as unknown as number;
  }
</script>

<div
  class="flex items-center justify-center bg-gray-50 px-4"
>
  <div class="w-full max-w-md">
    <div class="p-8 space-y-6 text-center">
      <!-- icon -->
      <div
        class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8 text-green-600"
        >
          <path
            fill-rule="evenodd"
            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <!-- Title -->
      <h1 class="text-2xl font-bold text-gray-900">Payment Link Created</h1>
      <p class="text-gray-600 text-sm">
        You can copy this link or share it with your customers.
      </p>

      <!-- Link box -->
      <div class="flex items-stretch gap-2">
        <input
          type="url"
          readonly
          value={link}
          title={link}
          class="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none truncate cursor-pointer"
          on:click={(e) => (e.currentTarget as HTMLInputElement).select()}
        />

        <!-- Copy Button -->
        <button
          type="button"
          aria-label="Copy payment link"
          on:click={copyLink}
          class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium bg-white hover:bg-gray-50 active:scale-[0.97] transition cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="w-5 h-5"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </button>

        <!-- Share Button -->
        <button
          type="button"
          aria-label="Share payment link"
          on:click={shareLink}
          class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium bg-white hover:bg-gray-50 active:scale-[0.97] transition cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5"
          >
            <path
              d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z"
            />
          </svg>
        </button>
      </div>

      <!-- Feedback (accessible) -->
      {#if feedback}
        <p class="text-sm text-gray-400 animate-fade-in" aria-live="polite">
          {feedback}
        </p>
      {/if}
    </div>
  </div>
</div>

<style>
  .animate-fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(3px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
