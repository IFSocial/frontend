import React, { useEffect, useState } from 'react';

import api from '../services/api';

type Modalidade = {
  id: string;
  titulo: string;
  imagem: string;
};

function useModalidades() {
  const [modalidades, setModalidades] = useState<Modalidade[]>();

  async function getModalidades() {
    await api.get('modalidades').then((response) => {
      setModalidades(response.data);
    });
  }
  useEffect(() => {
    getModalidades();
  }, [modalidades]);

  return { modalidades };
}

export default useModalidades;
