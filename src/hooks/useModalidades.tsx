import { useEffect, useState } from 'react';

import api from '../services/api';

interface Modalidade {
  id: string;
  titulo: string;
  imagem: string;
}
interface Esportes {
  id: string;
  titulo: string;
  imagem: string;
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
    await api.get('modalidades').then((response) => {
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
