# Cadastro de Produtos para Loja Virtual via API.

## Índice 

* [Índice](#índice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Pré-Requisitos](#pré-requisitos)
* [Instruções para Execução do Projeto](#instruções-para-execução-do-projeto)
* [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Desenvolvedor](#desenvolvedor)
* [Licença](#licença)

## Descrição do Projeto

Projeto criação de API Rest para cadastro de produtos eletrodomésticos.

API desenvolvida em PHP 7.4 utilizando o framework Laravel 7.x.  

A interface de usuário foi desenvolvida com o framework VueJs 3.x.  

Para este projeto foi utilizado o banco de dados relacional MySQL 8.x.  

Por conta de ser um projeto teste, a API possui apenas recursos de CRUD - CREATE, READ, UPDATE, DELETE- somente para o cadastro de marcas, fornecedores, usuários e produtos.  

Ressaltando também que as informações dos cadastros são bem resumidas.  

## Pré-Requisitos

* Servidor Apache 2 ou superior
* PHP 7.4 ou superior
* Node JS 15 ou superior
* VueJS 3.x
* MySQL Server 8 ou superior

## Instruções para Execução do Projeto

Selecione um diretório em seu computador para a execuçao do projeto.  
Na pasta selecionada, faça o clone do repositório do [Github.com](https://github.com/vagneravelino/api_loja "Projeto API Loja") usando a linha de comando abaixo:

> $ git clone https://github.com/vagneravelino/api_loja.git


Se preferir, pode acessar o repositório do [Github.com](https://github.com/vagneravelino/api_loja "Projeto API Loja"), efetuar o download do arquivo .zip e descompactar no diretório de sua escolha.

### Servidor Local

Faça o clone do projeto na pasta apropriada do se servidor web local, ou descompacte o arquivo .zip baixado do repositório.

### Docker

Para executar o projeto em container do Docker, basta entrar na pasta onde descompactou o arquivo .zip ou fez o clone e digite o comando:
> $ docker-compose -f ./docker/docker-compose.yml up -d

***Atenção***  
> ***Caso você possua algum container docker ativo e o mesmo estiver mapeado para a porta 80, ocorrerá um erro na execução acima, indicando que a porta 80 já está em uso.***   
> ***Neste caso, desative seu container docker e tente executar o comando novamente, ou se preferir, edite o arquivo docker-compose.yml, dentro da pasta docker e altere o mapeamento da porta de 80 para outra porta desejada e disponível.***

Após a conclusão do Docker, execute os comandos abaixo:

> $ docker exec -it api-loja bash -C "/home/www/scripts/config.sh"  

Pronto, a aplicação está disponível.   
Basta abrir o seu web browser preferido e digitar o endereço:

> http://10.0.43.4

ou

> http://localhost

***Atenção***
> ***Se você alterou a porta no arquivo docker-compose.yml, não esqueça de indicar a porta ao acessar o endereço indicado acima.***

## Funcionalidades e Demonstração da Aplicação

Ao acessar a aplicação, será exibida a tela abaixo.

![Screenshot 1](/assets/screenshot1.png "Tela Inicial do Sistema")

Tela de listagem de Fornecedores.  

![Screenshot 2](/assets/screenshot2.png "Tela de listagem de Fornecedores")

Tela de cadastro de Produtos.  

![Screenshot 3](/assets/screenshot3.png "Tela de listagem de Produtos")

Tela de listagem de Produtos.  

![Screenshot 4](/assets/screenshot4.png "Tela de cadastro de Produtos")

Tela de listagem de Produtos através do aplicativo ***Insomnia***.  
> ### *OBSERVAÇÃO*  
> *Pode ser utilizado outro aplicativo para consulta de APIs, como por exemplo o* ***Postman***.  
>
> **Exemplo de chamada da API - método http utilizado: GET**  
> *<pre>[method:GET] - http://servidor/api/product</pre>*

![Screenshot 5](/assets/screenshot5.png "Tela de listagem de Produtos via API")

Tela de cadastro de Produtos através do aplicativo ***Insomnia***.  
> ### *OBSERVAÇÃO*  
> *Pode ser utilizado outro aplicativo para consulta de APIs, como por exemplo o* ***Postman***.  
>
> **Exemplo de chamada da API - método http utilizado: POST**  
> *<pre>[method:POST] - http://servidor/api/product</pre>*

![Screenshot 6](/assets/screenshot6.png "Tela de cadastro de Produtos via API")

## Tecnologias utilizadas

![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white)
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)
![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## Desenvolvedor

[<img src="https://avatars.githubusercontent.com/u/17906325?s=400&u=8eacf5e17fc3d37ec7bb6a06530b96df5984aa6e&v=4" width=75><br><sub>Vagner Avelino</sub>](https://github.com/vagneravelino "Vagner Avelino")

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2022 - API Loja
