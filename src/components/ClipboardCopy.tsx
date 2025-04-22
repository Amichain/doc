import React, {useState} from 'react';

const ClipboardCopy = (props) => {
	const [copied, setCopied] = useState(false)
	const onCopy = () => {
		navigator.clipboard.writeText(props.value);
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}, 1200)
	}
	const Icon = () => {
		if(copied) {
			return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/><path d="m8 12.5l2.5 2.5L16 9"/></g></svg>
		} else {
			return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M16.964 8.982c-.003-2.95-.047-4.478-.906-5.524a4 4 0 0 0-.553-.554C14.4 2 12.76 2 9.48 2s-4.92 0-6.024.905a4 4 0 0 0-.553.554C1.998 4.56 1.998 6.2 1.998 9.48s0 4.92.906 6.023q.25.304.553.553c1.047.86 2.575.904 5.525.906"/><path d="m14.028 9.025l2.966-.043m-2.98 13.02l2.966-.043m4.992-7.937l-.028 2.96M9.01 14.036l-.028 2.96m2.505-7.971c-.832.149-2.17.302-2.477 2.024m10.485 10.91c.835-.137 2.174-.27 2.508-1.986M19.495 9.025c.832.149 2.17.302 2.477 2.024M11.5 21.957c-.833-.148-2.17-.301-2.478-2.023"/></g></svg>
		}
	}
	return <button
		className={'button-square'}
		onClick={onCopy}
	>
		<Icon />
	</button>;
};

export default ClipboardCopy;
