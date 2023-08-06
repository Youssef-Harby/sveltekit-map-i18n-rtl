<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import CesiumMap from '$lib/CesiumMap.svelte';
	import Map from '$lib/Map.svelte';
	import { onMount } from 'svelte';

	console.info($LL.log({ fileName: '+page.svelte' }));

	let spectators = 0;
	let showCesium = true; // Reactive variable to toggle between Map and CesiumMap

	onMount(() => {
		const interval = setInterval(updateSpectatorCount, 2_000);

		return () => clearInterval(interval);
	});

	const updateSpectatorCount = async () => {
		const response = await fetch(
			'/api/spectators?' + new URLSearchParams({ oldSpectators: spectators.toString() }).toString()
		);
		const result = await response.json();
		spectators = result.spectators;
	};

	const day = new Date('2023-08-01');

	const toggleMap = () => {
		showCesium = !showCesium;
	};
</script>

<h2>
	{$LL.welcome({ year: 2023 })}
</h2>

<h3>
	{$LL.summit.schedule(day)}
</h3>

<div class="spectators">
	{$LL.spectators(spectators)}
</div>

<button on:click={toggleMap}>
	{showCesium ? 'Switch to Map' : 'Switch to CesiumMap'}
</button>

{#if showCesium}
	<CesiumMap />
{:else}
	<Map />
{/if}
