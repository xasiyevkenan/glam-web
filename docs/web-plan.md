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
7. Veb-saytın dizaynı yoxdur. Dizaynı mobil appdan (`glam-mobile`) götür: eyni rənglər, şriftlər, düymə və kart formaları, ikonlar, boşluqlar, loqo. Öz dizaynını icad etmə. Yalnız geniş ekran üçün yerləşməni uyğunlaşdır (məsələn mobildə tək sütun olan yer kompüterdə iki-üç sütun ola bilər).
8. `docs/design.md` faylı dizaynın tək mənbəyidir. Bütün ekranlar ondan istifadə etsin, rəng və ölçüləri hər yerdə təkrar yazma.

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

## Addım 3. Ekranlar (Addım 2 bitəndən sonra, ayrı agentlərlə)

Bu siyahını Addım 1-də tapılan real ekranlarla doldur və dəyiş.

### Qrup A: Hesab
- [ ] Giriş səhifəsi
- [ ] Qeydiyyat səhifəsi
- [ ] Profil səhifəsi
- [ ] Parolu unutdum

### Qrup B: Əsas səhifələr
- [ ] Ana səhifə
- [ ] Siyahı / kataloq səhifəsi
- [ ] Axtarış
- [ ] Detal səhifəsi

### Qrup C: Əsas funksiya
- [ ] ~~Sifariş / rezervasiya axını~~ — mobil appda yoxdur, əvəzinə "Mağazaya yaz" (məhsul detalından chat açılır)
- [ ] ~~Ödəniş~~ — mobil appda yoxdur
- [ ] Chat siyahısı və söhbət (socket.io)
- [ ] Bildirişlər (mobil-də hələ mock; backend endpointi yoxdur)
- [ ] Sevimlilər, izlənilən mağazalar

### Qrup E: Mağaza paneli (rol = store)
- [ ] Panel (ana səhifə), Elanlarım
- [ ] Elan əlavə et (6 addım), elanı redaktə et / status dəyiş
- [ ] Kömək mərkəzi (FAQ)

### Qrup D: SEO və statik səhifələr
- [ ] Hər səhifə üçün başlıq (title) və təsvir (description)
- [ ] Open Graph şəkilləri (sosial şəbəkədə paylaşım üçün)
- [ ] sitemap.xml və robots.txt
- [ ] Haqqımızda, Əlaqə, Qaydalar səhifələri
- [ ] Mobil və kompüterdə düzgün görünüş (responsive)

## Addım 4. Yoxlama (sonda)

- [ ] Bütün branch-ları birləşdir (konflikt olsa həll et)
- [ ] `build` və testləri işlət
- [ ] Əsas axınları yoxla: giriş, axtarış, sifariş
- [ ] Hər ekranı mobil appdakı ilə müqayisə et: rənglər, şriftlər və komponentlər uyğundurmu
- [ ] `docs/web-report.md` yaz: nə hazırdır, nə yarımçıqdır, nə səhvdir

## Ekranlar (Addım 1-də doldurulur)

Mənbə: `glam-mobile/src/router/**`, `src/screens/**`. Rol `RootNavigator`-da seçilir: giriş yoxdursa Auth, qonaq rejimi → Guest, `role=customer` → Customer, digər → Store.
Endpoint yolları `/api`-dən sonradır. Hamısı backend Swagger-də (`/api-docs`) sənədləşib.

**Tab-lar:** Qonaq: Əsas · Mağazalar · Profil (→ girişə yönləndirir). Müştəri: Ana səhifə · Mağazalar · Sevimlilər · Chat · Profil. Mağaza: Ana səhifə · Elanlarım · Chat · Profil.

