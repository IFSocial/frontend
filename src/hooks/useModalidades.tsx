import { useEffect, useState } from 'react';

import api from '../services/api';

interface Modalidade {
  id: string;
  modalidade: string;
  imagem: string;
}
interface Esportes {
  nomeEsporte: string;
  Imagem: string;
  modalidade: string;
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

  async function createEsporte(
    nomeEsporte: string,
    Imagem: string,
    modalidade: string,
  ) {
    await api
      .post('esportes/createEsportes', {
        nomeEsporte,
        Imagem,
        modalidade,
      })
      .then(getEsportes);
  }

  useEffect(() => {
    getModalidades();
    getEsportes();
  }, []);

  return { todasModalidades, todosEsportes, createModalidade, createEsporte };
}

export default useModalidadesPage;
