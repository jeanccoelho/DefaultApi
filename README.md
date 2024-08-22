# DefaultApi

Default Api é um exemplo de API RESTful construída com Node.js, Express, Prisma, TypeScript, e JWT para autenticação baseada em roles.

## Funcionalidades

- Registro de usuário
- Autenticação de usuário com JWT
- Autorização baseada em roles
- Manipulação de erros centralizada
- Validação de dados com Zod
- Logs de erros com Winston

## Tecnologias

- Node.js 21
- Express
- Prisma ORM
- TypeScript
- JWT para autenticação
- Winston para logging
- Zod para validação de dados

## Configuração

1. Clone o repositório:

````bash
 git clone https://github.com/jeanccoelho/DefaultApi
 cd DefaultApi
````

2. Instale as dependências:
```bash
yarn install
````

3. Configure o arquivo .env:
```bash
cp .env.example .env
````

4. Execute as migrações do Prisma:
```bash
npx prisma migrate dev
````

5. Inicie o servidor:
```bash
yarn start
````

## USO
- Registro de Usuário
```bash
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{"email":"user@example.com", "password":"password123", "name":"John Doe", "role":"USER"}'
````

- Autenticação
```bash
curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"email":"user@example.com", "password":"password123"}'
````

## Contribuindo
Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

- Faça um fork do repositório
- Crie uma branch para sua feature/bugfix (git checkout -b minha-feature)
- Commit suas alterações (git commit -am 'Adiciona minha feature')
- Faça push para a branch (git push origin minha-feature)
- Abra um Pull Request

## Licença
Este projeto é licenciado sob a licença MIT.

