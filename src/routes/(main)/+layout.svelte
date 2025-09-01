<div class="min-h-screen bg-gray-50 text-gray-900">
  <header class="sticky top-0 z-10 border-b border-gray-300 bg-white/50 backdrop-blur">
    <div class="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 font-semibold">
        <span
          class="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gray-900 text-white"
          >≋</span
        >
        <span class="hidden sm:inline">Assign Money Flows</span>
        <span class="sr-only">Home</span>
      </a>
      <nav class="text-sm">
        <a href="/sell" class="secondary-button"
          >Create link</a
        >
      </nav>
    </div>
  </header>

  <main class="container min-h-[85vh] md:min-h-[80vh] ">
    <slot />
  </main>

  <footer class="border-t border-gray-300">
    <div class="mx-auto max-w-3xl px-4 py-6 text-xs text-gray-500">
      Built for StableAfrica Hackathon • Minimal, fast, no login.
    </div>
  </footer>
</div>
