# MathCrack 3.0

Aplicación educativa Angular para estudiar y practicar **Matemáticas de 3.º de Primaria**.

## Base pedagógica

El curso está organizado en 12 temas siguiendo el mapa de contenidos del libro de Matemáticas 3.º de Primaria indicado para el proyecto. Las explicaciones y ejercicios de la aplicación están redactados específicamente para MathCrack.

Cada contenido sigue el patrón:

1. **Aprender**: explicación breve, clara, ideas clave, ejemplo y truco.
2. **Practicar**: varios ejercicios reales de cálculo, razonamiento, geometría o medida.
3. **Comprueba tu progreso**: mezcla ejercicios de lo trabajado en la unidad; no introduce teoría nueva.

En cálculo, la aplicación dispone de bancos de ejercicios y selecciona hasta 10 por intento.

## Stack

- Angular 20
- Standalone components
- Zoneless
- Signals
- TypeScript strict
- SCSS responsive/mobile-first
- Vitest
- ESLint
- Prettier
- GitHub Actions + GitHub Pages

## Comandos

```bash
npm install
npm start
npm run format
npm run format:check
npm run lint
npm run lint:fix
npm test
npm run build
npm run check
```

## GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` calcula automáticamente el nombre del repositorio para configurar `base-href`. En GitHub activa:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

## Identidad visual

Color principal: naranja. Fondo y superficies: blanco/crema muy claro.
