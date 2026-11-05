# glam.az Veb-sayt İş Planı

> Bu fayl işçinin (Claude Code) dəftəridir. Hər işi bitirəndə `[ ]` yerinə `[x]` yaz və dərhal commit et.
> Yenidən başlayanda ƏVVƏL bu faylı oxu və yalnız `[ ]` olan işlərdən davam et.

## Layihə haqqında

- Mövcud: React Native CLI mobil app, admin panel, Node.js (Express) backend.
- Backend: Express, PostgreSQL (pg), JWT + cookie, socket.io, Cloudinary, Swagger sənədi.
- Məqsəd: mobil appın funksiyaları ilə eyni olan, Google-da tapıla bilən (SEO) veb-sayt.
- Texnologiya: **Next.js**.
- Veb-sayt `glam-web` adlı ayrı layihədir (ayrı git repo). `glam-mobile`, `glam-backend` və `glam-admin` onun yanındakı qardaş qovluqlardır.

## Qaydalar

1. `glam-mobile` və `glam-admin` qovluqlarına toxunma, onları yalnız oxu. Bütün yeni kod `glam-web`-də yazılır.
2. `glam-backend`-də dəyişiklik lazımdırsa (məsələn CORS, cookie ilə giriş), orada ayrı branch-da et (`web-support`) və aşağıdakı "Backend qeydləri" bölməsinə yaz. Mobil app və admin pozulmamalıdır.
3. `main` branch-a birbaşa yazma. Hər iş ayrı branch-da olsun (`web/foundation`, `web/auth` və s.).
4. Hər işi bitirəndən sonra `build` və `lint` işlət. Keçməsə, düzəlt, sonra `[x]` qoy.
5. Mənə sual vermə. Qərar verməli olsan, ən sadə yolu seç və "Qərarlar" bölməsinə yaz.
6. Eyni anda ən çox 2 agent işlət.
7. **Dizayn yanaşması.** Marka mobil appla eyni qalır: rənglər, şrift, künc yumruluğu, kölgələr, ikonlar, komponentlərin görünüşü. Amma veb-saytın səhifə quruluşunu, yerləşməsini və kompüter üçün təcrübəsini sən özün düşün: geniş ekranda məzmunun necə düzüləcəyini, ana səhifənin görünüşünü, boşluqları, naviqasiyanı və s. veb üçün ən yaxşı şəkildə qur. Mobilin görünüşünü kor-koranə köçürmə, ondan ilham al. Yeni rəng, şrift və ya komponent üslubu icad etmə.
8. `docs/design.md` faylı marka dizaynının (rənglər, şrift, ölçülər, komponentlər) tək mənbəyidir. Bütün ekranlar ondan istifadə etsin, rəng və ölçüləri hər yerdə təkrar yazma.
9. **Açıq (light) və tünd (dark) rejim məcburidir.** Default sistem seçimidir, istifadəçi menyudakı düymə ilə əl ilə də dəyişə bilməlidir. Rənglər yalnız `src/styles/tokens.css`-dən gəlsin, heç yerdə hex yazma. Hər qrupu bitirəndə səhifələri hər iki rejimdə yoxla: mətn oxunaqlı olsun, kontrast kifayət etsin, heç nə görünməz qalmasın.
10. **Mobildə nə yoxdursa, vebdə də yoxdur.** Veb yalnız `glam-mobile`-dakı funksiyaları edir, öz tərəfindən yeni funksiya və ya ekran əlavə etmə. İstisnalar: SEO-nun texniki hissəsi (başlıq, təsvir, sitemap, robots) və `GET /products/:id` endpointi. Mobildə yarımçıq olan hissələr (OTP, bildirişlər) vebdə də mobil qədər qalsın, onları vebdə tamamlama. Mobildə olmayan işlər "Sonraya saxlandı" bölməsindədir.
11. **Responsivlik məcburidir.** Sayt telefonda, planşetdə və kompüterdə (kiçik və böyük ekran) düzgün görünsün və işləsin. Əvvəl telefon üçün yaz (mobile-first), sonra geniş ekranlara uyğunlaşdır. Breakpointlər `src/styles/tokens.css`-də tək yerdə olsun. Üfüqi scroll heç bir ölçüdə olmasın, düymə və toxunma sahələri telefonda rahat basılsın (ən az ~44px), kartların sütun sayı ekrana görə dəyişsin, şəkillər Next.js `Image` ilə ekrana uyğun yüklənsin, modal və formlar kiçik ekrana sığsın, kompüterdə məzmun çox geniş sətirlərə yayılmasın. Hər qrupdan sonra səhifələri 375, 768, 1280 və 1536px enlərində yoxla. Yoxlaya bilməsən, "Yoxlanmayanlar" bölməsinə yaz.

