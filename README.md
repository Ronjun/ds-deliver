# DS Delivery
### DS Delivery trata-se de um sistema de pedidos e entrega criado no evento da semana DevSuperior 2.0

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#imagens"> Imagens </a> •	
 <a href="#instalação">Instalação</a> • 
 <a href="#tecnologias">Tecnologias</a> •  
 <a href="#licença">Licença</a>  
</p>

## Sobre
 DS Delivery é um sistema de pedidos e entregas onde o cliente faz o pedido pelo app web e o entregador recebe em seu celular e tem a opção de entregá-lo. <br/>
 Link do projeto em produção: https://sds2-ronjun.netlify.app/ 

## Imagens
![Tela inicial](https://github.com/Ronjun/resources/blob/main/dsdelivery/01.png) ![catálogo](https://github.com/Ronjun/resources/blob/main/dsdelivery/02.png)
![Mobile App](https://github.com/Ronjun/resources/blob/main/dsdelivery/03.png)

## Instalação
#### Pré-Requisitos
Para executar este projeto é necessário instalar o [Git](https://git-scm.com/), [java 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html), [Spring Tools 4](https://spring.io/tools),
[Node.js](https://nodejs.org/en/), [expo](https://docs.expo.io/get-started/installation/)
#### Rodar localmente
Para rodar localmente primeiro abra o terminal do git e clone o projeto com:
` git clone https://github.com/Ronjun/ds-delivery ` .
#### Backend:
Abra a pasta backend do projeto no seu Spring Tools e rode ele pelo springboot dashboard.
O servidor será executado em http://localhost:8080
#### Frontend:
Acesse a pasta front-web. <br/>
Instale as dependencias necessárias com o comando `npm install` .<br/>
Execute o comando `npm run start`.
#### Mobile App
Acesse a pasta front-mobile. <br/>
Instale as dependencias necessárias com o comando `npm install` ou `yarn install`(se você tiver o yarn instalado). <br/>
execute o comando `expo start` após o fim da instalação. <br/>

## Tecnologias
Foram utilizados até o momento:
#### Backend
* Java
* SpringBoot
* H2 Database
* PostgresSQL 
#### Frontend
* TypeScript
* React
* React-Leaflet
#### Mobile App
* React Native
* TypeScript

## Licença
Ver [licença](https://github.com/Ronjun/ds-delivery/blob/main/LICENSE) 
