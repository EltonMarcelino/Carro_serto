# CARRO SERTO — Blog automotivo

Blog em português feito com Astro, HTML semântico e CSS. Hospedagem estática gratuita possível em Cloudflare Pages.

## Desenvolvimento local

Instale Node.js 20.19+ ou 22.12+ (compatível com Astro 5) e execute:

```bash
npm install
npm run dev
```

Abra a URL exibida no terminal, normalmente http://localhost:4321.

## Como publicar na Cloudflare Pages

1. Crie conta no GitHub e um repositório chamado `carro-serto`.
2. Envie os arquivos DE DENTRO da pasta `carro-serto` ao repositório (não envie o arquivo ZIP fechado).
3. No Cloudflare Dashboard, abra **Workers & Pages → Create application → Pages → Connect to Git**.
4. Selecione o repositório e configure:
   - Framework preset: **Astro**
   - Build command: **npm run build**
   - Build output directory: **dist**
   - Root directory: **/**
   - Production branch: **main**
   - Environment variable (opcional mas recomendado): **SITE_URL = https://URL-REAL-DO-SEU-SITE**
5. Publique. A Cloudflare fornecerá uma URL `*.pages.dev` gratuita.
6. Ajuste `SITE_URL` para a URL recebida e faça um novo commit, para corrigir links canônicos, sitemap, OG e RSS.
7. Cadastre o endereço no Google Search Console e no Bing Webmaster Tools, enviando o `/sitemap-index.xml`.

**Obs.:** trocar `SITE_URL` por outro domínio sem que o domínio esteja acessível prejudica o SEO.

## Publicar uma matéria todos os dias

1. Copie um `.md` da pasta `src/content/blog/`.
2. Renomeie o arquivo com slug curto sem acentos, por exemplo `novo-suv-ano-modelo.md`.
3. Edite cabeçalho YAML: `title`, `description`, `category`, `date`, `image`, `imageAlt`, `tags`.
4. Escreva o conteúdo abaixo da segunda linha `---` de fechamento do cabeçalho.
5. Faça commit no GitHub. Cloudflare Pages fará novo deploy automaticamente.

Categorias aceitas: `Lançamentos`, `Guias`, `Elétricos`, `Opinião dos donos`.

## Como usar a Adsterra

O layout reserva área de publicidade em `src/pages/artigos/[slug].astro`, mas não carrega anúncios ainda. Após cadastrar e aprovar o domínio, cole o código fornecido pela Adsterra no espaço publicitário apropriado **somente depois de revisar consentimento, privacidade e regras da plataforma**. Teste a experiência mobile e evite formatos intrusivos.

## Importante antes de ir ao ar

- Substitua os avisos editoriais de contato na página `/contato/` pelo e-mail oficial.
- Revise `/politica-de-privacidade/` para refletir hospedagem, analytics, publicidade e tratamento real dos dados.
- Artigos iniciais são **guias originais de exemplo**, não notícias específicas e não contêm depoimentos inventados.
- Para publicar lançamento real, cite a fonte do fabricante e registre versões, datas e preços confirmados, nunca inventados.
- Desenhos de carros são ilustrações genéricas em SVG, não fotos de modelos específicos.
- Use imagens próprias/licenciadas com autorização e crédito quando exigido.

## Estrutura

`src/content/blog` posts em Markdown; `src/pages` rotas; `src/layouts` SEO global; `src/components` cards; `public/imagens` ilustrações. RSS em `/rss.xml`, sitemap em `/sitemap-index.xml`, robots em `/robots.txt`.
