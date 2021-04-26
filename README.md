# Trilha Angular Squadra

# Projeto de Implementação de TODO de Agenda

## Tecnologia utilizada 

- Angular versão 11.0.6 [Angular CLI](https://github.com/angular/angular-cli)


## Escopo
	Projeto de manipulação de Agenda pessoal de Tarefas

## Persistencia

- LocalStorage Browser


## Utilização do Projeto
1. Após fazer o clone do projeto, utilizar o comando no pompt de comando na pasta do projeto 
		- npm install
2. Para executar o projeto e abrir no browser
    - `ng serve -o`  

	
##Lista das URIs
	1. Principal https://localhost:4200 com redirecionamento para https://localhost:4200/agenda
	2. Lista das tarefas https://localhost:4200/agenda
	
###Lista geral de Rotas
	1. /agenda - Lista as tarefas do Dia/Amanhã/Próximos dias 
	2. /tasks - Lista todas as tarefas em ordem de data
	

#Informações para Build
  - Utilizar o comando `ng build`, será criada uma pasta `dist/`. Para criação de versão de produção utilize a flag `--prod`.



