import type { AstroInstance } from 'astro';
import {Instagram, Mail } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	// title: 'GPP',
	logo: 'logo.jpeg',
	favicon: 'favicon.ico',
	owner: 'Golden Paws',
	profileImage1: 'remie.jpg',
	profileImage2: 'lesley-1.jpg',
	profileImage3: 'lesley-2.jpg',
	socialLinks: [
		{
			name: 'Email',
			url: 'mailto:info@goldenpawsphotography.com',
			icon: Mail,
		} as unknown as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/golden_paws_photography/',
			icon: Instagram,
		} as unknown as SocialLink,
	],
};
