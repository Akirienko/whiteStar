# WHITE STAR - Індустріально-логістичний парк

Nuxt 3 landing page з підтримкою i18n (EN/UA), Tailwind CSS, та SSG.

## 🚀 Швидкий старт

### Встановлення залежностей

```bash
npm install
```

### Запуск у режимі розробки

```bash
npm run dev
```

Сайт буде доступний за адресою: `http://localhost:3000`

---

## 📦 Білд та деплой

### SSG (Static Site Generation) - Рекомендовано

#### 1. Згенерувати статичний сайт

```bash
npm run generate
```

Статичні файли будуть згенеровані у папці `.output/public/`

#### 2. Локальний preview

```bash
npm run preview
```

#### 3. Деплой на сервер

Після `npm run generate` завантажте вміст папки `.output/public/` на ваш хостинг.

**Підтримувані платформи:**
- Netlify
- Vercel
- GitHub Pages
- Будь-який статичний хостинг (nginx, Apache, CloudFlare Pages, тощо)

---

## 🌐 Деплой на різні платформи

### Netlify

1. Підключіть репозиторій до Netlify
2. Налаштування білду:
   - **Build command:** `npm run generate`
   - **Publish directory:** `.output/public`

### Vercel

1. Підключіть репозиторій до Vercel
2. Vercel автоматично визначить Nuxt проєкт
3. Build command: `npm run generate`

### Nginx/Apache (VPS або dedicated сервер)

#### Крок 1: Згенеруйте білд локально або через CI/CD

```bash
npm run generate
```

#### Крок 2: Завантажте файли на сервер

```bash
scp -r .output/public/* user@your-server:/var/www/whitestar
```

#### Крок 3: Налаштуйте Nginx

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/whitestar;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Кешування статичних файлів
    location ~* \.(jpg|jpeg|png|gif|webp|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip стиснення
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
}
```

#### Крок 4: Перезапустіть Nginx

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Apache (VPS)

Створіть `.htaccess` у корені сайту:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Кешування
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```

---

## 🛠️ Структура проєкту

```
whiteStar/
├── assets/           # Глобальні стилі
├── components/       # Vue компоненти
│   ├── Sections/    # Секції лендінгу
│   └── UI/          # UI компоненти
├── i18n/
│   └── locales/     # Переклади (en.json, ua.json)
├── pages/           # Роутинг
├── public/          # Статичні файли (картинки, шрифти)
└── nuxt.config.ts   # Конфігурація Nuxt
```

---

## 🌍 i18n - Інтернаціоналізація

Проєкт підтримує 2 мови:
- **Англійська (en)** - мова за замовчуванням
- **Українська (ua)**

Переклади знаходяться у `i18n/locales/`

---

## 🎨 Технології

- **Nuxt 3** - Vue.js фреймворк
- **Tailwind CSS** - Utility-first CSS
- **i18n** - Багатомовність
- **SSG** - Static Site Generation
- **WebP** - Оптимізовані зображення

---

## 📝 Додаткова інформація

### Оптимізація продакшн білду

Проєкт вже налаштований для оптимального SSG:
- ✅ Lazy loading зображень
- ✅ Responsive images (mobile/desktop)
- ✅ CSS/JS мінімізація
- ✅ WebP формат для картинок

### Зміна перекладів

Редагуйте файли у `i18n/locales/`:
- `en.json` - англійська
- `ua.json` - українська

### Додавання нових секцій

1. Створіть компонент у `components/Sections/`
2. Додайте переклади у `i18n/locales/`
3. Імпортуйте компонент у `pages/index.vue`

---

**Built with ❤️ using Nuxt 3**
