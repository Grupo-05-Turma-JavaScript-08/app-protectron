<p align="center">
  <img src="https://arymax.org.br/novosite/wp-content/uploads/2020/12/inc-logo-05.png" alt="Seguro de Eletrônicos" width="300"/>
</p>

# 💻 Projeto Integrador - Desafio 2  
## Sistema de Seguro de Eletrônicos

Sistema desenvolvido com NestJS para gerenciar seguros de equipamentos eletrônicos. Permite o cadastro completo (CRUD) de eletrônicos e planos de seguro, com cálculo automático do valor do seguro. Caso o equipamento tenha mais de 3 anos de uso, é aplicada uma depreciação de 30% antes do cálculo.

---

## 🧠 Regras de Negócio

- Cada equipamento está associado a um plano de seguro.
- O valor do seguro (premiumValue) é calculado com base na porcentagem definida no plano de seguro.
- Equipamentos com **mais de 3 anos de uso** sofrem **30% de depreciação** antes do cálculo do prêmio.
- O status do seguro será marcado como:
  - `"Depreciado"` se tiver mais de 3 anos;
  - `"Normal"` caso contrário.

---

## ⚙️ Tecnologias Utilizadas

-  NestJS
-  TypeORM
-  PostgreSQL
-  class-validator
-  Insomnia
-  TypeScript

---

## 🔧 Funcionalidades
 - Cadastrar plano de seguro

 - Buscar planos de seguro por título 

 - Atualizar/deletar plano de seguro

 - Cadastrar eletrônico com vínculo a um seguro 

 - Listar todos os eletrônicos com dados do seguro

 - Buscar por modelo 

 - Atualizar ou deletar eletrônico

- Cálculo automático do prêmio e status do seguro com base na data

## 👥 Equipe
