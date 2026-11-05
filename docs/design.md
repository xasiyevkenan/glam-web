# glam.az Veb — Dizayn Sistemi

> Bu fayl veb-saytın dizaynının **tək mənbəyidir**. Hamısı `glam-mobile`-dan çıxarılıb
> (`src/constants/theme.ts`, `src/components/**`). Öz dizaynını icad etmə.
> Kodda rənglər/ölçülər yalnız `src/styles/tokens.css` (CSS dəyişənləri) vasitəsilə işlədilir —
> heç bir komponentdə hex rəng və ya "sehrli" ölçü təkrar yazılmır.

Mənbə faylları (yalnız oxumaq üçün):
- `glam-mobile/src/constants/theme.ts` — rənglər, ölçülər, şriftlər
- `glam-mobile/src/components/common/*` — ortaq komponentlər
- `glam-mobile/src/assets/icons/*` — SVG ikonlar
- `glam-mobile/src/theme/ThemeProvider.tsx` — açıq/tünd rejim

---

## 1. Brend

- Ad: **Glam.az** (yazılışı məhz belə).
- Şüar (AuthHeader): _"Zərif geyim, bir kirayə uzağında"_ — geyim **kirayəsi** platformasıdır.
- Əsas brend rəngi: tünd bənövşəyi `#2E2140`, vurğu: qızılı `#B8905A`.
- Loqo:
  - **App ikonu / splash**: bənövşəyi fonda (`#2E2140`) krem (`#FAF7F2`) xətli köynək siluyeti + qızılı ulduzcuqlar.
    Fayllar: `public/brand/app-icon-1024.png`, `public/brand/logo-mark@2x.png`, `@3x.png`, `logo-splash-1024.png`, `apple-touch-icon.png`.
  - **App daxilində (AuthHeader)**: 64×64 krem (`textOnPrimary`) dairə içində `shoppingBag` ikonu (28px, `primary` rəng) + altında `Glam.az` yazısı (`h1`, `textOnPrimary`) + şüar (`body4`, `textOnPrimaryMuted`). Hamısı `primary` fonlu, aşağı küncləri `radiusXl` (16) yumru blokda.
  - Vebdə yuxarı menyuda kiçik versiya: 36–40px krem dairə + `shoppingBag` + `Glam.az` (`h4`/`h3`).

## 2. Rənglər

Mobil app açıq və tünd rejimi dəstəkləyir (sistem seçimi default, istifadəçi dəyişə bilər, `@app_theme_scheme`).
Vebdə də eyni: `prefers-color-scheme` default, `data-theme="dark|light"` ilə əl ilə seçim.

