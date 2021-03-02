# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Fashionista E-commerce

## Cenário

Segundo o levantamento, da Webshoppers (Ebit / Nielsen), os e-commerces brasileiros faturaram cerca de R$ 53,2 bilhões em 2018. O segmento “Moda e Acessórios” representa 5,6% do faturamento no varejo online, ocupando a segunda posição entre as categorias de produtos com mais pedidos, perdendo apenas para o segmento de eletroeletrônicos.

Oferecer a melhor experiência aos usuários que interagem com os produtos no desktop, e principalmente em dispositivos móveis, é fundamental para se manter vivo e competitivo nesse segmento.

## Objetivo

Como um profissional front-end, você será responsável por desenvolver as principais funcionalidades de um e-commerce de moda feminina, o Fashionista, garantindo a melhor experiência possível para os usuários interagirem com os produtos.

## Regras

- Deve implementar as funcionalidades apresentadas nos wireframes / layouts.
- Deve ser mobile first, possuindo uma experiência satisfatória tanto em mobile quanto em desktop.
- Deve consumir a API do catálogo de produtos.
- O estado global da aplicação deverá ser gerenciado com Redux
- Deve ser um SPA (Single Page Application).
- Todos os produtos da API devem ser exibidos.
- Utilize BEM CSS para escrever os estilos.
- Deve-se fazer deploy do projeto, servindo-o no Netlify.
- Não utilize frameworks CSS como Bootstrap, Foundation e afins.

## Requisitos obrigatórios

- Para cada item do catálogo de produtos as seguintes informações devem estar na página:
 - Imagem
 - Nome
 - Preço
 - Status “Em promoção”
 - Preço promocional (se disponível)
 - Tamanhos disponíveis
 - Selo “Promoção”
 - Deve ser possível adicionar itens por tamanho no carrinho de compras.

- Deve ser possível visualizar os itens adicionados no carrinho de compras, exibindo imagem, nome, preço e quantidade.

- Deve ser possível remover itens do carrinho de compras.

## Requisitos opcionais

- O carrinho de compras deve persistir entre reloads de página.
- Alguns produtos não tem todos os tamanhos disponíveis, mostre apenas os tamanhos disponíveis em estoque.
- Implemente a funcionalidade de busca em tempo real.
- Endpoint - Catálogo de Produtos
https://5f074b869c5c250016306cbf.mockapi.io/api/v1/catalog
- Propriedades de um produto (referência):
```json
{
	"name": "Nome do produto",
		"style": "Código de categoria",
		"code_color": "Código de categoria + código de cor",
		"color_slug": "slug da cor do produto",
		"color": "Nome da cor do produto",
		"on_sale": "booleano - Se o produto está em promoção",
		"regular_price": "preço sem promoção",
		"actual_price": "preço com promoção",
		"discount_percentage": "% de desconto da promoção",
		"installments": "quantidade de parcelas",
		"sizes": [
			{
				"available": "booleano - indica se o tamanho está disponível",
				"size": "nome do tamanho",
				"sku": "código do produto + código do tamanho (para adicionar no carrinho)"
			}
		]
}
```

## Layouts

Os layouts abaixo servem de referência visual das funcionalidades, sintam-se livres para segui-las ou implementá-las com base em outras referências, desde que atenda às regras e aos requisitos obrigatórios.

Layouts: Home (catálogo)

![home-fashionista](https://user-images.githubusercontent.com/56983000/109576980-9287e600-7ad3-11eb-90d8-736d7edcf73c.png)

Layouts: Página do produto

![pagproduto-fashionista](https://user-images.githubusercontent.com/56983000/109576985-961b6d00-7ad3-11eb-8cfc-70e32425a9c0.png)

Layouts: Carrinho de compras aberto

![carrinho-fashionista](https://user-images.githubusercontent.com/56983000/109577043-acc1c400-7ad3-11eb-8498-f8e133d1ee41.png)


Layouts: Busca em tempo real

![pesquisa-fashionista](https://user-images.githubusercontent.com/56983000/109577044-af241e00-7ad3-11eb-8c7f-a57704591017.png)
