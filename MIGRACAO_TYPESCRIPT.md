# TypeScript no Carro Certo

O Astro usa arquivos `.astro` para páginas e componentes, com **frontmatter em TypeScript**, e arquivos `.ts` para dados, endpoints e configuração. Converter `.astro` para `.tsx` quebraria o roteamento do blog; eles foram preservados e receberam tipagem explícita.

Alterações:
- `astro.config.ts` em vez de `.mjs`;
- `tsconfig.json` com perfil `astro/tsconfigs/strict`;
- tipagem dos componentes, propriedades de rotas e pesquisa client-side;
- scripts `npm run build` e `npm run check`;
- artigos Markdown e estilos CSS preservados.

## Rodar

```bash
npm install
npm run check
npm run build
```

Publicação Cloudflare Pages: comando `npm run build`, saída `dist`.