| Token | Açıq | Tünd | Harada |
|---|---|---|---|
| `primary` | `#2E2140` | `#4A3768` | Əsas düymə, header fonu, seçilmiş chip |
| `primaryLight` | `#EEEDFE` | `#2A2438` | Avatar fonu, aktiv tab fonu, modal ikon fonu |
| `primaryDark` | `#221833` | `#1C1428` | Header-də avatar dairəsi |
| `accent` | `#B8905A` | `#C9A06C` | Qızılı vurğu: header alt xətti, nöqtə, avatar haşiyəsi |
| `iconPurple` | `#534AB7` | `#9C8FE0` | Ayarlar siyahısında ikon rəngi |
| `background` | `#EFEFEF` | `#121016` | Ümumi arxa fon |
| `screenBackground` | `#FAF7F2` | `#1A1720` | Ekran/səhifə fonu (krem) — **əsas səhifə fonu** |
| `surface` | `#FAFAF8` | `#211D29` | Kart, tab bar, axtarış qutusu |
| `surfaceMuted` | `#F1F1EC` | `#26212E` | Input fonu, passiv chip, skeleton |
| `card` | `#FAFAF8` | `#211D29` | Məhsul kartı |
| `border` | `#ECECE6` | `#332C3F` | Kart/input haşiyəsi |
| `borderLight` | `#E2E2E2` | `#3A3345` | Siyahı ayırıcı xətləri |
| `borderSoft` | `#ECE4D8` | `#3A3240` | Yumşaq ayırıcı |
| `textPrimary` | `#1A1A18` | `#F3F1F7` | Əsas mətn |
| `textSecondary` | `#8A8A85` | `#A79FB0` | İkinci dərəcəli mətn, placeholder (input) |
| `textMuted` | `#6B6B66` | `#8E869C` | İkon rəngi (input), alt yazı |
| `textOnPrimary` | `#FAF7F2` | `#FAF7F2` | `primary` fon üzərində mətn |
| `textOnPrimaryMuted` | `#C9BBD8` | `#C9BBD8` | `primary` fon üzərində ikinci mətn |
| `chipText` | `#444441` | `#C7C2CF` | Passiv chip mətni |
| `placeholder` | `#ADADA6` | `#6F6A78` | Placeholder |
| `overlayOnPrimary` | `rgba(255,255,255,0.08)` | `rgba(255,255,255,0.10)` | Header-də "şüşə" düymələr |
| `linkActive` | `#185FA5` | `#5FA8E8` | Link |
| `danger` | `#A32D2D` | `#E5787B` | Xəta, sil, bildiriş nöqtəsi, sevimli ürək |
| `dangerBg` | `#FCEBEB` | `#3B2226` | Təhlükəli əməliyyat ikon fonu |
| `badgeGold` | `#B8905A` | `#C9A06C` | Qızılı nişan (15% şəffaf fon ilə) |
| `navInactive` | `#ADADA6` | `#6F6A78` | Passiv naviqasiya |
| `navActive` | `#185FA5` | `#5FA8E8` | Aktiv naviqasiya (mavi!) |
| `imageTint1..4` | `#E6F1FB` `#EEEDFE` `#FAEEDA` `#EAF3DE` | `#1E2A36` `#2A2438` `#332C22` `#232B1E` | Şəkil yer tutucu fonları, status nişan fonları |
| `white` / `black` | `#FFFFFF` / `#1A1A18` | `#FFFFFF` / `#000000` | |
| `shadow` | `rgba(46,33,64,0.3)` | `rgba(0,0,0,0.45)` | Kölgə rəngi |
| `statusActive` | `#3E7C3E` | `#6FCF6F` | Aktiv elan, uğur toast |
| `statusPending` | `#B8905A` | `#C9A06C` | Gözləmədə |
| `statusInactive` | `#8A8A85` | `#A79FB0` | Deaktiv |
| `statusSold` | `#A32D2D` | `#E5787B` | Satılıb / rədd edilib |

Əlavə sabit rənglər (mobil kodda birbaşa yazılıb): onlayn nöqtə `#3DBE6B`, modal/overlay fonu `rgba(0,0,0,0.4)`, nişan mətni `#fff`.

Status nişanları (`getStatusStyle`, ProductCard):
| Status | Fon | Mətn |
|---|---|---|
| active | `imageTint4` | `statusActive` |
| pending | `imageTint3` | `statusPending` |
| inactive | `imageTint2` | `statusInactive` |
| rejected / sold | `imageTint2` | `statusSold` |

## 3. Şrift

- Ailə: **Montserrat** — çəkilər: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800.
- Fayllar: `src/assets/fonts/Montserrat-*.ttf` (mobil appdan kopyalanıb), `next/font/local` ilə yüklənir.

