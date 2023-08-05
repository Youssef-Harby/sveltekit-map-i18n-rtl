<script lang="ts">
	import { onMount } from 'svelte';
	import maplibregl, { Map, NavigationControl, Marker } from 'maplibre-gl';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import 'maplibre-gl/dist/maplibre-gl.css';

	let map: Map;
	let mapContainer: HTMLElement;
	let userLocation = { lat: 0, lng: 0 };
	let hasLoggedCoordinates = false;

	onMount(() => {
		// Set the RTL text plugin
		maplibregl.setRTLTextPlugin(
			'https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.min.js',
			(error) => {
				if (error) {
					console.error('Error loading RTL text plugin:', error);
				}
			},
			true // Lazy load the plugin
		);

		const initialState = { lng: 31.2357, lat: 30.0444, zoom: 8.5 };

		map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets/style.json?key=KDhMfHvorAFkFe64wlZb`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});
		map.addControl(new NavigationControl(), 'top-right');
		new Marker({ color: '#FF0000' }).setLngLat([139.7525, 35.6846]).addTo(map);

		// Add geolocate control to the map.
		const geolocateControl = new maplibregl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true
		});
		map.addControl(geolocateControl);

		geolocateControl.on('geolocate', (event) => {
			userLocation.lat = event.coords.latitude;
			userLocation.lng = event.coords.longitude;
			console.log(event.coords.latitude, event.coords.longitude);

			// Provide the modal settings
			const modal: ModalSettings = {
				type: 'confirm',
				title: 'Your Location',
				body: `Latitude: ${userLocation.lat}<br>Longitude: ${userLocation.lng}`,
				image: 'https://i.imgur.com/WOgTG96.gif' // Replace with your desired image
			};

			// Trigger the modal
			// Only log the coordinates if they haven't been logged before
			if (!hasLoggedCoordinates) {
				modalStore.trigger(modal);
				hasLoggedCoordinates = true; // Set the flag to true
			}
		});

		// When the user's location is updated, fly the map to their current location.
		geolocateControl.on('change', (event) => {
			map.flyTo({
				center: event.position,
				zoom: 15
			});
		});
	});
</script>

<div class="map-wrap">
	<div class="map" id="map" bind:this={mapContainer} />
</div>
