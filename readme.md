Ce CLI permet d'uploader une documentation VuePress sur le CDN du SEDOO.

# Utilisation 

## Dépendance 

Le CLI s'ajoute dans les devDependencies du projet via la commande 

```
npm i @sedoo/sedoo-doc-deploy --save-dev
```

## Ajout du script

Dans la partie *scripts* du fichier *package.json*, il faut ajouter la ligne suivante

```
"scripts": {
        ...
        "docs:deploy": "node ./node_modules/@sedoo/sedoo-doc-deploy/index.js -p unidoo"
        ...
    },
```

## Exécution

L'execution s'effectue via la commande ```npm run docs:deploy```
