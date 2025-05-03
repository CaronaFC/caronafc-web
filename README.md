# 🚗 CaronaFC - Web

Landing page do CaronaFC — esta aplicação vai manter a página inicial e o dashboard de admin.

---

## 🛠 Tecnologias utilizadas

<div>
  <img align="center" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img align="center" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img align="center" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img align="center" src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img align="center" src="https://img.shields.io/badge/Framer--Motion-EF5DA8?style=for-the-badge&logo=framer&logoColor=white" />
</div>

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/CaronaFC/caronafc-web.git

# Acesse o diretório
cd caronafc-web

# Instale as dependências
npm install

# Inicie o projeto
npm run dev

# Acesse em seu navegador:
http://localhost:8081
```

## 👥 Como desenvolver em equipe

```bash

# Após realizar o passo acima e garantir que o projeto está rodando, siga os passos abaixo:

# Certifique-se de que você está na branch dev

git checkout dev

# Certifique-se de que a branch dev está atualizada

git pull origin dev

# Crie uma nova branch para a sua feature, utilize o código da task, exemplo:

git checkout -b CF-1

# Após realizar as alterações, faça os seus commits

# Exemplo de commit:

git add arquivo-modificado.tsx

git commit -m "feat: [CF-1] Adiciona nova feature"

# Após realizar os commits, faça o push da sua branch (a flag -u é para criar o tracking remoto da sua branch, que até o momento só existe na sua máquina):

git push -u origin CF-1

# Após isso, crie um Pull Request no GitHub, para mergear sua branch com a branch de dev e aguarde alguém revisar!
```