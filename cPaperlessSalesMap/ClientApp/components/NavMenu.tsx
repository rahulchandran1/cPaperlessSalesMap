import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FormControl,FormControlLabel,Checkbox } from '@material-ui/core';



interface NavState {
	ssrCustChecked:boolean
}
export class NavMenu extends React.Component<{}, NavState> {
	constructor() {
		super();
		this.state = {
			ssrCustChecked: false
		}
	}
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>cPaperlessSalesMap</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> cPaperless Customer Map
                            </NavLink>
                        </li>
						
						
							
						
						
					</ul>
					<FormControlLabel
						control={
							<Checkbox name="SSRCustMap" checked={this.state.ssrCustChecked} onChange={this.handleIsHideTest} />
						}
						label="SSR Customers"
					/>
                </div>
            </div>
        </div>;
	}

	handleIsHideTest = (event: any) => {
		this.setState({ ssrCustChecked: event.target.checked });
	}
}
