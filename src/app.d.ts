import type { DefaultSession } from '@auth/core/types';
import type { PrismaClient } from '@prisma/client';

declare global {
	namespace App {
		interface Locals {
			prisma: PrismaClient;
		}
		interface PageData {}

		// interface Error {}
		// interface Platform {}
	}
}

declare module '@auth/core/types' {
	interface Session {
		user: {
			id: number;
		} & DefaultSession['user'];
	}
}

export {};
