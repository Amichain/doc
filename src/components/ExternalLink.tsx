import React from 'react';

const ExternalLink = (props) => {
	return <a
		href={props.href}
		target="_blank"
		className="button button--outline button--secondary"
		style={{ paddingLeft: '10px', paddingRight: '10px' }}
	>
		<span>{props.children}</span>
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
			<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
			      d="M11.1 3.002c-3.648.007-5.56.096-6.78 1.317C3.002 5.637 3.002 7.758 3.002 12s0 6.363 1.318 7.681s3.438 1.318 7.68 1.318s6.363 0 7.681-1.318c1.221-1.22 1.31-3.132 1.317-6.78m-.518-9.384l-5.548 5.534m5.549-5.534c-.494-.494-3.822-.448-4.525-.438m4.525.438c.494.495.448 3.826.438 4.53"
			      color="currentColor"/>
		</svg>
	</a>;
};

export default ExternalLink;
