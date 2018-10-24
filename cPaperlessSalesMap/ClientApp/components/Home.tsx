import * as React from 'react';
import { RouteComponentProps } from 'react-router';

declare global {
	interface Mywindow extends Window {
		initMap: Function;
		google: any;
		

	}
}
declare var window: Mywindow;






export class Home extends React.Component<RouteComponentProps<{}>, {}> {
	


	componentDidMount() {

		
			this.renderMap();
		
		
		
	}

	renderMap = () => {
		loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB3RfL4bdRMRzzsOklx2-uE4qTm61ObJSs&callback=initMap")
		window.initMap = this.initMap
	}

	initMap = () => {

		// Create A Map
		var map = new window.google.maps.Map(document.getElementById('cPaperlessCustomermap'), {
			center: { lat: 47.606, lng: -122.332 },
			zoom: 8
		})
	}

	public render() {
		return (
				<main>
					<div id="cPaperlessCustomermap"></div>
				</main>
			)
		
	}


}

function loadScript(url:string) {
	var index = window.document.getElementsByTagName("script")[0]
	var script = window.document.createElement("script")
	script.src = url
	script.async = true
	script.defer = true
	if (index.parentNode != null) {
		index.parentNode.insertBefore(script, index)
	}
}
