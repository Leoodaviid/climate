<p>Este projeto é um aplicativo de clima e integra diferentes serviços de API para fornecer informações sobre o clima e a qualidade do ar em uma determinada localização geográfica.Ele permite que o usuário digite o nome de uma cidade ou país e, em seguida, realiza uma série de requisições HTTP para buscar informações climáticas atualizadas, incluindo temperatura, umidade, pressão, vento, nascer e pôr do sol, e informações sobre a qualidade do ar, como concentrações de poluentes.O aplicativo também busca informações de previsão do tempo para as próximas 15 horas e exibe um resumo do clima para cada hora, juntamente com um gráfico que mostra a variação da temperatura ao longo do dia. O layout do aplicativo é intuitivo e fácil de usar, e as informações são apresentadas de maneira clara e organizada.</p>

🔗: <a href="https://climate-zeta.vercel.app">https://climate-zeta.vercel.app/</a>



## 💻Tecnologias:

- Typescript

- React

- Axios

- React Router DOM

- Styled-Components

- Styled-Normalize

  

## 🛠️Instalação:

Para instalar as dependências, execute o seguinte comando:

```
npm install ou yarn install
```



## 🧑‍💻Uso:

Para iniciar o projeto, execute o seguinte comando:

```
npm start ou yarn start
```

Isso iniciará o projeto em`http://localhost:3000`.





## 🗃️Estrutura dos arquivos:



```

├── public/
|	├── favi.ico 
|   ├── index.html
|   ├── logo192.png
|   ├── logo512.png
|   ├── manifest.json
|   ├── robots.txt
├── src/
|   ├── assets/
|   |   ├── icons/
|   |   |	├── github-logo.svg
|   |   ├── images/
|   |   |	└── ...
|   ├── components/
|   |   ├── AirQuality/
|   |   |	├── CardRepository.tsx
|   |   |	├── styles.ts
|   |   ├── Helper/
|   |   |	├── Filter.tsx
|   |   |	├── styles.ts
|   |   ├── SunTime/
|   |   |	├── Input.tsx
|   |   |	├── styles.ts
|   |   ├── Temperature/
|   |   |	├── Error.tsx
|   |   |	├── langColors.ts
|   |   |	├── styles.ts
|   |   ├── WeekWeater/
|   |   |	├── Loading.tsx
|   |   |	├── styles.ts
|   ├── models/
|   |   ├── models.ts
|   |   |
|   ├── pages/
|   |   ├── Main/
|   |   |	├── index.tsx
|   |   |   ├── styles.ts
|   ├── services/
|   |   ├── MainApi/
|   |   |	├── config/
|   |   |	|	├── api.ts
|   |   |	├── climate.ts
|   ├── styles/
|   |   ├── Theme.tsx
|   |   ├── global.ts
|   |   ├── styled.d.ts
|   ├── App.test.tsx
|   ├── App.tsx
|   ├── index.tsx
|   ├── react-app-env.d.ts
|   ├── reportWebVitals.ts
|   ├── routes.tsx
|   ├── setupTests.ts
├── .editorconfig
├── .env
├── .env.exemple
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── .tool-versions
├── db.json
├── package-lock.json
├── package.json
├── routes.json
└── tsconfig.json



```



## 🔑Descrição de alguns diretórios importantes:



- `public/`: Contém o arquivo index.html do aplicativo e quaisquer outros recursos estáticos.
- `src/`: Contém todo o código do aplicativo, incluindo o arquivo `index.ts` principal e vários componentes React e arquivos TypeScript.
- `src/components/`: Contém componentes React individuais que compõem a interface do usuário do aplicativo.
- `src/models/`: Contém os modelos de tipagem utilizados na aplicação.
- `src/pages/`: Onde contém as páginas que serão renderizadas pra o usuário.
- `src/services/`: Onde contém a configuração da api juntamente com os endpoints que foram utilizados.
- `package.json`: Contém metadados sobre o projeto, incluindo suas dependências e scripts para criar e executar o aplicativo.



## 🧰Detalhes e funções de alguns arquivos:



- `src/componentes/AirQuality/AirQuality.tsx`: O componente renderiza uma section que exibe a qualidade do ar, recebe um objeto por meio da propriedade "props". O componente renderiza uma lista de itens da qualidade do ar através do método map() da lista de objetos "list". Para cada item na lista, o componente chama o componente `AirQualityItem` com a propriedade "item" e uma chave única "key" definida como o valor da propriedade "dt" do item. O componente `AirQualityItem` é responsável por renderizar cada item individualmente. Em resumo, esse código é responsável por renderizar uma lista de itens de qualidade do ar usando o componente `AirQualityItem` para cada item da lista.

- `src/components/AirQuality/AirQualityItem.tsx`: O componente renderiza a lista de itens da qualidade do ar. O componente usa o destructuring para extrair as propriedades "main" e "components" do objeto "item". Em seguida, ele define uma função chamada "renderComponent" que é usada para renderizar cada uma das informações do item de qualidade do ar. A função recebe três parâmetros: "main" (para acessar a propriedade "main" do objeto "item"), "label" (para exibir a legenda da informação) e "value" (para exibir o valor da informação). Em resumo, esse código é responsável por renderizar um item da qualidade do ar e exibir as informações relevantes. Ele extrai as informações do objeto "item" e usa a função "renderComponent" para renderizar cada uma das informações, exibindo o valor e a legenda da informação com a cor correspondente da qualidade do ar.

- `src/componentes/Helper/airQuality.ts`: Exportação de duas constantes que são objetos e associam valores numéricos da qualidade do ar a rótulos e cores correspondentes.

