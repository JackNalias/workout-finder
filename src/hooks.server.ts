import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import type { Handle } from '@sveltejs/kit';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';

const prisma = new PrismaClient();

export const handle = sequence(
	SvelteKitAuth({
		providers: [
			Google({
				clientId: GOOGLE_CLIENT_ID,
				clientSecret: GOOGLE_CLIENT_SECRET
			})
		],
		callbacks: {
			session: ({ session, user }) => {
				if (session.user) {
					session.user.id = user.id;
				}
				return Promise.resolve(session);
			}
		},
		adapter: PrismaAdapter(prisma)
	}) satisfies Handle,
	({ event, resolve }) => {
		event.locals.prisma = prisma;
		return resolve(event);
	}
);
