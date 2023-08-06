<script lang="ts">
	import { onMount } from 'svelte';
	import type { Viewer, GeoJsonDataSource, Cartesian3 } from 'cesium';
	import 'cesium/Build/Cesium/Widgets/widgets.css';
	import * as Cesium from 'cesium';
	import {} from 'cesium';

	let viewer: Viewer;
	let cesiumContainer: HTMLDivElement;

	onMount(async () => {
		window.CESIUM_BASE_URL = 'Cesium/';
		const { Viewer, GeoJsonDataSource } = await import('cesium');
		viewer = new Viewer('cesiumContainer', {
			animation: false,
			baseLayerPicker: true,
			fullscreenButton: false,
			vrButton: false,
			geocoder: false,
			homeButton: false,
			infoBox: true,
			sceneModePicker: true,
			selectionIndicator: false,
			timeline: false,
			navigationHelpButton: false,
			shouldAnimate: true
		});
		// Load GeoJSON from a remote URL and add it to the viewer
		const geoJsonUrl =
			'https://raw.githubusercontent.com/Youssef-Harby/load-reduction-plan-eg/main/data/demo-cairo.geojson'; // Replace with your GeoJSON URL
		const dataSource = await GeoJsonDataSource.load(geoJsonUrl);
		viewer.dataSources.add(dataSource);
		viewer.camera.flyTo({
			destination: Cesium.Cartesian3.fromDegrees(31.2357, 30.0444, 80000), // Longitude, Latitude, Height
			duration: 5 // Duration of the flight in seconds
		});
	});
</script>

<main>
	<div id="cesiumContainer" bind:this={cesiumContainer} />
</main>
