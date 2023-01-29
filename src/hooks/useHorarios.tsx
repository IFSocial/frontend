import { useEffect, useState } from 'react';

import api from '../services/api';

export interface Horario {
  _id?: string;
  jogos: string;
  partidaVS: string;
  data: string;
  horarios: string;
  rodada: string;
  times: string;
}

function useHorarios() {
  const [todosHorarios, setTodosHorarios] = useState<Horario[]>();

  async function getHorarios() {
    await api.get('horarios').then((response) => {
      setTodosHorarios(response.data);
    });
  }

  async function deleteHorario(id: string | undefined) {
    await api.delete(`horarios/deletehorarios/${id}`).then(getHorarios);
  }

  async function createHorario({
    jogos,
    partidaVS,
    data,
    horarios,
    rodada,
    times,
  }: Horario) {
    await api
      .post('horarios/createHorarios', {
        jogos,
        partidaVS,
        data,
        horarios,
        rodada,
        times,
      })
      .then(getHorarios);
  }

  useEffect(() => {
    getHorarios();
  }, []);

  return {
    todosHorarios,
    createHorario,
    deleteHorario,
  };
}

export default useHorarios;
