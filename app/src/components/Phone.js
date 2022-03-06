// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
// import React, {useState} from 'react'

// export default function Phone() {
//   // `value` will be the parsed phone number in E.164 format.
//   // Example: "+12133734253".
//   const [value, setValue] = useState()
//   return (
//     <PhoneInput
//       placeholder="Enter phone number"
//       value={value}
//       onChange={setValue}/>
//   )
// }
import React from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './Card1.css'

export default class PhoneInputGfg extends React.Component {
constructor(props) {
	super(props);
	this.state = { phone: "" };
}
render(){
	return (
	<div className='phone'>
		<PhoneInput 
		country={'us'}
		value={this.state.phone}
		onChange={phone => this.setState({ phone })}
		/>
	</div>
	);
}
};
