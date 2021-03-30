import React from 'react'
import {useAlert} from "./Alert/AlertContext";

export default function Main(){
	const {show} = useAlert()
	return(
		<>
			<h1>Main: Context example</h1>
			<button onClick={()=> show('text from main')} className={'btn btn-success'}>Show alert</button>
		</>
	)
}
