import type { PageServerLoad } from './$types';

async function getPaymentItem(id: string) {
	return {
		slug: id,
		title: 'Buy Book',
		amount: 9.99,
		virtualAccount: {
			bank: 'First Virtual Bank',
			accountNumber: '123-456-789',
			accountName: 'Buyer A.'
		}
	};
}

export const load: PageServerLoad = async ({ params }) => {
	const item = await getPaymentItem(params.id);
	return { item };
};
