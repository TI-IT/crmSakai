const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Catalog = require('../../../models/crm/Catalog');
const CategoryProduct = require('../../../models/crm/CategoryProduct');
const createDataTree = {};
const treeData = {
  root: [
    {
      key: '0',
      label: 'Душевые кабины',
      children: [
        {
          key: '0-0',
          label: 'Распашные',
          children: [
            {
              key: '0-0-0',
              label: 'Откидные',
            },
            {
              key: '0-0-1',
              label: 'Resume.doc',
              icon: 'pi pi-fw pi-file',
              data: 'Resume Document',
            },
          ],
        },
        {
          key: '0-1',
          label: 'Дом',
          data: 'Home Folder',
          icon: 'pi pi-fw pi-home',
          children: [
            {
              key: '0-1-0',
              label: 'Invoices.txt',
              icon: 'pi pi-fw pi-file',
              data: 'Invoices for this month',
            },
          ],
        },
      ],
    },
    {
      key: '1',
      label: 'Events',
      data: 'Events Folder',
      icon: 'pi pi-fw pi-calendar',
      children: [
        { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
        {
          key: '1-1',
          label: 'Product Launch',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Product Launch',
        },
        {
          key: '1-2',
          label: 'Report Review',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Report Review',
        },
      ],
    },
    {
      key: '2',
      label: 'Movies',
      data: 'Movies Folder',
      icon: 'pi pi-fw pi-star',
      children: [
        {
          key: '2-0',
          icon: 'pi pi-fw pi-star',
          label: 'Al Pacino',
          data: 'Pacino Movies',
          children: [
            { key: '2-0-0', label: 'Scarface', icon: 'pi pi-fw pi-video', data: 'Scarface Movie' },
            { key: '2-0-1', label: 'Serpico', icon: 'pi pi-fw pi-video', data: 'Serpico Movie' },
          ],
        },
        {
          key: '2-1',
          label: 'Robert De Niro',
          icon: 'pi pi-fw pi-star',
          data: 'De Niro Movies',
          children: [
            {
              key: '2-1-0',
              label: 'Goodfellas',
              icon: 'pi pi-fw pi-video',
              data: 'Goodfellas Movie',
            },
            {
              key: '2-1-1',
              label: 'Untouchables',
              icon: 'pi pi-fw pi-video',
              data: 'Untouchables Movie',
            },
          ],
        },
      ],
    },
  ],
};

async function getDbData(name) {
  await dbConnect();
  const collection = mongoose.model(name);
  const data = await collection.find({});
  return data;
}
async function getAllTreeSelectData() {
  const obj = {};
  const root = [];
  const children = [];
  const catalog = await getDbData('catalog');
  const categoryProduct = await getDbData('categoryProduct');

  root.push(catalog);

  // console.log(catalog);
  console.log(obj);
  return treeData;
}

module.exports = {
  getAllTreeSelectData,
};
