const data = {
  default: [
    {
      id: 'first',
      links: [
        {
          name: 'testName1',
          number: 1,
        },
      ],
    },
    {
      id: 'second',
      links: [
        {
          name: 'testName2',
          number: 2,
        },
        {
          name: 'testName2.1',
          number: 2.1,
        },
      ],
    },
    {
      id: 'third',
      links: [
        {
          name: 'testName3',
          number: 3,
        },
        {
          name: 'testName3.1',
          number: 3.1,
        },
      ],
    },
  ],
  custom: [
    {
      id: 'first',
      links: [
        {
          name: 'testName1',
          number: 1,
        },
      ],
    },
    {
      id: 'second',
      links: [
        {
          name: 'testName2',
          number: 2,
        },
        {
          name: 'testName2.1',
          number: 2.1,
        },
      ],
    },
  ],
};

let customKeys;
const items = Array.from(['custom', 'default']).flatMap((group) => {
  const scope = group + 'Data';

  // Собираем элементы группы
  const items = (data[group] || []).flatMap(({ id, links }) =>
    links.map((link) => ({ ...link, id, scope })),
  );

  const getKey = (v) => JSON.stringify([v.id, v.number]);

  if (!customKeys) {
    // индексируем ключи кастомных элементов
    customKeys = items.reduce((agg, v) => Object.assign(agg, { [getKey(v)]: v }), {});

    return items;
  } else {
    // Для ключей, найденных ранее, устанавливаем родителя и отфильтровываем
    const defaultIds = [];
    const defaultItems = items.filter((v) => {
      const child = customKeys[getKey(v)];
      if (child) {
        child.parent = v;
        defaultIds.push(v.id);
      } else {
        return true;
      }
    });

    // Оставляем в data.default лишь элементы с id, не найденные в custom
    if (defaultIds.length) {
      const idsSet = new Set(defaultIds);
      const copy = [...data.default];
      data.default.length = 0;
      data.default.push(...copy.filter((v) => !idsSet.has(v.id)));
    }

    return defaultItems;
  }
});

console.log(data); // Дата без кастомных ключей в дефолт скоуп
console.log(items); // Результат
