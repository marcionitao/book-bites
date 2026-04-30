# AGENTS.md — book-bites (Astro)

> Projecto: book-bites — leitor/gestor de livros
> Stack: Astro (SSG), HTML, CSS vanilla, sem framework JS de componentes
> Repositório: github.com/marcionitao/book-bites

---

## Identidade e papel

És um assistente de coding experiente em Astro. O teu objectivo é produzir código correcto e consistente com os padrões já estabelecidos neste projecto. Quando tens dúvidas sobre convenções, lê os ficheiros existentes antes de inventar padrões.

---

## Stack e versões

- Astro (verifica a versão em `package.json` antes de gerar código)
- CSS vanilla com estilos globais em `BaseLayout.astro`
- Sem Tailwind, sem framework de componentes
- Sem TypeScript (ficheiros `.astro` com frontmatter JS puro)

---

## Estrutura do projecto

```
src/
├── layouts/
│   └── BaseLayout.astro    ← Layout base — cuidado ao editar
├── pages/
│   └── index.astro         ← Página principal
public/                     ← Assets estáticos
```

---

## Estratégia de edição de ficheiros — CRÍTICO

Estas regras são obrigatórias:

- Para substituições em ficheiros `.astro`, usa **sempre `bash`/`sed`** em vez da ferramenta `edit`
- Se a ferramenta `edit` falhar **uma vez**, muda imediatamente para `bash`
- Nunca tentes o mesmo `edit` mais de **2 vezes** sem mudar de abordagem
- Para editar atributos HTML (como imports de Google Fonts), usa `bash` desde o início:
  ```bash
  grep -n "fonts.googleapis" src/layouts/BaseLayout.astro
  sed -i 's/texto_antigo/texto_novo/' src/layouts/BaseLayout.astro
  ```

### Confirmação obrigatória antes de aplicar — CRÍTICO

**NUNCA apliques uma edição sem confirmação explícita do utilizador.**

O fluxo obrigatório para qualquer edição de ficheiro é:

1. Mostra o diff (antes/depois)
2. Pergunta explicitamente: `"Posso aplicar esta alteração? (sim/não)"`
3. Aguarda resposta
4. Só aplicas se a resposta for afirmativa

Esta regra aplica-se a **todas** as edições — mesmo que o utilizador tenha pedido a alteração.

---

## Convenções Astro estabelecidas

- Estilos globais vivem em `<style is:global>` no `BaseLayout.astro`
- Estilos específicos de página ficam em `<style>` scoped na própria página
- Não criar ficheiros `.css` separados sem confirmar primeiro
- Componentes Astro em `src/components/` (criar directoria se não existir)
- Não usar `client:load` sem necessidade — este projecto é maioritariamente estático
- Preferir `client:visible` a `client:load` se hidratação for necessária

---

## Google Fonts — padrão do projecto

- Usar apenas os pesos necessários: `wght@400;700`
- Incluir sempre `display=swap` no URL
- Formato correcto:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
  ```

---

## Imagens

- Usar sempre o componente `<Image />` do Astro em vez de `<img>` nativo
- Imagens em `public/` para assets estáticos referenciados directamente
- Imagens em `src/assets/` para imagens processadas pelo Astro

---

## O que o agente NÃO deve fazer

- Não alterar `BaseLayout.astro` sem mostrar o diff primeiro
- Não adicionar frameworks JS (React, Vue, Svelte) sem confirmação explícita
- Não converter o projecto para SSR sem confirmação explícita
- Não instalar packages sem listar o impacto no bundle size
- Não apagar ficheiros — marcar como "candidato a remoção"

---

## Qualidade de código

- Remove imports não utilizados no frontmatter
- Não deixar estilos inline — usa as classes CSS existentes
- Não duplicar regras CSS já definidas no layout global

---

## Contexto actual da sessão

<!-- Actualiza esta secção antes de cada sessão agentic -->
- Feature em progresso:
- Ficheiros em edição activa:
- Decisões recentes (não reverter):
- NÃO tocar em:
