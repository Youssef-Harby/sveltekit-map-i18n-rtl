<script lang="ts">
	import { base } from '$app/paths';
	import { locale } from '$i18n/i18n-svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- <header>
	<a href="{base}/{$locale}">
		<h1>typesafe-i18n</h1>
	</a>

	<LocaleSwitcher />
</header> -->

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LocaleSwitcher />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
