import React from 'react';
import ExternalLink from "@site/src/components/ExternalLink";

const ApiEndpointTitle = (props) => {
	if(!props.method) {
		props.method = 'GET'
	}
	return <ExternalLink href={props.href} className={'api-endpoint-title'}>
		<div className={`api-method-${props.method.toLowerCase()}`}>
			<span>{props.method}</span>
		</div>
		<span>{props.children}</span>
	</ExternalLink>;
};

export default ApiEndpointTitle;
