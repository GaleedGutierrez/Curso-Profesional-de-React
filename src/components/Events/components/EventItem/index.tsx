import { FC } from 'react';

interface Props {
	info: string | undefined;
	name: string;
	image: string;
	// eslint-disable-next-line react/no-unused-prop-types
	id: string;
	handleEventClick: () => void;
}

const EventItem: FC<Props> = ({ info, name, image, handleEventClick }) => (
	<div>
		<img
			alt=""
			height={200}
			src={image}
			width={200}
		/>
		<h4>{name}</h4>
		<p>{info ?? "There isn't info"}</p>
		<button
			type="button"
			onClick={handleEventClick}
		>
			Ver más
		</button>
	</div>
);

export default EventItem;
