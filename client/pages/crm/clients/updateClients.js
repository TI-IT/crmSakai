import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import UpdateClients from '../../../crmServices/clients/updateClients';
import { useRouter } from 'next/router';

function FormUpdateClient({ server_host, selectClient, setUpdateDialog, updateClients }) {
    const [displayBasic, setDisplayBasic] = useState(true);
    const router = useRouter();

    const header = <h3>Редактирование Клиента</h3>;
    const basicDialogFooter = <UpdateClients server_host={server_host} selectClient={selectClient} setUpdateDialog={setUpdateDialog} updateClients={updateClients} />;

    return (
        <>
            <Dialog
                visible={displayBasic}
                style={{ width: '50vw' }}
                header={header}
                footer={basicDialogFooter}
                onHide={() => {
                    setDisplayBasic(false);
                    setUpdateDialog(false);
                }}
            ></Dialog>
        </>
    );
}

export default FormUpdateClient;
