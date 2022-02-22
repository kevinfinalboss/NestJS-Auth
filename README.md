## Descrição do projeto

Sistema de autenticação JWT feito com o framework [Nest](https://github.com/nestjs/nest).

## Preparação de ambiente

- Para executar o projeto na sua máquina será necessário:
- [NodeJS](https://nodejs.org/en/) instalado na versão 12.0 ou superior.
- [Visual Studio Code](https://code.visualstudio.com) instalado e iniciado.}

## Prisma

### Instalar o prisma

```bash
npm install -D prisma
```

### Inicializar o prisma

```bash
npx prisma init
```

### Dependências

- [@nestjs/passport]
- [@nestjs/jwt]
- [bcrypt]
- [class-validator]
- [class-transformer]
- [passport]
- [passport-jwt]
- [passport-local]

### Instalando as dependências

Para instalar todas as dependências de uma vez utilize o seguinte comando

```bash
$ npm i @nestjs/passport @nestjs/jwt bcrypt class-validator class-transformer passport passport-jwt passport-local
```

### Dependências Desenvolvimento

- [@types/passport-jwt]
- [@types/passport-local]
- [@types/bcrypt]

## Instalando as dependências de desenvolvimento

Para instalar todas as dependências de desenvolvimento de uma vez utilize o seguinte comando

```bash
$ npm i -D @types/passport-jwt @types/passport-local @types/bcrypt
```

## Execução da aplicação

##### Local:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Execução do Prisma Studio

Para uma observação melhor dos dados adicionados recomendo usar a interface do prisma studio, você pode rodar ela utilizando o seguinte comando

```bash
$ npx prisma studio
```

## Rotas

As rotas do serviço são documentadas com o padrão de Swagger (ainda sendo finalizada!!)

```bash
$ http://localhost:3000/api
```

## Requisições

### Criação de usuário

> **❗ MUITO IMPORTANTE ❗**
>
> Para criar um usuário, certifique-se de liberar o endpoint antes com o `decorator` `@IsPublic()`.
>
> Caso a criação de usuários da sua aplicação seja restrita, remova o `decorator` `IsPublic()`, pois as próximas criações deverão ser autenticadas por um usuário já existente.

**Endpoint:** `/user`

**Method:** `POST`

**Request Body:**

```json
{
    "email": "kevinmg50@gmail.com",
    "password": "Kevinmg50@",
    "name": "Kevin Gomes"
}
```

**Response Body (Status 201):**

```json
{
    "id": 1,
    "email": "kevinmg50@gmail.com",
    "name": "Kevin Gomes"
}
```

### Realizando o login

**Endpoint:** `/login`

**Method:** `POST`

**Request Body:**

```json
{
    "email": "kevinmg50@gmail.com",
    "password": "Kevinmg50@"
}
```

**Response Body (Status 200):**

```json
{
    "access_token": "JWT token gerado"
}
```
