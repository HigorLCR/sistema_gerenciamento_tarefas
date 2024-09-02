import React from 'react';
import { CTable } from '@coreui/react';

type SimpleTableProps = {
  labels: Array<string>;
  content: Array<object>;
}

function SimpleTable<SimpleTableProps>({ labels, content }) {
  const colunas = labels.map((item) => {
    return {
      key: item,
      label: item,
      _props: { scope: 'col' },
    };
  });
  const itens = content.map((item) => {
    return {
      ...item,
      _cellProps: { id: { scope: 'row' } },
    };
  });


  return (
    <CTable columns={colunas} items={itens} />
  );
}

export default SimpleTable;