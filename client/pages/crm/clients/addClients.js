import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import AddClients from '../../../crm/clients/addClients';
import { useRouter } from 'next/router';

function FormAddAllData({ server_host }) {
    const [displayBasic, setDisplayBasic] = useState(true);
    const router = useRouter();

    const header = <h3>Создать Клиента</h3>;
    const basicDialogFooter = <AddClients server_host={server_host} />;

    return (
        <>
            <Dialog
                visible={displayBasic}
                style={{ width: '50vw' }}
                header={header}
                footer={basicDialogFooter}
                onHide={() => {
                    setDisplayBasic(false);
                    router.push('/crm/clients/');
                }}
            ></Dialog>
        </>
    );
}

export default FormAddAllData;
