const { ReactiveMap, AppbaseMap, AppbaseSearch, AppbaseSlider, AppbaseList } = ReactiveMaps;
const Testing = React.createClass({
	getDefaultProps: function() {
		return {
			mapStyle: "MapBox",
			mapping: {
				city: 'city',
				location: 'location'
			},
			config: {
				"appbase": {
					"appname": "ReactTestApp3",
					"username": "CR1KCtfUY",
					"password": "a5aaebbe-c734-43e5-89dc-76d0f37689eb",
					"type": "test"
				}
			}
		};
	},
	popoverContent: function(marker) {
		return (
			<div className="popoverComponent row">
			{marker._source.place_info}
		</div>
		);
	},
	render: function() {
		return (
			<div className="row m-0 h-100">
				<ReactiveMap config={this.props.config}>
					<div className="col s4">
						<div className="row h-100">
							<div className="col s12">
								<AppbaseList
									sensorId="CitySensor"
									inputData={this.props.mapping.city}
									defaultSelected="San Francisco"
									showCount={true}
									size={100}
									multipleSelect={false}
									includeGeo={false}
									staticSearch={true}
									title="Cities"
									searchPlaceholder="Search City"
								/>
							</div>
						</div>
					</div>
					<div className="col s8 h-100" style={{height: '600px'}}>
						<AppbaseMap
							inputData={this.props.mapping.location}
							defaultZoom={13}
							defaultCenter={{ lat: 37.74, lng: -122.45 }}
							historicalData={true}
							markerCluster={false}
							searchComponent="appbase"
							searchField={this.props.mapping.venue}
							mapStyle={this.props.mapStyle}
							autoCenter={true}
							searchAsMoveComponent={true}
							MapStylesComponent={true}
							title="Meetupblast"
							showPopoverOn = "onClick"
							popoverContent = {this.popoverContent}
							depends={{
								CitySensor: {"operation": "must"}
							}}
							/>
					</div>
				</ReactiveMap>
			</div>
		)
	}
})

ReactDOM.render(
	<Testing></Testing>,
	document.getElementById('root')
);
