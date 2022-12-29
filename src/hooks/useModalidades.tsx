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
}

function useModalidadesPage() {
  const [todasModalidades, setTodasModalidades] = useState<Modalidade[]>();
  const [todosEsportes, setTodosEsportes] = useState<Esportes[]>();

  async function getModalidades() {
    await api.get('modalidades').then((response) => {
      setTodasModalidades(response.data);
    });
  }

  async function getEsportes() {
    await api.get('esportes').then((response) => {
      setTodosEsportes(response.data);
    });
  }

  useEffect(() => {
    getModalidades();
    getEsportes();
  }, [todasModalidades, todosEsportes]);

  return { todasModalidades, todosEsportes };
}

export default useModalidadesPage;
