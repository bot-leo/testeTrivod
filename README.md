Projeto em [Next.js](https://nextjs.org/) usando o comando padrao [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Teste Desenvolvimento Front-end

Utilize este comando para rodar o projeto:

```bash
  yarn dev
```

Entre [http://localhost:3000](http://localhost:3000) no navegador.

## O problema

Obter os dados pela "api" disponibilizada, e realizar um tratamento de dados conforme as cores e tamanhos diponiveis de um produto (vestido)

## Solucao

Inicialmente pensei alguns pontos.

  - Pegar os dados 
  - Filtrar
  - Controla-los

  Inicialmente na requisicao recebo os dados com alguns valores duplicados ```` "optionsData"````, utilizando ````reduce```` faco a primeira modificao no objeto, baseado nas cores filtraria os tamanhos, sendo reduzido e modificado num objeto final, chave e valor com tamanho e um array de cores. Conventindo depois para controlar via inputs do tipo ``radio``.

  Finalizando com novas variaveis ja separadas ``colorList`` & ``sizeList``, para poder realizar o controle dos inputs e somente aparecer os tamanhos disponiveis baseado nas cores, gerando tambem os componentes apartir do map.

  ``handleSelectColor`` & ``handleSelectSize`` sao funcoes para o controle sobre os inputs e os estados que sao utilizados neles, tantos no iputs quanto nos label. Onde basicamente recebem o ``value`` do event modificado o estado ``size`` & ``color``, feitos para ajudar na confirmacao de checked.