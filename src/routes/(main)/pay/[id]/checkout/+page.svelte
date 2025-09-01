<script lang="ts">
  export let data: {
    item: {
      slug: string;
      title: string;
      amount: number;
      virtualAccount: {
        bank: string;
        accountNumber: string;
        accountName: string;
      };
    };
  };
</script>

<div class="p-6">
  <div>
    <!-- Title -->
    <h1 class="text-2xl font-bold mb-4 text-gray-900">
      Checkout: {data.item.title}
    </h1>

    <!-- Amount -->
    <p class="mb-4 text-gray-700">
      Please transfer
      <span class="font-semibold text-green-600 text-lg">
        ${data.item.amount}
      </span>
      to the following virtual account:
    </p>

    <!-- Virtual Account Box -->
    <div
      class="bg-gray-50 p-4 rounded-lg mb-6 space-y-2 border border-gray-200"
    >
      <p>
        <span class="font-semibold text-gray-800">Bank:</span>
        <span class="text-gray-700">{data.item.virtualAccount.bank}</span>
      </p>
      <p>
        <span class="font-semibold text-gray-800">Account Number:</span>
        <span class="text-gray-700 font-mono tracking-wide"
          >{data.item.virtualAccount.accountNumber}</span
        >
      </p>
      <p>
        <span class="font-semibold text-gray-800">Account Name:</span>
        <span class="text-gray-700">{data.item.virtualAccount.accountName}</span
        >
      </p>
    </div>

    <!-- Instructions -->
    <p class="mb-6 text-gray-600 leading-relaxed">
      Transfer the amount to this account. Once we confirm payment, your order
      will be complete.
    </p>

    <div>
      <button class="w-full button"> I've Paid </button>
    </div>
  </div>
</div>
