# Santino Basaldella — Hecho de agua.

Dossier web de Santino Basaldella, atleta argentino de SUP Race. Página única en HTML, CSS y JS vanilla, sin dependencias ni build.

Publicado en **https://santino-basaldella.vercel.app** (Vercel, se actualiza con cada push a `main`).

## Estructura

```
index.html   Contenido en español (idioma base)
style.css    Estilos
app.js       Menú con sección activa, contacto y pestañas de resultados
i18n.js      Traducción al inglés y selector ES / EN
assets/      Fotos y logos de sponsors
```

## Idioma

- Botón **ES | EN** en el encabezado.
- Link directo en inglés: `?lang=en` al final de la URL.
- Las frases en inglés se editan en `i18n.js`; el español, en `index.html`.

## Ver en local

Abrir `index.html` con doble clic. No necesita servidor.

## Publicar

Cualquier hosting estático sirve (GitHub Pages, Vercel, Netlify): la raíz del repo es el sitio.

## Pendiente antes de publicar

- [x] WhatsApp e Instagram en el diálogo de contacto.
- [ ] Mail de contacto (opcional; hoy no hay botón de mail).
- [ ] Puestos de Sarasota 2024, Mondello y Barcelona (hoy se muestran con el ícono de ola).
