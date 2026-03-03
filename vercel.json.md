# vercel.json — Explicación

## ¿Por qué existe este archivo?

Cuando usás **React Router** (rutas como `/admin`, `/menu`, `/contacto`) y deployás en Vercel,
el servidor busca un archivo físico en esa ruta y no lo encuentra → devuelve **404 NOT_FOUND**.

Este archivo le dice a Vercel: "para cualquier ruta, servile el `index.html`
y dejá que React Router se encargue de mostrar la página correcta".

---

## ¿Qué hace cada parte?

```json
{
  "rewrites": [
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```

- **`rewrites`**: reglas que redirigen URLs a otros destinos sin cambiar la URL visible
- **`source`**: patrón de URLs que se aplica la regla
  - `/((?!api/).*)` = "toda URL que NO empiece con `api/`"
  - El `(?!api/)` es un "negative lookahead" de regex: excluye las rutas `/api/*`
  - Si no excluimos `/api/`, las Vercel Functions (como `/api/save-menu`) también
    quedarían redirigidas al index.html y dejarían de funcionar
- **`destination`**: a dónde se redirige → siempre `index.html` (la app de React)

---

## Regla de oro

**Todo proyecto Vite + React Router deployado en Vercel necesita este archivo.**
Si en el futuro creás otro proyecto igual y ves 404 al navegar directo a una ruta,
es esto lo que falta.
