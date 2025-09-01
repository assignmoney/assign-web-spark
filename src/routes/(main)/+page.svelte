<script lang="ts">
  type Opt = { key: string; label: string; emoji: string; desc: string };
  const options: Opt[] = [
    {
      key: "physical",
      label: "Physical Goods",
      emoji: "📦",
      desc: "Deliver tangible items",
    },
    {
      key: "digital",
      label: "Digital Goods",
      emoji: "💾",
      desc: "Files, codes, licenses",
    },
    {
      key: "services",
      label: "Services",
      emoji: "🧰",
      desc: "Your time or expertise",
    },
    { key: "other", label: "Other", emoji: "✨", desc: "Anything else" },
  ];

  const linkFor = (k: string) => `/sell/${k}`;
</script>

<svelte:head>
  <title>What do you want to sell? - Assign</title>
  <meta name="description" content="Create a simple payment link. Get paid in stablecoins." />
</svelte:head>

<section class="text-center space-y-4">
  <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
    What do you want to sell?
  </h1>
  <p class="text-gray-600">
    Create a simple payment link. Get paid in stablecoins.
  </p>
</section>

<section class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
  {#each options as o}
    <a
      href={linkFor(o.key)}
      class="group rounded-2xl border border-gray-300 bg-white p-5 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900/10"
      aria-label={`Start selling: ${o.label}`}
    >
      <div class="flex items-start gap-3">
        <div class="text-2xl" aria-hidden="true">{o.emoji}</div>
        <div>
          <h2 class="font-semibold">{o.label}</h2>
          <p class="text-sm text-gray-600">{o.desc}</p>
        </div>
      </div>
      <div
        class="mt-4 inline-flex items-center gap-2 text-sm text-gray-700 group-hover:translate-x-0.5 transition"
      >
        Start with {o.label} <span aria-hidden="true">→</span>
      </div>
    </a>
  {/each}
</section>

<section class="mt-10">
  <a
    href="/sell"
    class="button"
  >
    Skip — just make a link
  </a>
</section>
