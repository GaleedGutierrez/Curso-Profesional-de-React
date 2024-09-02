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
			alt=""
			height={200}
			src={image}
			width={200}
		/>
		<h4>{name}</h4>
		<p>{info ?? "There isn't info"}</p>
		<button onClick={onEventClick}>Ver más</button>
	</div>
);

export default EventItem;
