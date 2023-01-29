import { useEffect, useState } from 'react';

import api from '../services/api';

export interface Times {
  nomeTime: string;
  nomeParticipantes: string[];
  matricula: string[];
  categoria: string;
  Turma: string;
  esporte: string | undefined;
}

function useTimes() {
  const [todosTimes, setTodosTimes] = useState<Times[]>();

  async function getTimes() {
    await api.get('equipes').then((response) => {
      setTodosTimes(response.data);
    });
  }

  async function getTimeById(id: string | undefined) {
    const request = await api.get(`/equipes/${id}`);
    return request.data;
  }

  async function createTime({
    nomeTime,
    nomeParticipantes,
    matricula,
    categoria,
    Turma,
    esporte,
  }: Times) {
    await api
      .post('equipes/createEquipes', {
        nomeTime,
        nomeParticipantes,
        matricula,
        categoria,
        Turma,
        esporte,
      })
      .then(getTimes);
  }

  useEffect(() => {
    getTimes();
  }, []);

  return {
    todosTimes,
    createTime,
    getTimeById,
  };
}

export default useTimes;
