# Creator Academy — versão inicial

Site/PWA em português para aprender sobre YouTube, OBS Studio, lives e estratégia de conteúdo.

## Como testar no Windows
1. Extraia a pasta.
2. Abra `index.html` no navegador para testar as funções básicas. Para testar a instalação/offline, sirva a pasta por HTTPS ou por um servidor local.
3. Para publicar gratuitamente, crie um repositório no GitHub, envie todos os arquivos e ative **Settings → Pages → Deploy from a branch → main / root**.
4. Aguarde o link do GitHub Pages e abra-o no iPhone pelo Safari.

## Como adicionar à Tela de Início no iPhone
1. Abra o site publicado no Safari.
2. Toque no botão **Compartilhar**.
3. Escolha **Adicionar à Tela de Início**.
4. Confirme o nome e toque em **Adicionar**.

## O que funciona nesta versão
- Trilhas com aulas e missões práticas.
- Marcação de aulas concluídas, guardada no dispositivo.
- Filtros por assunto.
- Links para vídeos tutoriais do YouTube relacionados a cada aula.
- Checklist de live salvo localmente.
- Manifesto e service worker para experiência PWA.

## Limitações
- O mentor é uma ferramenta de regras, não uma IA conectada a um modelo online.
- O progresso é salvo apenas no navegador/dispositivo e não sincroniza entre aparelhos.
- O projeto não usa contas, pagamentos nem coleta dados.
- Para publicação PWA, use HTTPS. O ícone SVG pode não ser aceito por todos os fluxos de instalação; se necessário, exporte ícones PNG 192×192 e 512×512 e atualize `manifest.json`.

## Estrutura
- `index.html` — interface
- `styles.css` — design responsivo
- `app.js` — cursos, progresso, links de vídeos e checklist
- `manifest.json` — metadados PWA
- `service-worker.js` — cache offline
- `icons/icon.svg` — ícone