## Addım 1. Analiz (əvvəl bu bitməlidir)

- [x] Mobil appın bütün ekranlarını siyahıya al (aşağıdakı "Ekranlar" bölməsinə yaz)
- [x] Hər ekranın hansı backend endpointlərini işlətdiyini Swagger-dən yaz
- [x] Backend-in CORS və cookie ayarlarını yoxla, veb üçün nə çatmır yaz
- [x] Veb üçün qovluq strukturunu qərara al
- [x] Mobil appın dizayn qaydalarını çıxar: rənglər, şriftlər, mətn ölçüləri, boşluqlar, künc yumrulığı, kölgələr, düymə və kart formaları, ikonlar, loqo. Hamısını `docs/design.md`-ə yaz
- [x] Mobildəki ortaq komponentlərin siyahısını çıxar (düymə, input, kart, menyu, modal və s.) və `docs/design.md`-ə əlavə et
- [x] Mobil appın şəkillərini və ikonlarını (loqo daxil) veb üçün `glam-web`-ə kopyala

## Addım 2. Əsas (Addım 1-dən sonra, digərlərindən əvvəl)

- [x] `glam-web` kökündə Next.js layihəsini qur (Next 16.4, React 19.3, TypeScript, Tailwind v4, App Router, `src/`)
- [x] Backend ilə əlaqə üçün ortaq API client yaz (`src/lib/api`: server üçün `serverApi`, brauzer üçün `api` → BFF `/api/backend/*`)
- [x] Giriş sistemini qur (cookie ilə, backend uyğunlaşdırılsa) — backend dəyişmədən: `/api/auth/*` route handler-ləri + httpOnly cookie, refresh `src/proxy.ts`-də, client üçün `useAuth()`. Giriş/qeydiyyat səhifələrinin UI-si Qrup A-dadır
- [x] Dizayn sistemi: `docs/design.md`-ə əsasən rəngləri, şriftləri və ölçüləri tək yerdə təyin et (mobil appla eyni)
- [x] Ortaq komponentləri düzəlt: düymə, input, kart, modal və s., mobildəkilərlə eyni görünüşdə (`src/components/ui`: Button, Input, PhoneInput, SearchBar, Chip, Badge/StatusBadge, Card/StatCard, ProductCard/ProductGrid, Avatar, ListRow/SettingsListItem, FollowButton, Modal (sheet/dialog), ConfirmDialog, Toast, Skeleton, EmptyState, SectionTitle, Icon). OtpInput, DateField, ImageGallery, PriceTicket və chat komponentləri aid olduqları ekranlarla (Addım 3) ediləcək
- [x] Ümumi layout: yuxarı menyu, aşağı hissə, səhifə qabığı (`src/components/layout`: Header — kompüterdə tab-lar yuxarıda, BottomNav — mobil endə mobil tab bar, Footer, PageShell/Container, PageHeader (ScreenHeader), Logo; route qrupları `(site)` və `(auth)`, 404 səhifəsi, favicon/app ikonu)
- [x] Build və lint keçsin (`npm run build`, `npm run lint`, `tsc --noEmit` — xətasız, xəbərdarlıqsız)

## Addım 2.5. Yeni qaydalara uyğunlaşdırma (Addım 3-dən əvvəl)

- [x] Qaydalar 7, 9, 10, 11-ə görə mövcud Addım 2 işini yoxla: layout, komponentlər, Header/Footer/BottomNav 375, 768, 1280, 1536px enlərində düzgündürmü — Playwright ilə yoxlanıldı (`scripts/screenshots.mjs`, `/dev/ui`). Düzəldildi: PageHeader kompüterdə tam enli kart, Footer-dən mobildə olmayan səhifə linkləri çıxarıldı, kiçik düymələrə ≥44px toxunma sahəsi (`touch-target`). Üfüqi scroll yoxdur.
- [x] Header-də açıq/tünd rejim dəyişdirmə düyməsi var və işləyirmi (yoxdursa əlavə et) — `ThemeToggle` (ay ikonu), `data-theme` + `localStorage`
- [x] Bütün ortaq komponentləri hər iki rejimdə yoxla (xüsusilə Toast info variantı, Badge, Chip, Modal, Input) — tünd rejimdə düzəldildi: destructive düymə, success/error toast, "İzlə" mətni (`text-on-strong`), avatar hərfi və modal ikonu (`on-primary-light`); Badge hizalanması; toast modalın üstündə görünür (`popover`)
- [x] Breakpointlərin `tokens.css`-də tək yerdə olduğunu yoxla — `@theme --breakpoint-*` tokens.css-də; `breakpoints.ts` (yalnız `next/image sizes`) lint ilə yoxlanılır
- [x] Build və lint keçsin

