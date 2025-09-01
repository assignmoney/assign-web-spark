import type { PageServerLoad } from './$types';

async function getOrderCompletion(id: string) {
	return {
		slug: id,
		title: 'Story Book',
		fulfilled: true,
		type: 'download' as 'download' | 'redirect' | 'instructions',
		downloadUrl: '/files/story-book.pdf',
		redirectUrl: 'https://example.com/welcome',
		instructions: 'Join our WhatsApp group here: https://chat.whatsapp.com/abc123'
	};
}

export const load: PageServerLoad = async ({ params }) => {
	const order = await getOrderCompletion(params.id);

	if (!order.fulfilled) {
		return { order, pending: true };
	}

	return { order, pending: false };
};
