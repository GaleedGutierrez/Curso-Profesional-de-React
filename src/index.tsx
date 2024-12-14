import './index.css';
import '@styles/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppHookContainer from './AppHookContainer';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.querySelector('#root')!).render(
	<StrictMode>
		<AppHookContainer />
	</StrictMode>,
);
