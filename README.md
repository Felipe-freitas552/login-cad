# Controle de Cadastro
 
Nesse site você ira ver um sistema que analiza e registra nomes de usuarios, podendo ter a função de exclução de nome e editor de nome.
 
 ![Site](/img/salva-nome-lista.gif)

## Codigo controller.js
  Explicação a baixo
  # Validação de Preenchimento e Gerenciamento de Lista de Usuários

````
**Descrição:**

Este código JavaScript implementa um simples sistema de cadastro e gerenciamento de usuários. As principais funcionalidades incluem:

* **Validação de formulário:** Verifica se todos os campos obrigatórios de um formulário de login estão preenchidos antes de permitir o acesso.
* **Cadastro de usuários:** Permite adicionar novos usuários a uma lista, armazenando seus nomes em um array JavaScript.
* **Gerenciamento de lista:** Exibe os usuários cadastrados em uma tabela HTML, permitindo a edição e exclusão de registros.
````
**Como usar:**

1. **Incluir o código:** Copie e cole o código JavaScript em seu arquivo HTML.
2. **Criar a estrutura HTML:** Crie os elementos HTML necessários para os formulários e a tabela, conforme utilizado no código.
3. **Associar os eventos:** Associe os eventos `onclick` dos botões aos respectivos eventos JavaScript.

**Funcionalidades:**

* **Validação de login:** Ao clicar no botão de login, o código verifica se os campos de email e senha estão preenchidos. **Observação:** Atualmente, a validação é básica e apenas verifica se os campos estão vazios. Para uma validação mais robusta, seria necessário implementar expressões regulares ou utilizar bibliotecas de validação.
* **Adição de usuários:** Ao clicar no botão de salvar, o nome do usuário é adicionado à lista e a tabela é atualizada.
* **Edição de usuários:** Ao clicar no botão de editar, o nome selecionado é preenchido no campo de entrada para edição. **Observação:** A implementação atual da função `editar` não salva as alterações. Seria necessário adicionar lógica para atualizar o array `dadosLista` e a tabela HTML após a edição.
* **Exclusão de usuários:** Ao clicar no botão de excluir, o usuário selecionado é removido da lista e da tabela.

**Observações:**

* **Armazenamento local:** O código atualmente armazena os dados em um array JavaScript, o que significa que os dados serão perdidos ao fechar a página. Para persistir os dados, considere utilizar o localStorage ou um banco de dados.
* **Melhorias:**
    * **Validação:** Implementar uma validação mais robusta para o campo de email e senha.
    * **Busca:** Adicionar um campo de busca para facilitar a localização de usuários na lista.
    * **Edição:** Corrigir a função `editar` para salvar as alterações.
    * **Interface:** Melhorar a interface do usuário utilizando CSS.
    * **Framework:** Utilizar um framework JavaScript para facilitar o desenvolvimento e a organização do código.

**Exemplo de HTML:**

```html
<input type="email" id="loginEmail" placeholder="Email">
<input type="password" id="loginSenha" placeholder="Senha">
<button onclick="acessar()">Acessar</button>

<input type="text" id="nomeUser" placeholder="Nome do Usuário">
<button onclick="salvarUser()">Salvar</button>

<table id="tabela"></table>
## Tecnologias Utilizadas

* [<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [<code><img height="32" src="https://blog.netscandigital.com/wp-content/uploads/2023/07/O-que-e-o-Google-Bard.png" alt="Bard"/></code>](https://bard.google.com/chat?hl=pt)
* [<code><img height="32" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VisualStudio"/></code>](https://code.visualstudio.com/)
* [<code><img height="32" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></code>](https://github.com/)
* [<code><img height="32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="Css3"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [<code><img height="32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
 
