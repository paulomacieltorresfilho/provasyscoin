# provasyscoin
## Rodando a API na sua máquina
Para utilizar a api localmente, basta:
- Ter o NodeJS devidamente instalado
- Após clonar o repositório, instalar o framework express.js com o comando `npm install express`
- Finalmente, para rodar o projeto, utiliza-se o comando `npm start`

É importante destacar que a api será hospedada localmente na porta (PORT) **3000**, portanto, utiliza-se `http://localhost:3000` para fazer os requests.

## Exemplo de utilização remota
1. Via curl
```bash
curl "http://localhost:3000/provasyscoin?user=\"syscoin\"&password=\"meEscolhe\""
```
2. Via site
```
http://localhost:3000/provasyscoin?user="syscoin"&password="meEscolhe"
```