| Stil | Çəki | Ölçü (px) | Sətir hündürlüyü | Harada |
|---|---|---|---|---|
| `largeTitle` | 700 | 40 | 48 | |
| `h1` | 700 | 32 | 35 | Loqo yazısı (AuthHeader) |
| `h2` | 700 | 22 | 30 | Bölmə başlığı |
| `h3` | 700 | 21 | 25 | Ekran başlığı (ScreenHeader), modal başlığı |
| `h4` | 700 | 16 | 20 | Kart başlığı, boş vəziyyət başlığı, avatar hərfi |
| `h5` | 700 | 12 | 20 | |
| `body1` | 400 | 30 | 28 | |
| `body2` | 400 | 20 | 24 | |
| `body3` | 400 | 16 | 22 | |
| `body4` | 500 | 15 | 20 | Input mətni, input etiketi, toast, siyahı başlığı |
| `body5` | 400 | 14 | 18 | Axtarış mətni, modal təsviri, siyahı sətri |
| `caption1` | 400 | 13 | 16 | Chip, alt yazı |
| `caption2` | 400 | 12 | 14 | Kart detalları (mağaza, ölçü, qiymət), xəta mətni |
| `button` | 600 | 15 | 20 | Bütün düymələr |
| `label` | 500 | 13 | 16 | Etiket |
| `tiny` | 400 | 12 | 14 | Tab etiketi, status nişanı (600 ilə) |

Mobil appda kodda tez-tez `fontFamily: 'Montserrat-SemiBold'` ilə stil üzərinə 600 çəki verilir (nişanlar, aktiv tab).

## 4. Boşluqlar (spacing)

| Token | px |
|---|---|
| `base` / `padding` | 8 |
| `padding2` | 12 |
| `padding3` | 15 |
| `padding4` | 18 |
| `padding5` | 22 |
| `padding6` | 25 |
| `padding7` | 30 |

- Ekranın yan boşluğu (mobil): `padding4` = **18px**. Vebdə: mobil eni 18px, planşet 24px, kompüterdə məzmun `max-width: 1200px` ortada.
- Siyahı sətri şaquli boşluğu: `padding3` (15).
- Input-lar arası: `padding4` (18) alt boşluq.

## 5. Künc yumruluğu (radius)

| Token | px | Harada |
|---|---|---|
| `radiusSm` | 8 | Skeleton, ayarlar ikon qutusu |
| `radius` | 12 | Accordion kartı |
| `radiusLg` | 14 | **Ən çox işlənən**: düymə, input, məhsul kartı, axtarış, toast, statistik kart, mesaj balonu |
| `radiusXl` | 16 | Header-in aşağı küncləri, bottom sheet, modal kartı, tab bar |
| `radiusFull` | 30 (vebdə `9999px`) | Chip, nişan, dairəvi düymələr, avatar, follow düyməsi |

## 6. Kölgələr

Mobil kölgələri vebə çevrilmiş halda:

| Token | CSS | Harada |
|---|---|---|
| `shadow-xs` | `0 1px 2px rgba(46,33,64,0.1)` | Kart üstündəki kiçik dairəvi düymə (ürək/edit) |
| `shadow-sm` | `0 4px 10px rgba(0,0,0,0.08)` | Yer seçmə kartı (HomeHeader), yumşaq kart |
| `shadow-md` | `0 4px 10px rgba(0,0,0,0.15)` | Toast |
| `shadow-header` | `0 6px 10px rgba(46,33,64,0.18)` (≈ `shadow` × 0.6) | Bənövşəyi header |
| `shadow-nav` | `0 6px 16px var(--shadow)` | Tab bar / alt menyu |

Kartlar əsasən **kölgəsiz, 1px `border` haşiyəli** olur (ProductCard, StatCard, FeaturedStoreCard).

## 7. İkonlar

- Hamısı xətli (outline) SVG, `stroke` rəngi parametrlə, adətən 24×24 viewBox, `strokeWidth` 1.25–2, yumru uclar.
- 56 ikon mobil appdan kopyalanıb və veb React komponentinə çevrilib: `src/components/icons/*.tsx`
  (props: `size`, `color`, bəzilərində `filled`). Ad xəritəsi mobil `constants/icons.ts` ilə eynidir:
  `mail, lock, shoppingBag, eye, eyeOff, buyer, store, stores, goBack, azFlag, azeFlag, engFlag, ruFlag, home, search, chat, heart, profile, bell, filter, chevronDown, hanger, plus, listings, star, globe, help, logout, chevronRight, edit, list, listItem, pin, settings, send, paperclip, chevronLeft, info, close, clock, calendar, check, moon, bookmark, verifiedBadge, moreVertical, mapPin, infoCircle, checkCircle, alertCircle, tag, grid, dress, shirt, coat, heel, handbag`.
