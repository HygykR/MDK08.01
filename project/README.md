# NailArt

Учебный проект: Gulp + SCSS + Bootstrap 5.

## Запуск

```bash
npm install
npm run dev
```

После запуска откройте адрес, который покажет BrowserSync
(обычно `http://localhost:3000`).

Собрать проект без запуска сервера:

```bash
npm run build
```

## Страницы

- `src/index.html` — главная: jumbotron, форма регистрации, кнопки.
- `src/catalog.html` — каталог: карусель и 6 карточек.
- `src/product.html` — карточка товара с аккордеоном.
- `src/about.html` — страница о магазине.

## Шаблоны

Общие части лежат в `src/template` и подключаются так:

```html
//= template/header.html
//= template/footer.html
```

## Bootstrap

Bootstrap подключён в `src/scss/style.scss`. Сначала меняются переменные
(цвета, шрифты, размеры заголовков), потом импортируется Bootstrap.
Своих CSS-правил нет — используются классы Bootstrap.
