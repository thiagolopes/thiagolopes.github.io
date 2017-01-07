# Minha Github Page!

## Caracteristicas

* Pagina estática;
* Pre-processador SASS;
* Gulp;
* jQuery (futuro);
* Usando unsemantic e reset;
* Desenvolvida com mobile-first;
* Simples

## Npm, Gulp:

run: `npm install --save-dev`

gulp: `gulp`

## Files

`src` -> Dir. contendo sass, imagens e js;

`dist` -> Dir. contendo sass compilado (css), sourcemaps para o sass (melhor
debub) e js min;

## Task do Gulp

`sass` -> compila e gera do sourcemaps;

`browserSyncWatcher` -> sobe o browser-sync com watch nas pastas `css` e `js`;

`default` -> task padrao para rodar em ambiente de desenvolvimento

`producao` -> task para rodar em producão ( ainda inexistente )
