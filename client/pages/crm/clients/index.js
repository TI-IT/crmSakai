import GetClients from '../../../crmServices/clients/getClients';

const Clients = ({ server_host }) => {
    return (
        <div>
            <h3>Клиенты</h3>
            <GetClients server_host={server_host} />
        </div>
    );
};

export default Clients;
