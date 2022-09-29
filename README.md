# Practice ![Directus](https://a11ybadges.com/badge?logo=directus) ![Eleventy](https://a11ybadges.com/badge?logo=eleventy)

Realización de una pequeña práctica para reforzar los conocimientos sobre la arquitectura de desarrollo web **JAMStack**. Para ello se usará **11ty** como generador de sitios estáticos basado en JavaScript y **Directus** como sistema de gestión de contenidos. 

## Requisitos

- Se usará **11ty** para el frontal de la aplicación. 
- El modelado de datos se realizará mediante **Directus**.
- La web dispondrá de un menú de navegación con diferentes categorías.
- Cada categoría podrá tener o no artículos.
- Cada artículo pertenece a una única categoría.
- Se establecerá el cacheado en un día.

## Primeros pasos

### Instalación de Directus

Instalar con npm:

```console
npm init directus-project <nombre del directorio de la api>
```

Lanzar la aplicación:

```console
cd <ruta del directorio de la api>
npx directus start
```

Servidor lanzado en: http://localhost:8055

### Instalación de 11ty y caché

Instalar con npm:

```console
npm init -y
npm i @11ty/eleventy
npm i @11ty/eleventy-cache-assets
```

Configurar el `package.json` para lanzar la aplicación

```console
"scripts": {
    "start": "npx eleventy --serve"
  },
```

Lanzar la aplicación:

```console
cd <ruta del directorio de la app>
npm start
```

Servidor lanzado en: http://localhost:8080

## Modelo de datos

-  **Categories**: id (*UUID*), name (*string*) y articles (*oneToMany*)
-  **Articles**: id (*UUID*), title (*string*), content (*string*) y category (*ManyToOne*)

## Arquitectura

Está será la estructura de carpetas de nuestra aplicación

```console
app
|__ dist
|__ src
|   |__ _data
|   |   |__ articles
|   |   |__ categories
|   |__ _includes
|   |   |__ layouts
|   |   |   |__...
|   |   |__ partials
|   |      |__ ...
|   |__ css
|   |    |__ style.css
|   |__ article.md
|   |__ category.md
|   |__ index.md 
|__ .eleventy.js 

```

## Configuración

Se establecerá la configuración en el archivo `.eleventy.js`

```javascript
module.exports = config => {
    return {        
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}
```

## Construido con...

* [Directus](https://docs.directus.io/) - Usado como API y gestor de bases de datos
* [11ty](https://es.reactjs.org/) - Usado como generador de sitios estáticos