/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { forwardRef, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.css';

interface Properties {
	children: ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, Properties>(
	({ children }, reference) => {
		const MODAL_ROOT = document.querySelector('#modal');

		const handleCloseModal = (): void => {
			if (reference && 'current' in reference) {
				reference.current?.close();
			}
		};

		useEffect(() => {
			const handleEscape = (event: KeyboardEvent): void => {
				const IS_SCAPE = event.key === 'Escape';

				if (IS_SCAPE && reference && 'current' in reference) {
					reference.current?.close();
				}
			};

			document.addEventListener('keydown', handleEscape);

			return (): void => {
				document.removeEventListener('keydown', handleEscape);
			};
		}, [reference]);

		if (!(MODAL_ROOT instanceof HTMLDivElement)) {
			return;
		}

		return createPortal(
			<dialog
				ref={reference}
				className={styles['m-modal-overlay']}
				onClick={handleCloseModal}
			>
				<div
					className="m-modal"
					onClick={(event) => event.stopPropagation()}
				>
					{children}
					<button
						className="m-modal__close-button"
						onClick={handleCloseModal}
					>
						Close
					</button>
				</div>
			</dialog>,
			MODAL_ROOT,
		);
	},
);

export default Dialog;
