import type { DefaultSession } from '@auth/core/types';
import type { PrismaClient } from '@prisma/client';
import type { Session } from '@auth/core/types';

declare global {
	namespace App {
		interface Locals {
			prisma: PrismaClient;
			session: Session;
		}
		interface PageData {}

		// interface Error {}
		// interface Platform {}
	}
}

declare module '@auth/core/types' {
	interface Session {
		user: {
			id: string;
		} & DefaultSession['user'];
	}
}

export {};