## Addım 3. Ekranlar (Addım 2.5 bitəndən sonra, ayrı agentlərlə)

Hər qrupu bitirəndə: build və lint keç, 4 enində (375, 768, 1280, 1536px) və hər iki rejimdə (light/dark) yoxla, sonra `[x]` qoy.

### Qrup A: Hesab (branch `web/auth`)

- [x] Giriş səhifəsi (`/giris`) — telefon + şifrə, "Qonaq kimi daxil ol" → ana səhifə, `?next=` ilə geri qayıtma. Kompüterdə iki sütun (brend paneli + forma). Dil seçimi pill-i yoxdur (yalnız az)
- [x] Qeydiyyat səhifəsi (müştəri/mağaza seçimi, şəhər) (`/qeydiyyat`) — hesab növü kartları, mağaza bildiriş banneri, şəhər modalı (axtarışlı), şifrə ≥8, razılıq checkbox-u keçidsiz
- [x] Profil səhifəsi və profili redaktə (`/profil`, `/profil/duzelis`) — müştəri: kart, statistikalar, ayarlar, qaranlıq rejim açarı, çıxış təsdiqi; mağaza: `/stores/me` kartı, aktiv elan/reytinq, ayarlar. Redaktə yalnız müştəri (mobil kimi)
- [x] Parolu unutdum və OTP (mobildə OTP backend-ə qoşulmayıb, vebdə də mobil qədər) (`/sifremi-unutdum`, `/sifremi-unutdum/kod`) — 800ms gözləmə, 59 san. taymer, 4 rəqəmli kod; backend sorğusu yoxdur

### Qrup B: Əsas səhifələr

- [ ] Ana səhifə
- [ ] Siyahı / kataloq səhifəsi
- [ ] Axtarış və filtr
- [ ] Məhsul detalı səhifəsi (bunun üçün `glam-backend`-də `web-support` branch-ında `GET /products/:id` əlavə et)
- [ ] Mağazalar siyahısı və mağaza səhifəsi

### Qrup C: Əsas funksiya

- [ ] "Mağazaya yaz": məhsul detalından chat açılır (mobildəki kimi)
- [ ] Chat siyahısı və söhbət (socket.io)
- [ ] Bildirişlər (mobildə hələ mock, backend endpointi yoxdur; vebdə də mobil qədər)
- [ ] Sevimlilər, izlənilən mağazalar

### Qrup E: Mağaza paneli (rol = store)

- [ ] Panel (ana səhifə), Elanlarım
- [ ] Elan əlavə et (6 addım), elanı redaktə et / status dəyiş
- [ ] Kömək mərkəzi (FAQ)

### Qrup D: SEO

- [ ] Hər səhifə üçün başlıq (title) və təsvir (description)
- [ ] Open Graph şəkilləri (sosial şəbəkədə paylaşım üçün)
- [ ] sitemap.xml və robots.txt
- [ ] Bütün səhifələrdə yekun responsiv və açıq/tünd rejim yoxlaması

## Sonraya saxlandı (mobildə olmadığı üçün hələlik edilmir)