- Tipik ölçülər: input içində 18, tab bar 20, header düymələri 18, kart üstü ürək 16, boş vəziyyət 32, şəkil yer tutucusu (`hanger`) 100.

## 8. Hərəkət (animasiya)

- Toxunuşda `activeOpacity` 0.7–0.85 → vebdə `:hover`/`:active` zamanı `opacity: .85`.
- Toast: yuxarıdan 40px sürüşüb gəlir, 260ms giriş / 200ms çıxış, 2600ms görünür.
- Bottom sheet / modal: 220ms; overlay `rgba(0,0,0,0.4)`.
- Skeleton: şəffaflıq 0.35 ↔ 1, 650ms, sonsuz.
- Header fonunda "BouncingBlobs": `overlayOnPrimary` rəngli dairələr içində geyim ikonları (dress, shirt, coat, heel, handbag, hanger) yavaş üzür. Vebdə sadə CSS animasiyası ilə; `prefers-reduced-motion`-da söndürülür.

---

## 9. Ortaq komponentlər (mobil → veb)

Hər komponent `glam-mobile/src/components/...` faylından götürülüb. Vebdəki adı: `src/components/ui/...`.

### Düymələr
| Mobil | Görünüş | Veb |
|---|---|---|
| `common/PrimaryButton` | h 54, `radiusLg`, fon `primary`, mətn `button` / `textOnPrimary`; `isSmall`: h 35, mətn 14; disabled: opacity .6; loading: spinner; ikon + 8px gap | `Button variant="primary"` |
| `common/SecondaryButton` | h 54, `radiusLg`, şəffaf fon, 1px `border`, mətn `textPrimary` | `Button variant="secondary"` |
| `common/ActionButton` | primary / destructive (`danger` fon) / outline; disabled opacity .7 (outline .5) | `Button variant="primary\|destructive\|outline"` |
| `common/FollowButton` | pill (`radiusFull`), 1px haşiyə, padding 7×15 (md: 8×18) | `FollowButton` |

### Formalar
| Mobil | Görünüş | Veb |
|---|---|---|
| `common/AppInput` | etiket `body4` + qırmızı `*`; qutu h 52, `radiusLg`, fon `surfaceMuted`, 1px `border` (xətada `danger`), yan padding 15, sol ikon 18px `textMuted`, şifrə üçün göz ikonu; xəta `caption2` `danger`, 4px üstdən; alt boşluq 18 | `Input` |
| `common/PhoneInput` | AppInput kimi + solda bayraq + `+994` ayırıcı xətlə | `PhoneInput` |
| `auth/OtpInput` | 72×64 qutular, `radiusLg`, 1.5px haşiyə, 12 gap | `OtpInput` |
| `common/SearchBar` | h 52, `radiusLg`, fon `surface`, 1px `border`, sol `search` ikonu 17; sağda 52×52 `primary` filtr düyməsi, sayğac nişanı (`danger`, 18px dairə) | `SearchBar` |
| `common/DateField`, `CityPicker`, `SortSelect`, `PriceRangeInput` | AppInput qutusu stilində seçim sahələri | `Select`, `DateField`, `PriceRange` |
| `auth/TermsAgreement` | checkbox + link mətni | `Checkbox` |

### Chip və nişanlar
| Mobil | Görünüş | Veb |
|---|---|---|
| `common/SelectableChip`, `CategoryChips` | pill, 1px haşiyə, padding 8×15 (sm 8×14); seçilib: fon+haşiyə `primary`, mətn `textOnPrimary`; passiv: fon `surfaceMuted`, haşiyə `border`, mətn `chipText`; `caption1` | `Chip` |
| `common/Badge` | pill, padding 4×12, `caption2` 600; primary / accent (qızılı 15% fon) / muted | `Badge` |
| ProductCard status nişanı | pill, padding 3×8, `tiny` 600, yuxarı-sol 8px | `StatusBadge` |

