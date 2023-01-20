import React, { useEffect, useState } from 'react';

import api from '../services/api';

type Noticias = {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
};

function useHome() {
  const [noticias, setNoticias] = useState<Noticias[]>();
  const [date, setDate] = useState<string>('');

  async function getNoticias() {
    await api.get('noticias').then((response) => {
      setNoticias(response.data);
    });
  }
  async function getData() {
    await api.get('').then((response) => {
      setDate(response.data);
    });
  }

  useEffect(() => {
    getNoticias();
    getData();
  }, [noticias, date]);

  const content = (
    <ul>
      {noticias?.map((noticia) => {
        return <p key={noticia.id}>{noticia.descricao}</p>;
      })}
    </ul>
  );

  return { content, date };
}

export default useHome;
