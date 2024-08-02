import { FC } from 'react';

interface Props {
	info: string | undefined;
	name: string;
	image: string;
}

const EventItem: FC<Props> = ({ info, name, image }) => (
	<div>
		<img
			src={image}
			alt=""
			width={200}
			height={200}
		/>
		<h4>{name}</h4>
		<p>{info ? info : "There isn't info"}</p>
	</div>
);

export default EventItem;