| Ekran (mobil route) | Fayl (`src/screens/…`) | Rol | Nə edir | Backend endpointləri | Veb URL (təklif) |
|---|---|---|---|---|---|
| Login | `Auth/Login` | hamı | Telefon + şifrə ilə giriş, "qonaq kimi davam et" | POST /auth/login | `/giris` |
| Register | `Auth/Register` | hamı | Hesab növü (müştəri/mağaza) + qeydiyyat, şəhər seçimi | POST /auth/register/customer, POST /auth/register/store, GET /cities | `/qeydiyyat` |
| ForgotPassword | `Auth/ForgotPassword` | hamı | Telefon daxil et → OTP | **yoxdur** (mobil-də TODO) | `/sifremi-unutdum` |
| OtpVerification | `Auth/OTP` | hamı | 4 rəqəmli kod, 59 san. təkrar | **yoxdur** (TODO; backend-də POST /auth/send-otp, /auth/verify-otp var) | `/sifremi-unutdum/kod` |
| CustomerHome / GuestHome | `Customer/Home` | qonaq, müştəri | Məhsul lenti: kateqoriyalar, axtarış, təkliflər, axtarış tarixçəsi, şəhər, filtr, sıralama | GET /products, GET /products/suggestions, GET /favorites/ids, GET /cities | `/` |
| CustomerFilter | `Customer/Search/FilterScreen` | qonaq, müştəri | Filtrlər: kateqoriya, ölçü, cins, qiymət, rəng, vəziyyət, reytinq (statik seçimlər) | — | `/` və `/axtaris` üzərində panel |
| CustomerProductDetail | `Customer/Product` → `components/productDetail` | qonaq, müştəri | Məhsul detalı, sevimli, "mağazaya yaz" | POST/DELETE /favorites/:id, GET /chat/conversations, POST /chat/conversations/direct | `/mehsul/[id]` |
| CustomerStores | `Customer/Stores` | qonaq, müştəri | Seçilmiş mağazalar + axtarışlı, səhifəli siyahı, izlə | GET /stores/featured, GET /stores, POST /stores/:id/follow | `/magazalar` |
| CustomerStoreDetail | `Customer/Stores/StoreDetail` | qonaq, müştəri | Mağaza başlığı, izlə, yaz, kateqoriya üzrə elanlar | GET /stores/:id, GET /stores/:id/listings, POST /stores/:id/follow, favorites, chat | `/magaza/[id]` |
| CustomerFollowedStores | `Customer/Stores/FollowedStores` | müştəri | İzlənilən mağazalar | GET /stores/followed, POST /stores/:id/follow | `/profil/izlenilenler` |
| CustomerFavorites | `Customer/Favorites` | müştəri | Sevimli məhsullar (səhifəli) | GET /favorites, POST/DELETE /favorites/:id | `/sevimliler` |
| CustomerChat | `Customer/Chat` | müştəri | Söhbət siyahısı | GET /chat/conversations + socket | `/chat` |
| CustomerChatDetail | `Customer/Chat/ChatDetailScreen` | müştəri | Mesajlar, yazır..., oxundu işarələri, məhsul kartı | GET /chat/conversations/:id/messages, POST /chat/conversations/:id/read + socket | `/chat/[id]` |
| CustomerProfile | `Customer/Profile` | müştəri | Profil kartı, saylar, linklər, dil, tema, çıxış | GET /favorites/ids, GET /stores/followed, POST /auth/logout | `/profil` |
| CustomerEditProfile | `Customer/Profile/EditProfile` | müştəri | Ad, şəhər və s. redaktə | PUT /auth/me, GET /cities | `/profil/duzelis` |
| GuestProfile | `Guest/GuestProfilePrompt` | qonaq | Girişə dəvət | — | (girişə yönləndirmə) |
| Notifications | `Notifications/index` | müştəri, mağaza | Bildiriş siyahısı | **yoxdur** — yalnız mock data | `/bildirisler` |
| NotificationDetails | `Notifications/NotificationDetailsScreen` | müştəri, mağaza | Bir bildiriş | — (mock) | `/bildirisler/[id]` |
| HelpCenter | `HelpCenter/index` | müştəri, mağaza | FAQ axtarış + accordion | GET /help/faqs | `/komek` (ictimai, SEO) |
| StoreHome | `Store/Home` | mağaza | Panel: statistikalar, son söhbətlər, ən çox baxılan elanlar, "elan əlavə et" | GET /stores/me, GET /chat/conversations, GET /listings?sortBy=views | `/panel` |
| StoreListings | `Store/Listings` | mağaza | Öz elanları status tab-ları ilə | GET /listings?status | `/panel/elanlar` |
| StoreListingDetail | `Store/Listings/LisingDetailScreen` | mağaza | Öz elanının önizləməsi | — (param ilə) | `/panel/elanlar/[id]` |
| EditListing | `Store/Listings/EditListingScreen` | mağaza | Elanı redaktə, status dəyiş (aktiv/deaktiv/satılıb) | GET /listings/:id, PUT /listings/:id, PATCH /listings/:id/status, POST /uploads/image, GET /cities | `/panel/elanlar/[id]/duzelis` |
| StoreAddListing | `Store/AddListing` (+ 6 addım) | mağaza | 6 addımlı sehrbaz: şəkillər, əsas məlumat, xüsusiyyətlər, qiymət, təsvir, yoxlama | POST /uploads/image, GET /cities, POST /listings | `/panel/elan-elave-et` |
| StoreChat / StoreChatDetail | `Store/Chat`, `Store/Chat/ChatDetailScreen` | mağaza | Müştəri chat-ı ilə eyni | müştəri chat-ı ilə eyni | `/chat`, `/chat/[id]` |
| StoreProfile | `Store/Profile` | mağaza | Mağaza profili, elan əlavə et, kömək, dil, çıxış | GET /stores/me, POST /auth/logout | `/profil` |

**Socket.io** (`src/services/socket.ts`): `io(SOCKET_URL, {auth:{token}})`. Göndərir: `conversation:join`, `conversation:leave`, `message:send`, `typing`, `message:read`. Dinləyir: `message:new`, `conversation:updated`, `typing`, `message:status`, `message:read`.

**Qeydlər:**
- Mobil appda ödəniş və sifariş/rezervasiya axını **yoxdur**: əlaqə "mağazaya yaz" (chat) ilə qurulur. Qrup C buna görə dəyişdirilib.
- Məhsul detalı mobil-də ayrıca sorğu etmir (obyekt əvvəlki ekrandan ötürülür). Backend-də **ictimai `GET /products/:id` yoxdur**. Vebdə birbaşa link və SEO üçün lazımdır (bax "Backend qeydləri").
- `Customer/Search/index.tsx` tam şərhə alınıb, qeydiyyatda deyil. Axtarış Home ekranının içindədir.
- Register `PrivacyPolicy` və `SellerAgreement` səhifələrinə keçid edir, amma bu ekranlar mobil-də yoxdur. Vebdə statik səhifə kimi ediləcək.
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
5. Kiçik: mobil `GET /stores` sorğusuna `sort` göndərir, backend onu nəzərə almır. `GET /auth/admin/login` və `src/routes/admin/*` Swagger-ə düşmür (`swagger.js` `apis: ["src/routes/*.js"]`). Veb üçün bloklayıcı deyil.

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
