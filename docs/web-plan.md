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
- [ ] Backend-in CORS və cookie ayarlarını yoxla, veb üçün nə çatmır yaz
- [ ] Veb üçün qovluq strukturunu qərara al
- [ ] Mobil appın dizayn qaydalarını çıxar: rənglər, şriftlər, mətn ölçüləri, boşluqlar, künc yumrulığı, kölgələr, düymə və kart formaları, ikonlar, loqo. Hamısını `docs/design.md`-ə yaz
- [ ] Mobildəki ortaq komponentlərin siyahısını çıxar (düymə, input, kart, menyu, modal və s.) və `docs/design.md`-ə əlavə et
- [ ] Mobil appın şəkillərini və ikonlarını (loqo daxil) veb üçün `glam-web`-ə kopyala

## Addım 2. Əsas (Addım 1-dən sonra, digərlərindən əvvəl)

- [ ] `glam-web` kökündə Next.js layihəsini qur
- [ ] Backend ilə əlaqə üçün ortaq API client yaz
- [ ] Giriş sistemini qur (cookie ilə, backend uyğunlaşdırılsa)
- [ ] Dizayn sistemi: `docs/design.md`-ə əsasən rəngləri, şriftləri və ölçüləri tək yerdə təyin et (mobil appla eyni)
- [ ] Ortaq komponentləri düzəlt: düymə, input, kart, modal və s., mobildəkilərlə eyni görünüşdə
- [ ] Ümumi layout: yuxarı menyu, aşağı hissə, səhifə qabığı
- [ ] Build və lint keçsin

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

_Boşdur. Backend-də nə dəyişdirildisə, burada yazılır._

## Qərarlar

_Boşdur. Agentin verdiyi qərarlar burada yazılır._
