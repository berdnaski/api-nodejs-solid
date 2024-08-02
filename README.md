# App

Gympass style app.

## RFs (Requisitos funcionais) -> Funcionalidade

- [x] Deve ser possível se cadastrar.
- [x] Deve ser possível se autenticar.
- [x] Deve ser possível obter o perfil de um usuário logado.
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado.
- [x] Deve ser possível o usuário obter seu histórico de check-ins.
- [x] Deve ser possível o usuário buscar academias próximas (10km).
- [x] Deve ser possível o usuário buscar academias pelo nome.
- [x] Deve ser possível o usuário realizar check-in em uma academia.
- [x] Deve ser possível validar o check-in de um usuário.
- [x] Deve ser possível cadastrar uma academia.

## RNs (Regras de negócio) -> Quais as condições aplicadas

- [x] O usuário não deve poder se cadastrar com um email duplicado.
- [x] O usuário não pode fazer 2 check-ins no mesmo dia.
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia.
- [x] O check-in só pode ser validado até 20 minutos após criado.
- [] O check-in só pode ser validado por administradores.
- [] A academia só pode ser cadastrada por administradores.

## RNFs (Requisitos não-funcionais) -> Coisas que só a gente vamos entender

- [x] A senha do usuário precisa ser criptografada.
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página.
- [] O usuário deve ser identificado por um JWT (JSON Web Token).