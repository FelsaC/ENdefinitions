# ENdefinitions
Endefinitions é um site que permite a pesquisa de definições de palavras da língua inglesa(somente disponível definições em inglês). 

## Conteúdo
* [Bibliotecas e APIs](#Bibliotecas-e-APIs)
* [Estilização](#Estilização)
* [Pesquisa das palavras](#Pesquisa-das-palavras)
* [Como usar](#Como-usar)
* [Página de contato](#Página-de-contato)

## Bibliotecas e APIs
Para o projeto foram utilizadas as bibliotecas e APIs a seguir:
* [bootstrap](https://getbootstrap.com/)
* [words api](https://www.wordsapi.com/)
* [prog-bolsas-api](https://github.com/leostacowski/prog-bolsas-api)

## Estilização
A maioria dos componentes vieram do bootstrap, porém uma certa quantia de css personalizado foi adicionado as páginas, e alguns poucos componetes foram criandos do zero.

### Exemplos

### Pesquisa das palavras
Para a pesquisa e o retorno de definições e sugestões, ENdefinitios se integra com a WordsApi, da qual é usada o funcionalidade "definitions" para retornar uma definição para a palavra, caso a api contenho uma definição, e a funcionalidade de palavras aleatórias dela que é usado na criação de sugestões de pesquisa, que tras uma palavra aleatoria ja preenchida no input de pesquisa toda vez que a pagina é recarregada.

## Como usar
Para utilizar a funcionalidade de pesquisa é necessario ir a aba search, que pode ser acessada no menu de navegação,  
![Imagem de botão de search no menu de naveção](./README-assets/searchOnNav.png)

apertando o icone de lupa na pagina principal  
![Imagem do icone de lupa na pagina principal](./README-assets/searchOnMain.png)

e tambem no rodapé da pagina  
![Imagem do rodape da pagina com o link da pagina "search" circulado](./README-assets/searchOnFooter.png)

## Página de contato

