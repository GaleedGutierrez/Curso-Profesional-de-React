import { FC } from 'react';

interface Props {
	info: string | undefined;
	name: string;
	image: string;
	id: string;
	onEventClick: () => void;
}

const EventItem: FC<Props> = ({ info, name, image, onEventClick }) => (
	<div>
		<img
			src={image}
			alt=""
			width={200}
			height={200}
		/>
		<h4>{name}</h4>
		<p>{info ? info : "There isn't info"}</p>
		<button onClick={onEventClick}>Ver más</button>
	</div>
);

export default EventItem;
