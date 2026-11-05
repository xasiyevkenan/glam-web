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

- [ ] Mobil appın bütün ekranlarını siyahıya al (aşağıdakı "Ekranlar" bölməsinə yaz)
- [ ] Hər ekranın hansı backend endpointlərini işlətdiyini Swagger-dən yaz
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
- [ ] Sifariş / rezervasiya axını (mobildəki kimi)
- [ ] Ödəniş (varsa)
- [ ] Çat / bildirişlər (socket.io, varsa)

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

_Boşdur. Agent mobil appa baxıb burada doldurur._

## Backend qeydləri (Addım 1-də doldurulur)

_Boşdur. Backend-də nə dəyişdirildisə, burada yazılır._

## Qərarlar

_Boşdur. Agentin verdiyi qərarlar burada yazılır._
