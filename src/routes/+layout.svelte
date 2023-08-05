<script lang="ts">
	import { page } from '$app/stores';
	import LL, { setLocale } from '$i18n/i18n-svelte';
	import Header from '$lib/Header.svelte';
	import HeadHrefLangs from '$lib/HeadHrefLangs.svelte';
	import type { LayoutData } from './$types';
	import '@fontsource/cairo';
	// import '../styles/global.scss';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	export let data: LayoutData;
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);

	console.info($LL.log({ fileName: '+layout.svelte' }));
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
</script>

<Modal />
<Header />

<main>
	<slot />
</main>

<svelte:head>
	<title>{$page.data.title || 'typesafe-i18n'}</title>
	<HeadHrefLangs />
</svelte:head>
