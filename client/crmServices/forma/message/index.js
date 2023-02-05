import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const FormaMessages = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const toast = useRef();
    const message = useRef();

    const addSuccessMessage = () => {
        message.current.show({ severity: 'success', content: 'Message Detail' });
    };

    const addInfoMessage = () => {
        message.current.show({ severity: 'info', content: 'Message Detail' });
    };

    const addWarnMessage = () => {
        message.current.show({ severity: 'warn', content: 'Message Detail' });
    };

    const addErrorMessage = () => {
        message.current.show({ severity: 'error', content: 'Message Detail' });
    };

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success Message', detail: 'Message Detail', life: 3000 });
    };

    const showInfo = () => {
        toast.current.show({ severity: 'info', summary: 'Info Message', detail: 'Message Detail', life: 3000 });
    };

    const showWarn = () => {
        toast.current.show({ severity: 'warn', summary: 'Warn Message', detail: 'Message Detail', life: 3000 });
    };

    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error Message', detail: 'Message Detail', life: 3000 });
    };

    return (
        <div className="grid">
            <div className="col-12 lg:col-6">
                <div className="card">
                    <h5>Toast</h5>
                    <div className="flex flex-wrap gap-2">
                        <Toast ref={toast} />
                        <Button type="button" onClick={showSuccess} label="Success" className="p-button-success" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormaMessages;
