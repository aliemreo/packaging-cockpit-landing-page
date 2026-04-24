# Packaging Cockpit Türkiye — Tanıtım Sitesi

MAT Consultancy'nin Packaging Cockpit ürününü Türkiye'de temsil ettiği iş ortaklığını tanıtan, demo talebi ve iletişim formu içeren tek sayfa B2B SaaS landing page.

**Canlı site:** [packagingcockpit.matpack.net](https://packagingcockpit.matpack.net)

---

## Teknoloji Stack

- **Framework:** [Astro](https://astro.build) v4 (statik site üretici)
- **CSS:** [Tailwind CSS](https://tailwindcss.com) v3 + özel brand renkleri
- **Form işleme:** [Formspree](https://formspree.io)
- **SEO:** astro-seo, @astrojs/sitemap
- **İkonlar:** astro-icon
- **Deployment:** GitHub Pages + GitHub Actions
- **Alan adı:** packagingcockpit.matpack.net (CNAME)

---

## Lokal Geliştirme

### Gereksinimler

- Node.js 18 veya üzeri
- npm (veya pnpm)

### Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:4321` adresini açın.

---

## Build

```bash
npm run build
```

Derlenen dosyalar `dist/` klasörüne çıkar. Build öncesi `dist/` silinir ve yeniden oluşturulur.

Build çıktısını önizlemek için:

```bash
npm run preview
```

---

## Deployment (GitHub Pages)

`main` dalına her push yapıldığında GitHub Actions otomatik olarak siteyi deploy eder:

1. `.github/workflows/deploy.yml` iş akışı tetiklenir
2. Node 20 kurulur, `npm ci` çalışır, `npm run build` çalışır
3. `dist/` klasörü GitHub Pages'e yüklenir

### İlk kurulum için repository ayarları

1. GitHub repo ayarlarında **Settings → Pages → Source → GitHub Actions** seçin
2. **Custom domain:** `packagingcockpit.matpack.net` girin
3. **Enforce HTTPS** kutusunu işaretleyin

### DNS ayarları (domain hosting şirketinize ekleyin)

```
Type:   CNAME
Name:   packagingcockpit
Value:  <github-kullanici-adi>.github.io
TTL:    3600
```

---

## Formspree Form ID Ekleme

1. [Formspree.io](https://formspree.io) üzerinde bir hesap oluşturun ve yeni form ekleyin
2. Formspree'nin size verdiği form ID'yi kopyalayın (örn. `xrgvkpqz`)
3. Aşağıdaki dosyayı düzenleyin:

**Dosya:** `src/components/sections/ContactForm.astro`

```html
<!-- Bu satırı bulun -->
action="https://formspree.io/f/YOUR_FORM_ID"

<!-- YOUR_FORM_ID yerine gerçek ID'yi yazın, örneğin: -->
action="https://formspree.io/f/xrgvkpqz"
```

4. Değişikliği kaydedin ve `main` dalına push edin — site otomatik güncellenir.

---

## İçerik Güncelleme Rehberi

| İçerik | Dosya |
|--------|-------|
| Hero başlık & alt başlık | `src/components/sections/Hero.astro` |
| Problem kartları | `src/components/sections/Problem.astro` |
| Platform özellikleri (6 kart) | `src/components/sections/Solution.astro` |
| Nasıl çalışır adımları | `src/components/sections/HowItWorks.astro` |
| Kullanıcı personaları | `src/components/sections/UseCases.astro` |
| Neden MAT değer önerileri | `src/components/sections/WhyMAT.astro` |
| Referans markalar & bilimsel dayanak | `src/components/sections/TrustSection.astro` |
| SSS (Sıkça Sorulan Sorular) | `src/components/sections/FAQ.astro` |
| İletişim formu alanları | `src/components/sections/ContactForm.astro` |
| Navigasyon menüsü | `src/components/navbar/navbar.astro` |
| Footer içeriği & iletişim bilgileri | `src/components/footer.astro` |
| SEO meta & JSON-LD | `src/layouts/Layout.astro` |
| Marka renkleri | `tailwind.config.cjs` → `colors.brand` |

---

## Marka Renkleri

```js
// tailwind.config.cjs
brand: {
  teal:  "#0F766E",  // Ana renk (Teal-700)
  navy:  "#1E3A8A",  // İkincil renk (Blue-900)
  amber: "#F59E0B",  // Aksan / CTA (Amber-500)
}
```

Tailwind sınıflarında `bg-brand-teal`, `text-brand-navy`, `border-brand-amber` gibi kullanın.

---

## Lisans

Site kodu MIT lisansı altındadır. Packaging Cockpit tescilli markası Packaging Cockpit GmbH'ye aittir.