- Sifariş / rezervasiya axını: mobil appda yoxdur
- Ödəniş: mobil appda yoxdur
- Haqqımızda, Əlaqə səhifələri: mobil appda yoxdur
- Gizlilik siyasəti və Satıcı razılaşması səhifələri: mobil Register ekranı onlara keçid edir, amma ekranlar mobildə yoxdur və mətni yoxdur. Mətn gələndən sonra edilir. Qeydiyyat formasında bu keçidlər hələlik göstərilməsin.
- Çox sessiya (bir istifadəçi üçün bir neçə refresh token): DB migrasiyası tələb edir, sonda ayrıca qərar verilir (bax "Backend qeydləri" #3)
- İngilis və rus dilləri prefikslə (`/en`, `/ru`): hələlik yalnız az

## Addım 4. Yoxlama (sonda)

- [ ] Bütün branch-ları birləşdir (konflikt olsa həll et)
- [ ] `build` və testləri işlət
- [ ] Əsas axınları yoxla: giriş, axtarış, "mağazaya yaz" (chat), mağaza paneli
- [ ] Hər ekranı mobil appdakı ilə müqayisə et: rənglər, şriftlər və komponentlər uyğundurmu
- [ ] Bütün səhifələri 375, 768, 1280, 1536px enlərində və hər iki rejimdə (light/dark) yekun yoxla
- [ ] `docs/web-report.md` yaz: nə hazırdır, nə yarımçıqdır, nə səhvdir

## Yoxlanmayanlar

- **Uğurlu giriş və qeydiyyat real hesabla sınanmayıb** (test hesabı yoxdur; production backend-də test hesabı yaratmaq istəmədim). Yoxlanılan: forma validasiyası, səhv girişdə backend mesajının toast-da göstərilməsi, cookie/proxy məntiqi. Profil səhifələri Playwright-da saxta sessiya ilə (`scripts/mocks/*.json`) yoxlanılıb.
- Profil redaktəsi (`PUT /auth/me`) real backend-ə qarşı sınanmayıb.
- Yoxlama yalnız Chromium-da (Playwright) edilib. Safari/Firefox və real telefonlarda baxılmayıb.
- Toast-un açıq modalın üstündə görünməsi (`popover`) avtomatik testlə yoxlanmayıb (modal açıq ikən toast düyməsinə basmaq olmur).

## Ekranlar (Addım 1-də doldurulur)

Mənbə: `glam-mobile/src/router/**`, `src/screens/**`. Rol `RootNavigator`-da seçilir: giriş yoxdursa Auth, qonaq rejimi → Guest, `role=customer` → Customer, digər → Store.
Endpoint yolları `/api`-dən sonradır. Hamısı backend Swagger-də (`/api-docs`) sənədləşib.

**Tab-lar:** Qonaq: Əsas · Mağazalar · Profil (→ girişə yönləndirir). Müştəri: Ana səhifə · Mağazalar · Sevimlilər · Chat · Profil. Mağaza: Ana səhifə · Elanlarım · Chat · Profil.

| Ekran (mobil route)         | Fayl (`src/screens/…`)                          | Rol             | Nə edir                                                                                    | Backend endpointləri                                                                               | Veb URL (təklif)                 |
| --------------------------- | ----------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | -------------------------------- |
| Login                       | `Auth/Login`                                    | hamı            | Telefon + şifrə ilə giriş, "qonaq kimi davam et"                                           | POST /auth/login                                                                                   | `/giris`                         |
| Register                    | `Auth/Register`                                 | hamı            | Hesab növü (müştəri/mağaza) + qeydiyyat, şəhər seçimi                                      | POST /auth/register/customer, POST /auth/register/store, GET /cities                               | `/qeydiyyat`                     |
| ForgotPassword              | `Auth/ForgotPassword`                           | hamı            | Telefon daxil et → OTP                                                                     | **yoxdur** (mobil-də TODO)                                                                         | `/sifremi-unutdum`               |
| OtpVerification             | `Auth/OTP`                                      | hamı            | 4 rəqəmli kod, 59 san. təkrar                                                              | **yoxdur** (TODO; backend-də POST /auth/send-otp, /auth/verify-otp var)                            | `/sifremi-unutdum/kod`           |
| CustomerHome / GuestHome    | `Customer/Home`                                 | qonaq, müştəri  | Məhsul lenti: kateqoriyalar, axtarış, təkliflər, axtarış tarixçəsi, şəhər, filtr, sıralama | GET /products, GET /products/suggestions, GET /favorites/ids, GET /cities                          | `/`                              |
| CustomerFilter              | `Customer/Search/FilterScreen`                  | qonaq, müştəri  | Filtrlər: kateqoriya, ölçü, cins, qiymət, rəng, vəziyyət, reytinq (statik seçimlər)        | —                                                                                                  | `/` və `/axtaris` üzərində panel |
| CustomerProductDetail       | `Customer/Product` → `components/productDetail` | qonaq, müştəri  | Məhsul detalı, sevimli, "mağazaya yaz"                                                     | POST/DELETE /favorites/:id, GET /chat/conversations, POST /chat/conversations/direct               | `/mehsul/[id]`                   |
| CustomerStores              | `Customer/Stores`                               | qonaq, müştəri  | Seçilmiş mağazalar + axtarışlı, səhifəli siyahı, izlə                                      | GET /stores/featured, GET /stores, POST /stores/:id/follow                                         | `/magazalar`                     |
| CustomerStoreDetail         | `Customer/Stores/StoreDetail`                   | qonaq, müştəri  | Mağaza başlığı, izlə, yaz, kateqoriya üzrə elanlar                                         | GET /stores/:id, GET /stores/:id/listings, POST /stores/:id/follow, favorites, chat                | `/magaza/[id]`                   |
| CustomerFollowedStores      | `Customer/Stores/FollowedStores`                | müştəri         | İzlənilən mağazalar                                                                        | GET /stores/followed, POST /stores/:id/follow                                                      | `/profil/izlenilenler`           |
| CustomerFavorites           | `Customer/Favorites`                            | müştəri         | Sevimli məhsullar (səhifəli)                                                               | GET /favorites, POST/DELETE /favorites/:id                                                         | `/sevimliler`                    |
| CustomerChat                | `Customer/Chat`                                 | müştəri         | Söhbət siyahısı                                                                            | GET /chat/conversations + socket                                                                   | `/chat`                          |
| CustomerChatDetail          | `Customer/Chat/ChatDetailScreen`                | müştəri         | Mesajlar, yazır..., oxundu işarələri, məhsul kartı                                         | GET /chat/conversations/:id/messages, POST /chat/conversations/:id/read + socket                   | `/chat/[id]`                     |
| CustomerProfile             | `Customer/Profile`                              | müştəri         | Profil kartı, saylar, linklər, dil, tema, çıxış                                            | GET /favorites/ids, GET /stores/followed, POST /auth/logout                                        | `/profil`                        |
| CustomerEditProfile         | `Customer/Profile/EditProfile`                  | müştəri         | Ad, şəhər və s. redaktə                                                                    | PUT /auth/me, GET /cities                                                                          | `/profil/duzelis`                |
| GuestProfile                | `Guest/GuestProfilePrompt`                      | qonaq           | Girişə dəvət                                                                               | —                                                                                                  | (girişə yönləndirmə)             |
| Notifications               | `Notifications/index`                           | müştəri, mağaza | Bildiriş siyahısı                                                                          | **yoxdur** — yalnız mock data                                                                      | `/bildirisler`                   |
| NotificationDetails         | `Notifications/NotificationDetailsScreen`       | müştəri, mağaza | Bir bildiriş                                                                               | — (mock)                                                                                           | `/bildirisler/[id]`              |
| HelpCenter                  | `HelpCenter/index`                              | müştəri, mağaza | FAQ axtarış + accordion                                                                    | GET /help/faqs                                                                                     | `/komek` (ictimai, SEO)          |
| StoreHome                   | `Store/Home`                                    | mağaza          | Panel: statistikalar, son söhbətlər, ən çox baxılan elanlar, "elan əlavə et"               | GET /stores/me, GET /chat/conversations, GET /listings?sortBy=views                                | `/panel`                         |
| StoreListings               | `Store/Listings`                                | mağaza          | Öz elanları status tab-ları ilə                                                            | GET /listings?status                                                                               | `/panel/elanlar`                 |
| StoreListingDetail          | `Store/Listings/LisingDetailScreen`             | mağaza          | Öz elanının önizləməsi                                                                     | — (param ilə)                                                                                      | `/panel/elanlar/[id]`            |
| EditListing                 | `Store/Listings/EditListingScreen`              | mağaza          | Elanı redaktə, status dəyiş (aktiv/deaktiv/satılıb)                                        | GET /listings/:id, PUT /listings/:id, PATCH /listings/:id/status, POST /uploads/image, GET /cities | `/panel/elanlar/[id]/duzelis`    |
| StoreAddListing             | `Store/AddListing` (+ 6 addım)                  | mağaza          | 6 addımlı sehrbaz: şəkillər, əsas məlumat, xüsusiyyətlər, qiymət, təsvir, yoxlama          | POST /uploads/image, GET /cities, POST /listings                                                   | `/panel/elan-elave-et`           |
| StoreChat / StoreChatDetail | `Store/Chat`, `Store/Chat/ChatDetailScreen`     | mağaza          | Müştəri chat-ı ilə eyni                                                                    | müştəri chat-ı ilə eyni                                                                            | `/chat`, `/chat/[id]`            |
| StoreProfile                | `Store/Profile`                                 | mağaza          | Mağaza profili, elan əlavə et, kömək, dil, çıxış                                           | GET /stores/me, POST /auth/logout                                                                  | `/profil`                        |

**Socket.io** (`src/services/socket.ts`): `io(SOCKET_URL, {auth:{token}})`. Göndərir: `conversation:join`, `conversation:leave`, `message:send`, `typing`, `message:read`. Dinləyir: `message:new`, `conversation:updated`, `typing`, `message:status`, `message:read`.

**Qeydlər:**

- Mobil appda ödəniş və sifariş/rezervasiya axını **yoxdur**: əlaqə "mağazaya yaz" (chat) ilə qurulur. Qrup C buna görə dəyişdirilib.
- Məhsul detalı mobil-də ayrıca sorğu etmir (obyekt əvvəlki ekrandan ötürülür). Backend-də **ictimai `GET /products/:id` yoxdur**. Vebdə birbaşa link və SEO üçün lazımdır (bax "Backend qeydləri").
- `Customer/Search/index.tsx` tam şərhə alınıb, qeydiyyatda deyil. Axtarış Home ekranının içindədir.
- Register `PrivacyPolicy` və `SellerAgreement` səhifələrinə keçid edir, amma bu ekranlar mobil-də yoxdur. Qayda 10-a görə vebdə də hələlik edilmir ("Sonraya saxlandı").
- i18n: az (default), en, ru. Açarlar azərbaycanca mətnlərdir. Locale fayllarında ~69 açar var, kodda ~177. Çoxlu mətn birbaşa azərbaycanca yazılıb.

## Backend qeydləri (Addım 1-də doldurulur)

### Hazırkı vəziyyət (yoxlanılıb, `glam-backend` `main` @ 582b71c)

- **CORS** (`src/app.js`): `origin: ["https://glam-admin-uk14.onrender.com", "http://localhost:5173"]`, `credentials` yoxdur.
- **Socket.io CORS** (`src/sockets/socket.js`): `origin: "*"`. Token handshake-də `auth.token` ilə yoxlanılır.
- **Auth**: yalnız `Authorization: Bearer <accessToken>` (`authMiddleware.js`, `optionalAuth.js`). `cookie-parser` qoşulub, amma heç yerdə cookie yazılmır və oxunmur.
- **Refresh**: `POST /auth/refresh-token` body-də `{refreshToken}` alır, həmişə yeni refresh token qaytarır (rotation). Logout: `POST /auth/logout {refreshToken}`.
- **Refresh token istifadəçi başına bir dənədir** (`users.refresh_token` sütunu). Hər girişdə və refresh-də köhnəsi silinir.

### Veb üçün nə çatmır

1. **CORS-da veb domeni yoxdur.** Brauzerdən birbaşa backend-ə sorğu getsə, bloklanacaq.
   → Həll (seçilib, bax "Qərarlar"): brauzer backend-ə birbaşa getmir, Next.js serveri proxy edir (BFF). Buna görə **CORS dəyişikliyi lazım deyil**. Yalnız socket.io brauzerdən birbaşa qoşulur, onun CORS-u `*`-dır.
2. **Cookie ilə giriş yoxdur.** Backend tokenləri JSON-da qaytarır.
   → Həll: Next.js route handler-ləri tokenləri `glam.az` domenində `httpOnly; Secure; SameSite=Lax` cookie-lərdə saxlayır və backend-ə Bearer başlığı ilə ötürür. **Backend dəyişikliyi lazım deyil.**
3. **Bir istifadəçi = bir refresh token.** İstifadəçi vebdə daxil olanda mobil appdakı sessiyası (növbəti refresh-də) bağlanacaq, və əksinə. Bu, mobil appı "pozmur", amma istifadəçi üçün narahatdır.
   → Tövsiyə (hələ edilməyib): `web-support` branch-da `refresh_tokens` cədvəli (user_id, token_hash, device, expires_at) ilə çox sessiya dəstəyi. Mobil app üçün API eyni qalır. Bunun üçün ayrıca icazə/qərar lazımdır, çünki DB migrasiyası tələb edir.
4. **İctimai məhsul detalı endpointi yoxdur** (`GET /products/:id`). Vebdə `/mehsul/[id]` səhifəsi və SEO üçün lazımdır. → Addım 3-də (Qrup B, Detal səhifəsi) `web-support` branch-da əlavə ediləcək: yalnız yeni endpoint, mövcudlara toxunulmur.
5. **Xəta formatı:** `errorHandler.js` service-lərin `error.statusCode`-unu nəzərə almır — səhv şifrə, mövcud telefon və s. hamısı `500 {"error":{"message":"Daxili server xətası"}}` qaytarır. Mobil appda da eynidir. Veb mesajı olduğu kimi göstərir (backend-ə toxunulmadı — mövcud endpointlərin davranışıdır). Tövsiyə: `errorHandler`-də `err.statusCode` varsa onu və `err.message`-i qaytarmaq.
6. Kiçik: mobil `GET /stores` sorğusuna `sort` göndərir, backend onu nəzərə almır. `GET /auth/admin/login` və `src/routes/admin/*` Swagger-ə düşmür (`swagger.js` `apis: ["src/routes/*.js"]`). Veb üçün bloklayıcı deyil.

### Dəyişikliklər

_Hələ heç nə dəyişdirilməyib. `web-support` branch-ı yaradılmayıb._

## Qərarlar

1. **Branch-lar:** Addım 1 `web/analysis`, Addım 2 `web/foundation` branch-ında. `main`-ə birbaşa yazılmır.
2. **Auth arxitekturası — BFF (Next.js proxy):** brauzer yalnız öz domeni ilə (`/api/...` Next route handler-ləri) danışır. Tokenlər httpOnly cookie-lərdə saxlanılır (`glam_at`, `glam_rt`), Next serveri backend-ə `Authorization: Bearer` göndərir; access token bitməyə 30 san. qalanda `src/proxy.ts` onu refresh token ilə yeniləyir. Səbəb: backend-ə və mobil appa toxunmadan "cookie ilə giriş", CORS dəyişikliyi lazım deyil, tokenlər JS-ə açıq deyil (XSS-dən qorunur). Socket.io üçün brauzer qısa ömürlü access token-i `GET /api/auth/socket-token` ilə alır.
3. **Çox sessiya (refresh token) problemi** hələlik həll edilmir, yalnız "Backend qeydləri" #3-də tövsiyə kimi yazılıb. Səbəb: DB migrasiyası tələb edir, Addım 1–2 üçün bloklayıcı deyil.
4. **Sifariş / ödəniş** mobil appda olmadığı üçün vebdə də edilmir. Qrup C mobil appdakı real funksiyalara görə dəyişdirilib, Qrup E (mağaza paneli) əlavə edilib.
5. **i18n:** az (default), en, ru. Mobil locale faylları `src/i18n/locales`-ə kopyalanıb. Açarlar mobil-dəki kimi azərbaycanca mətnlərdir. SEO üçün az dili prefikssiz (`/`), digərləri sonra (`/en`, `/ru`) əlavə ediləcək. Addım 2-də yalnız az.
6. **URL-lər azərbaycanca** (`/magazalar`, `/mehsul/[id]` və s.), cədvəl "Ekranlar" bölməsindədir.
7. **Tema:** açıq/tünd hər ikisi (mobil kimi). Default sistem seçimi, CSS dəyişənləri + `data-theme`.
8. **İkonlar** mobil `react-native-svg` komponentlərindən mexaniki çevrilib (`Svg`→`svg`, `Path`→`path` və s.), eyni adlarla `src/components/icons/`-dədir. `Checlcon.tsx` (mobil-də yazı səhvi) → `CheckIcon.tsx`.
9. **Qovluq strukturu** (Next.js App Router, `src/` ilə):
   ```
   glam-web/
     docs/                 plan, design.md
     public/brand/         loqo, app ikonu (mobil appdan)
     src/
       app/                səhifələr (route-lar), app/api/* — BFF route handler-ləri
         (site)/           ictimai + müştəri səhifələri (yuxarı menyu + footer)
         (auth)/           giriş, qeydiyyat, şifrəni unutdum
         panel/            mağaza paneli
       assets/fonts/       Montserrat (mobil appdan)
       components/
         icons/            SVG ikonlar (mobil appdan)
         ui/               Button, Input, Card, Modal ... (design.md §9)
         layout/           Header, Footer, BottomNav, PageShell
       features/<sahə>/    auth, products, stores, chat, listings — sahəyə aid komponent və hook-lar
       lib/api/            API client (server və brauzer), endpoint siyahısı, tiplər
       lib/auth/           cookie/sessiya köməkçiləri
       i18n/               locale faylları və t() funksiyası
       styles/             tokens.css (design.md-dən), globals.css
       types/              ortaq tiplər (mobil `src/types`-a uyğun)
   ```
10. **Stil:** Tailwind CSS v4, rəng/ölçü dəyərləri yalnız `src/styles/tokens.css`-də CSS dəyişənləri kimi; Tailwind `@theme` bu dəyişənlərə bağlanır. Komponentlərdə hex yazılmır.
11. **Header/Footer:** Mobil appda yuxarı menyu və footer yoxdur. Header ScreenHeader-in görünüşündən (primary fon, accent xətt, şüşə düymələr) qurulub, tab-lar eyni ikon və adlarla. Footer `primaryDark` fonlu sadə blokdur. Header-dəki hərəkətli "BouncingBlobs" fonu hələ edilməyib (dekorativ, Addım 3-də ana səhifə ilə).
12. **Toast "info" variantı:** mobil-də fon `surface`, mətn `textOnPrimary` (açıq rejimdə demək olar görünmür). Vebdə mətn `textPrimary` + 1px border edilib — kiçik düzəliş.
13. **Cache Components** (Next 16 default) açıqdır: layout statikdir, istifadəçi client-də `/api/auth/session`-dan oxunur. Server tərəfində sessiya oxuyan komponentlər `<Suspense>` içində olmalıdır.
14. **Backend timeout:** Render (free) "soyuq start"da ilk sorğu 10+ san. çəkir. Server sorğuları 10 san., BFF 30 san. gözləyir.
15. **Dizayn yanaşması (sonradan əlavə):** marka (rəng, şrift, radius, komponent üslubu) mobillə eyni, səhifə quruluşu və geniş ekran yerləşməsi veb üçün ayrıca düşünülür (Qayda 7). Açıq və tünd rejim məcburidir (Qayda 9), responsivlik məcburidir (Qayda 11).
16. **Mobildə olmayan işlər** (sifariş, ödəniş, Haqqımızda, Əlaqə, Gizlilik siyasəti, Satıcı razılaşması) "Sonraya saxlandı" bölməsinə köçürülüb (Qayda 10).
17. **Tünd rejim kontrastı:** mobil-də bəzi birləşmələr tünd rejimdə oxunmurdu (açıq qırmızı fonda ağ mətn, primaryLight üzərində primary). Mövcud palitradan iki törəmə token əlavə edildi: `--text-on-strong`, `--on-primary-light` (design.md §2).
18. **Toxunma sahəsi:** mobil ölçüləri (chip 34px, ürək 28px və s.) görünüşcə saxlanılıb, toxunma sahəsi görünməz `::after` ilə 44px edilib (`touch-target`).
19. **`/dev/ui`** — komponent önizləməsi yalnız `next dev`-də açılır (production-da 404), `noindex`. Ekran görüntüsü yoxlaması üçündür, istifadəçi ekranı deyil.
20. **Tema düyməsi:** mobil-də Profil-dəki "Tünd rejim" açarıdır; vebdə hər səhifədən əlçatan olsun deyə Header-də ay ikonlu düymədir (Qayda 9).
21. **Qrup A:** dil seçimi (az/en/ru) göstərilmir — yalnız az. Profil-dəki "Rəylərim", "Mağaza ünvanı", mağaza "Bildirişlər" sətirləri mobil-də TODO-dur — vebdə də görünür, amma heç yerə aparmır. Mağaza profilindəki mobil saxta dəyərlər (kateqoriya, rayon, "Balansım 0 AZN") göstərilmir, çünki backend məlumatı deyil. Razılıq checkbox-u saxlanılıb, mətn keçidsizdir.
22. **Telefonda header + PageHeader tək blokdur:** Header telefonda düz zolaqdır, onun altındakı PageHeader mobil ScreenHeader kimi aşağı küncləri yumru, accent xəttli davamdır. Kompüterdə Header-in öz accent xətti və kölgəsi var, PageHeader ayrıca kartdır.
