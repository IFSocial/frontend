# GO! Semadec - Fronted

Um sistema para facilitar a realização do evento da semadec realizado no IFRN, campus Currais Novos.

## Instalação

Clone o repositório localmente na sua máquina.

Logo em seguida instale os pacotes com o comando:

```sh
yarn
```

Após isso, o sistema já estará pronto para rodar localmente. Para isto utilize o comando:

```sh
yarn start
```

## Storybook

O sistema conta com o Storybook, se quiser roda-lo, basta usar:

```sh
yarn storybook
```

## Testes

O sistema utiliza o Jest como framework de teste. Para roda-lo basta usar:

```sh
yarn test
```

Após a mudança de algum componente, provávelmente algum snapshot irá desatualizar e o teste quebrará. Para corrigir isto basta rodar:

```sh
yarn test -- -u
```

E com isso os snapshots irão se atualizar automaticamente.
