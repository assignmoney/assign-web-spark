import type { PageServerLoad } from './$types';

async function getPaymentItem(id: string) {
	return {
		slug: id,
		title: 'Buy this book',
		description: 'A thrilling novel about the adventures of a young hero.',
		amount: 9.99,
		unitsLeft: 12,
		sellerWallet: '0x1234...ABCD',
		network: 'Ethereum',
		image: 'https://placehold.co/400x250'
	};
}

export const load: PageServerLoad = async ({ params }) => {
	const item = await getPaymentItem(params.id);
	return { item };
};
