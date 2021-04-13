import React from 'react';
import { useGlobalContext} from "./Context"

export default function Projects() {
	const data = useGlobalContext();
	console.log(data);
	return (
		<div>
			<h1>PROJECT</h1>
		</div>
	)
}
