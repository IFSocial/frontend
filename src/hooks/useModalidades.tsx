import { useEffect, useState } from 'react';

import api from '../services/api';

interface Modalidade {
  id: string;
  modalidade: string;
  imagem: string;
}
export interface Esportes {
  _id: string;
  nomeEsporte: string;
  Imagem: string;
  modalidade: string;
  multiPlayers: boolean;
}

function useModalidadesPage() {
  const [todasModalidades, setTodasModalidades] = useState<Modalidade[]>();
  const [todosEsportes, setTodosEsportes] = useState<Esportes[]>();

  async function getModalidades() {
    await api.get('modalidades').then((response) => {
      setTodasModalidades(response.data);
    });
  }

  async function createModalidade(imagem: string, modalidade: string) {
    await api
      .post('modalidades/createModalidades', {
        imagem,
        modalidade,
        sexo: '?',
      })
      .then(getModalidades);
  }

  async function getEsportes() {
    await api.get('esportes').then((response) => {
      setTodosEsportes(response.data);
    });
  }

  async function getEsporteById(id: string | undefined) {
    const request = await api.get(`/esportes/${id}`);
    return request.data;
  }

  async function createEsporte(
    nomeEsporte: string,
    Imagem: string,
    modalidade: string,
    multiPlayers: boolean,
  ) {
    await api
      .post('esportes/createEsportes', {
        nomeEsporte,
        Imagem,
        modalidade,
        multiPlayers,
      })
      .then(getEsportes);
  }

  useEffect(() => {
    getModalidades();
    getEsportes();
  }, []);

  return {
    todasModalidades,
    todosEsportes,
    createModalidade,
    createEsporte,
    getEsporteById,
  };
}

export default useModalidadesPage;