- `src/componentes/Helper/formatting.ts`: Quatro funções utilitárias para formatar e calcular informações relacionadas a datas e horas.  A função `formatUnix` recebe um valor numérico representando uma data e hora em formato UNIX e retorna uma string formatada como "HH:MM" (horas e minutos). A função cria um novo objeto Date a partir do valor numérico fornecido, converte as horas e minutos em strings e preenche com um zero à esquerda se necessário.

  A função `getDayOfWeek` recebe uma string representando uma data e hora em formato ISO e retorna uma string com o dia da semana correspondente. A função cria um novo objeto Date a partir da string fornecida e usa o método "getDay" para obter o índice numérico do dia da semana (0 para Domingo, 1 para Segunda, etc.), que é usado para buscar o nome do dia da semana a partir de um array de strings.

  A função `formatHour` recebe uma string representando uma data e hora em formato ISO e retorna uma string formatada como "HH:MM" (horas e minutos). A função cria um novo objeto Date a partir da string fornecida, obtém as horas e minutos usando o método "getHours" e "getMinutes" e preenche com um zero à esquerda se necessário.

  A função `getTimePercentage` recebe três valores numéricos: um valor representando uma data e hora em formato UNIX (time), um valor representando o nascer do sol em formato UNIX (sunrise) e um valor representando o pôr do sol em formato UNIX (sunset). A função calcula a porcentagem do tempo que já passou entre o nascer e o pôr do sol a partir do valor de tempo fornecido, limitando o valor entre 0 e 100 para evitar erros de cálculo.

- `src/componentes/SunTime/SunTime.tsx`: Este componente exibe informações sobre a posição do sol no céu no momento atual. O componente usa o `useEffect`gancho para calcular a porcentagem de tempo entre o nascer e o pôr do sol que passou desde o início do dia. Essa porcentagem é usada para posicionar uma imagem do sol em um gráfico de semicírculo. O `useState`gancho é usado para armazenar esse valor percentual. A `formatUnix`função é usada para formatar timestamps Unix em um formato de hora legível. A `getTimePercentage`função é usada para calcular a porcentagem de tempo entre o nascer e o pôr do sol que passou desde o início do dia.

- `src/component/Temperature/Temperature.tsx`: Este componente processa os dados de temperatura e clima para um determinado local. Ele recebe um objeto `clime`como suporte, que contém várias propriedades relacionadas ao clima, como temperatura, velocidade do vento, umidade e chuva. O componente exibe o nome do local e código do país, temperatura atual, temperatura máxima e mínima, velocidade do vento (em km/h), umidade (em %) e quantidade de chuva (em mm). A velocidade do vento é convertida de mph para km/h multiplicando o valor por 1,60934. Se não houver dados de vento disponíveis no `clime`objeto, a seção de vento não é exibida. Se houver dados de chuva disponíveis no `clime`objeto, a seção de chuva é exibida com a quantidade de chuva em mm. Se não houver dados de chuva disponíveis, esta seção não será exibida.

- `src/components/WeekWeater/WeekWeather.tsx`: O componente  renderiza uma lista de previsões a cada 3 horas da semana com suas informações meteorológicas correspondentes. O `icones`objeto mapeia códigos meteorológicos para seus ícones correspondentes. O componente mapeia sobre a `week.list`matriz e para cada elemento renderiza um `div`elemento com um único `key`igual à `dt`propriedade. Em seguida, exibe o dia da semana, a hora, o ícone do clima e a temperatura máxima e mínima. No geral, esse componente é usado para exibir a previsão do tempo a cada três horas.

- `src/pages/Main/index.tsx`: Este componente que renderiza a page aplicativo de clima. Consiste em um formulário onde o usuário pode inserir um local e, ao clicar no botão de pesquisa, envia solicitações a várias APIs para buscar dados sobre o clima daquele local. Os dados buscados são exibidos na página usando outros componentes do React. O componente mantém várias variáveis de estado usando o hook useState, incluindo location, que é a entrada do usuário, e isLoading, que é usado para indicar se o aplicativo está buscando dados no momento. O componente também possui um gancho useEffect que é chamado sempre que as variáveis de estado isLoading ou de localização são alteradas. Se isLoading for verdadeiro, ele enviará solicitações para várias APIs usando funções como getClimate, getAir e getTime. Os resultados dessas solicitações são usados para atualizar as variáveis de estado, como clima, qualidade, tempo e semana.

- `src/services/mainApi/climate.ts`: Essas funções fazem solicitações GET à API OpenWeather para recuperar os dados climáticos desse local. Cada função recebe parâmetros diferentes, dependendo do ponto de extremidade da API que está sendo usado.

- `src/App.tsx`: Este é um componente funcional React que retorna o componente App principal. O componente envolve todo o aplicativo com o BrowserRouter da biblioteca react-router-dom, que fornece roteamento do lado do cliente. Ele também envolve o aplicativo com um componente Theme personalizado, que fornece ThemeProvider de componentes estilizados, permitindo a definição de variáveis CSS globais a serem aplicadas a todos os componentes de componentes estilizados. O componente também renderiza o componente AppRoutes, que define as rotas do aplicativo e aplica os componentes GlobalStyle e Normalize de styled-components e styled-normalize library, respectivamente, para normalizar estilos CSS em diferentes navegadores. Por fim, o componente envolve todo o aplicativo com um componente RepositoriesStorage personalizado, que fornece gerenciamento de estado ao aplicativo usando a API React Context.

- `src/routes.tsx`: Código está sendo usado a biblioteca react-router-dom para definir as rotas do aplicativo. Ele é responsável por renderizar os componentes de rota apropriados com base no caminho de URL atual.

