### Kartlar
| Mobil | Görünüş | Veb |
|---|---|---|
| `common/ProductCard` | fon `card`, 1px `border`, `radiusLg`, overflow hidden; şəkil sahəsi aspect 1.2 (en/hündürlük), fon `imageTint1`, şəkil yoxdursa `hanger` 100px `primary`; yuxarı-sağda 28px dairə (`surface`, `shadow-xs`) içində ürək (sevimli: `danger` dolu) və ya edit; məlumat: padding 8/12 üst/18 alt, gap 4 — başlıq `h4` 1 sətir, mağaza `caption2` `textSecondary`, "Ölçü: X", qiymət "min-max AZN / gün" `caption2` `textPrimary`; listing variantında status nişanı və "N baxış" | `ProductCard` |
| `common/StatCard`, `StatsRow`, `BalanceCard` | `radiusLg`, 1px haşiyə, padding 18 | `StatCard` |
| `customer/store/FeaturedStoreCard` | en 150, 1px haşiyə, `radiusLg`, padding 15, 44px avatar + təsdiq nişanı, reytinq | `StoreCard` |
| `customer/store/StoreListItem` | sətir: avatar + ad (+ `verifiedBadge`) + reytinq; alt xətt 1px | `StoreListItem` |
| `common/AccordionCard` | 1px haşiyə, `radius` 12, başlıq padding 15×18, açılan hissə üst xəttlə | `Accordion` |
| `productDetail/PriceTicket` | `radiusLg` bilet formalı qiymət bloku, ortada nöqtəli ayırıcı və yarımdairə kəsiklər | `PriceTicket` |
| `common/ImageGallery`, `FullScreenImageViewer` | şəkil karuseli + tam ekran baxış | `ImageGallery` |

### Siyahılar
| Mobil | Görünüş | Veb |
|---|---|---|
| `common/ListRow` | padding 15 şaquli, alt xətt `borderLight`; 36px avatar/şəkil + `body5` başlıq; sağ element | `ListRow` |
| `common/SettingsListItem` | 36px ikon qutusu (`radiusSm`, fon `imageTint2`, ikon `iconPurple`; danger: `dangerBg`/`danger`; highlighted: `primary`/`textOnPrimary`), başlıq `body4`, alt yazı `caption1` `textMuted`, sağda chevron və ya sayğac | `SettingsListItem` |
| `common/SettingsToggleItem` | 32px dairəvi ikon + açar (switch) | `SettingsToggleItem` |
| `common/NotificationsItem` | bildiriş sətri | `NotificationItem` |
| `chat/ChatListItem`, `MessageBubble`, `DateDivider`, `ChatInputBar`, `ProductMessageCard`, `SystemEventBadge`, `MessageStatusTicks` | mesaj balonu: maks en 80%, padding 12×15, `radiusLg`; öz mesajı sağda | `chat/*` |

