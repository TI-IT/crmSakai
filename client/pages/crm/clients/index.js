import CrudClients from '../../../crmServices/clients/crud';

const Clients = ({ server_host }) => {
    return (
        <div>
            <h3>Клиенты</h3>
            <CrudClients server_host={server_host} />
        </div>
    );
};

export default Clients;
