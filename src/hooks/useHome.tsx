import { useEffect, useState } from 'react';

import api from '../services/api';

type Noticias = {
  id?: string;
  titulo?: string;
  descricao: string;
  data?: string;
};

type DataEvento = {
  dataEvento: string;
};

function useHome() {
  const [noticias, setNoticias] = useState<Noticias[]>([
    { descricao: 'Carregando...' },
  ]);
  const [date, setDate] = useState<DataEvento[]>();

  async function getNoticias() {
    await api.get('noticias').then((response) => {
      setNoticias(response.data);
    });
  }
  async function editNoticias(newNoticia: string) {
    await api
      .put('noticias/updatenoticias/63acf1a85ba4b258d19b1b86', {
        titulo: 'Main',
        descricao: newNoticia,
        data: 'dd/mm/aaaa',
      })
      .then(getNoticias);
  }

  async function getData() {
    await api.get('data-evento').then((response) => {
      setDate(response.data);
    });
  }

  const editData = async (newData: string) => {
    await api
      .put('data-evento/updateDataeventos/63d56b9df20107189b800a23', {
        dataEvento: newData,
      })
      .then(getData);
  };

  useEffect(() => {
    getNoticias();
    getData();
  }, []);

  const content = noticias[0].descricao;

  return { content, date, editData, editNoticias };
}

export default useHome;
