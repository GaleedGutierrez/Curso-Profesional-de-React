import { useParams } from 'react-router-dom';

const Details = (): JSX.Element => {
	const { eventId } = useParams();

	return <div>{eventId}</div>;
};

export default Details;