### Naviqasiya və başlıqlar
| Mobil | Görünüş | Veb |
|---|---|---|
| `common/ScreenHeader` | fon `primary`, aşağı küncləri `radiusXl`, `shadow-header`, altında 2px `accent` xətt (opacity .7); solda 40px dairə: avatar hərfi (`primaryDark` fon, 1.5px `accent` haşiyə, `h4` `accent`) və ya geri düyməsi ("şüşə": `overlayOnPrimary`); ortada kiçik sətir ("Salam, Ad", `caption1` `textOnPrimaryMuted`) + 6px `accent` nöqtə + başlıq `h3` `textOnPrimary`; sağda 40px şüşə zəng düyməsi, oxunmamış nöqtə 10px `danger` | Vebdə səhifə başlığı bloku `PageHeader` |
| `customer/home/HomeHeader` | `primary` fonlu üst hissə + aşağı sürüşən ağ "yer" kartı (`radiusLg`, `shadow-sm`, -25px üst kənar) | `HomeHero` |
| `bottomTab/*TabBar` + `TabBarIcon` | fon `surface`, `radiusXl`, 1px `borderLight` (üst+yan), kölgə; ikon 20px, aktiv: 40×32 pill fon `primaryLight` + `navActive` rəng + etiket 600; passiv `navInactive` | Vebdə: kompüterdə **yuxarı menyu** (eyni ikonlar, eyni aktiv/passiv rənglər, aktiv pill), mobil endə **aşağı tab bar** (mobildəki kimi) |
| Tab-lar | Qonaq: Əsas, Mağazalar, Profil · Müştəri: Ana səhifə, Mağazalar, Chat, Sevimlilər, Profil · Mağaza: Ana səhifə, Elanlarım, Chat, Profil | eyni |

### Modallar və bildirişlər
| Mobil | Görünüş | Veb |
|---|---|---|
| `modals/BottomSheetModal` | fon `screenBackground`, üst küncləri `radiusXl`, padding 18/22, 40×4 tutacaq, overlay `rgba(0,0,0,.4)`, maks hündürlük 80% | Mobil endə `Sheet` (aşağıdan), kompüterdə mərkəzdə `Modal` |
| `modals/ConfirmActionModal`, `LogoutConfirmModal` | mərkəzdə kart, `radiusXl`, padding 25×18; 56px dairəvi ikon (`primaryLight` / `dangerBg`), başlıq `h3`, təsvir `body5` `textSecondary`, tam en düymələr (təsdiq + outline ləğv) | `ConfirmDialog` |
| `CategorySelectModal`, `CitySelectModal`, `ColorSelectModal`, `LanguageSelectModal`, `SortSelectModal` | BottomSheet içində seçim siyahısı | `Sheet` + siyahı |
| `common/Toast` | yuxarıda mərkəzdə, `radiusLg`, padding 15×18, `shadow-md`; success `statusActive`, error `danger`, info `surface`; ikon 18 + `body4` mətn | `Toast` |

### Vəziyyətlər
| Mobil | Görünüş | Veb |
|---|---|---|
| `common/EmptyState` | mərkəzdə 72px dairə (`surface`, 1px `border`) içində 32px ikon; başlıq `h4`; alt yazı `body4` `textSecondary`; `primary` düymə | `EmptyState` |
| `common/Skeleton` (+ `ProductGridSkeleton`, `*Skeleton`) | fon `surfaceMuted`, `radiusSm`, nəbz animasiyası | `Skeleton` |
| `common/LoadingScreen` | tam ekran yüklənmə | `loading.tsx` |
| `common/Avatar` | dairə, default 48px, fon `primaryLight`, hərf `h4` `primary`; onlayn nöqtə `#3DBE6B` | `Avatar` |
| `common/SectionTitle` | başlıq + "hamısı" linki, alt boşluq 15 | `SectionTitle` |

## 10. Geniş ekran qaydaları (yalnız yerləşmə dəyişir)

- Breakpoint-lər: `sm` 640, `md` 768, `lg` 1024, `xl` 1280.
- Məhsul şəbəkəsi: mobil 2 sütun (mobil app kimi) → `md` 3 → `lg` 4 sütun. Aralıq 12–15px.
- Mağaza siyahısı: mobil 1 sütun → `lg` 2 sütun.
- Məhsul detalı: mobil tək sütun → `lg` solda qalereya, sağda məlumat (2 sütun).
- Chat: mobil siyahı və söhbət ayrı səhifə → `lg` solda siyahı, sağda söhbət.
- Giriş/qeydiyyat: kompüterdə forma mərkəzdə maks 440px, `AuthHeader` bloku formanın üstündə.
- Rənglər, şriftlər, radiuslar, düymə hündürlükləri **dəyişmir**.
