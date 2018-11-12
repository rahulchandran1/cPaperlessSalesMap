import * as React from 'react';
import { RouteComponentProps } from 'react-router';

declare global {
	interface Mywindow extends Window {
		initMap: Function;
		geocodeAddress: Function;
		google: any;
		

	}
}
declare var window: Mywindow;


interface CompanyInfo {

	CompanyName: string;
	ContactPerson: string;
	lat: number;
	lng: number;
	DocCount: number;
	Rank: number;



}
interface HomeState {
	
	Companies: CompanyInfo[];
}


export class Home extends React.Component<RouteComponentProps<{}>, HomeState> {
	constructor() {
		super();
		this.state = { Companies: [{ CompanyName: "Wifli", ContactPerson: "Laura Rodgers", lat: 43.038,lng:-87.90,DocCount:1000,Rank:3}] }			
			
	}



	componentDidMount() {

		
			this.renderMap();
		
		
		
	}

	renderMap = () => {
		loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB3RfL4bdRMRzzsOklx2-uE4qTm61ObJSs&callback=initMap");		
		window.initMap = this.initMap
	}

	initMap = () => {

		// Create A Map
		var map = new window.google.maps.Map(document.getElementById('cPaperlessCustomermap'), {
			center: { lat: 41.850033, lng: -87.6500523 },
			zoom: 5
		})

		var infowindow = new window.google.maps.InfoWindow()

		// Display Dynamic Markers
		this.state.Companies.map(thisCompany => {

			var contentString = `${thisCompany.CompanyName + "<br>" +  thisCompany.ContactPerson}`

			// Create A Marker
			var marker = new window.google.maps.Marker({
				position: { lat: thisCompany.lat, lng: thisCompany.lng },
				map: map,
				title: thisCompany.CompanyName
			})
			

			// Click on A Marker!
			marker.addListener('click', function () {

				// Change the content
				infowindow.setContent(contentString)

				// Open An InfoWindow
				infowindow.open(map, marker)
			})

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
