import React from 'react';
import { CTable, CButton, CButtonGroup } from '@coreui/react';

type SimpleTableProps = {
  labels: Array<string>;
  content: Array<object>;
  onEditar: (dados) => void;
  onExcluir: (id: string) => void;
}

function SimpleTable({ labels, content, onEditar, onExcluir }: SimpleTableProps) {

  const colunas = labels.concat('acoes').map((item) => {
    return {
      key: item,
      label: item,
      _props: { scope: 'col' },
    };
  });

  const acoesButtons = (onEditar, onExcluir, dados) => {
    return (
      <CButtonGroup>
        <CButton
          color='warning'
          onClick={() => { onEditar(dados) }}
        >
          Editar
        </CButton>
        <CButton
          color='danger'
          onClick={() => { onExcluir(dados.id) }}
        >
          Excluir
        </CButton>
      </CButtonGroup>
    );
  }

  const itens = content.map((item: any) => {
    return {
      ...item,
      'acoes': acoesButtons(onEditar, onExcluir, item),
      _cellProps: { id: { scope: 'row' } },
    };
  });


  return (
    content.length > 0 ?
    <CTable columns={colunas} items={itens} /> :
    'Sem Dados'
  );
}

export default SimpleTable;