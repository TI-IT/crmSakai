import getConfig from 'next/config';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { classNames } from 'primereact/utils';
import React, { useEffect, useRef, useState } from 'react';
import { ClientsService } from '../../../crmServices/service/ClientsService';
import FormUpdateClient from '../../../pages/crm/clients/updateClients';
import { useRouter } from 'next/router';

const CrudClients = ({ server_host }) => {
    //----------временное
    let emptyProduct = {
        id: null,
        surname: '',
        name: null,
        patronymic: '',
        phone: 0,
        email: '',
        address: '',
        notes: ''
    };

    let emptyClient = {
        id: null,
        surname: '',
        name: null,
        patronymic: '',
        phone: 0,
        email: '',
        address: '',
        notes: ''
    };

    const [products, setProducts] = useState(null);
    const [clientsTitle, setClientsTitle] = useState(null);
    const [clients, setClients] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [updateDialog, setUpdateDialog] = useState(false);
    const [selectedClient, setSelectedClient] = useState(emptyClient);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [client, setClient] = useState(emptyClient);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const router = useRouter();
    //----------------------------------------------------------Получаем клиентов
    useEffect(() => {
        updateClients();
    }, []);

    function updateClients() {
        const productService = new ClientsService();
        productService.getClients().then((data) => setClients(data));
        productService.getClientsTitle().then((data) => setClientsTitle(data));
    }
    const openNew = () => {
        router.push('/crm/clients/addClients/');
    };

    // ******************
    // const deleteProduct = () => {
    //     let _products = products.filter((val) => val.id !== product.id);
    //     setProducts(_products);
    //     setDeleteProductDialog(false);
    //     setProduct(emptyProduct);
    //     toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    // };

    // const findIndexById = (id) => {
    //     let index = -1;
    //     for (let i = 0; i < products.length; i++) {
    //         if (products[i].id === id) {
    //             index = i;
    //             break;
    //         }
    //     }

    //     return index;
    // };

    // const createId = () => {
    //     let id = '';
    //     let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     for (let i = 0; i < 5; i++) {
    //         id += chars.charAt(Math.floor(Math.random() * chars.length));
    //     }
    //     return id;
    // };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div className="my-2">
                    <Button label="Добавить Клиента" icon="pi pi-plus" className="p-button-success mr-2" onClick={openNew} />
                    <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
                </div>
            </React.Fragment>
        );
    };

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label="Import" chooseLabel="Import" className="mr-2 inline-block" />
                <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />
            </React.Fragment>
        );
    };

    const codeBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">id</span>
                <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-success mr-5"
                    onClick={() => {
                        setUpdateDialog(true);
                        setSelectedClient(rowData);
                    }}
                />
                {rowData.id}
            </>
        );
    };

    const nameBodyTemplate = (rowData) => {
        // console.log(rowData);
        return (
            <>
                <span className="p-column-title">name</span>
                {rowData.name}
            </>
        );
    };
    function globalFilterNull(value) {
        if (value.length === 0) {
            setGlobalFilter(null);
        } else {
            setGlobalFilter(value);
        }
    }
    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <h5 className="m-0">Редактирование Клиентов</h5>
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => globalFilterNull(e.target.value)} placeholder="Филтор..." />
            </span>
        </div>
    );

    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                    <DataTable
                        ref={dt}
                        value={clients}
                        selection={selectedClient}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id"
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25]}
                        className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} clients"
                        globalFilter={globalFilter}
                        emptyMessage="No products found."
                        header={header}
                        responsiveLayout="scroll"
                    >
                        <Column field="id" header="id" sortable body={codeBodyTemplate} headerStyle={{ minWidth: '15rem' }}></Column>
                        <Column field="name" header="Имя" sortable body={nameBodyTemplate} headerStyle={{ minWidth: '15rem' }}></Column>
                    </DataTable>

                    {updateDialog && <FormUpdateClient server_host={server_host} selectedClient={selectedClient} setUpdateDialog={setUpdateDialog} updateClients={updateClients} />}
                </div>
            </div>
        </div>
    );
};

export default CrudClients;
