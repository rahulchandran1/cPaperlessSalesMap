import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Component } from 'react'


interface chkboxState {
	IsChecked: boolean
}

export class Checkbox extends Component<RouteComponentProps<{}>, chkboxState>{
	constructor() {
		super();
		this.state = { IsChecked: false };
	}



	public render() {
		return
		(
			<div className="checkbox">
				<label>
					<input
						type="checkbox"
						value={label}
						checked={isChecked}
						onChange={this.toggleCheckboxChange}
					/>

					{label}
				</label>
			</div>
			
			)
	}

}