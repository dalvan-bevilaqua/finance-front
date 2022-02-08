
import Charts from './Charts';
import Alert from 'react-bootstrap/Alert'

const Home = () => {
    return <>
        <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
        </Alert>
        <Charts></Charts>

    </>;
};

export default Home;