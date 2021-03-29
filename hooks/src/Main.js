import React from 'react'
import {useAlertToggle} from "./Alert/AlertContext";

export default function Main(){
	const toggle = useAlertToggle()
	return(
		<>
			<h1>Main: Context example</h1>
			<button onClick={toggle} className={'btn btn-success'}>Show alert</button>
		</>
	)
}
