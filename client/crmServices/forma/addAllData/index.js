import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import AddClients from '../../clients/addClients';
import { useRouter } from 'next/router';

function FormAddAllData({ server_host, rerender, titles }) {
    const [displayBasic, setDisplayBasic] = useState(false);
    const router = useRouter();

    function rout() {
        router.push('/uikit/formlayout/');
    }
    // const basicDialogFooter = <AddClients server_host={server_host} rerender={rerender} titles={titles} setDisplayBasic={setDisplayBasic} />;
    const basicDialogFooter = <Button label="Создать" type="button" onClick={() => rout()} />;

    return (
        <>
            <Dialog visible={displayBasic} style={{ width: '50vw' }} footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}></Dialog>
            <Button label="Создать" className="bg-green-400 border-white-alpha-10" type="button" onClick={() => setDisplayBasic(true)} />
        </>
    );
}

export default FormAddAllData;
