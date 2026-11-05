"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/PageShell";
import {
  Avatar, Badge, Button, Card, Chip, ChipRow, ConfirmDialog, EmptyState, FollowButton, Input, ListRow,
  Modal, PhoneInput, ProductCard, ProductCardSkeleton, ProductGrid, SearchBar, SectionTitle,
  SettingsListItem, StatCard, StatusBadge, useToast,
} from "@/components/ui";
import type { Product } from "@/types/product";

const product = (id: number, extra: Partial<Product> = {}): Product => ({
  id, title: `Axşam donu ${id} — uzun adlı məhsul başlığı`, description: null, store: "Gəncə Butik", storeId: 1,
  priceMin: 40, priceMax: 60, depositAmount: 100, size: "M", color: null, brand: null, condition: "new",
  gender: "female", category: "Don", images: [], ...extra,
});

export function UiPreview() {
  const toast = useToast();
  const [sheet, setSheet] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [chip, setChip] = useState("all");
  const [phone, setPhone] = useState("");
  const [fav, setFav] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <>
      <PageHeader title="Komponentlər" eyebrow="Salam, Kənan" backHref="/" />
      <Container className="flex flex-col gap-s7 py-s6">
        <section data-testid="buttons" className="flex flex-col gap-s2">
          <SectionTitle title="Düymələr" href="/" />
          <div className="grid gap-s2 sm:grid-cols-2">
            <Button>Daxil ol</Button>
            <Button variant="secondary">Qeydiyyat</Button>
            <Button variant="destructive">Çıxış</Button>
            <Button variant="outline" loading>Yüklənir</Button>
            <Button size="sm">Kiçik</Button>
            <Button disabled>Deaktiv</Button>
          </div>
        </section>

        <section data-testid="inputs" className="grid gap-x-s4 md:grid-cols-2">
          <Input label="Ad soyad" placeholder="Adınızı daxil edin" icon="profile" required />
          <Input label="Şifrə" placeholder="••••••" icon="lock" isPassword />
          <Input label="E-poçt" placeholder="mail@glam.az" icon="mail" error="E-poçt düzgün deyil" />
          <PhoneInput label="Telefon" value={phone} onChange={setPhone} required />
          <SearchBar className="md:col-span-2" onFilterClick={() => undefined} filterCount={3} containerClassName="md:col-span-2" />
        </section>

        <section data-testid="chips" className="flex flex-col gap-s3">
          <ChipRow>
            {["all", "Don", "Kostyum", "Ayaqqabı", "Çanta", "Aksesuar", "Uşaq", "Kişi geyimi"].map((c) => (
              <Chip key={c} selected={chip === c} onClick={() => setChip(c)}>{c === "all" ? "Hamısı" : c}</Chip>
            ))}
          </ChipRow>
          <div className="flex flex-wrap items-center gap-s2">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="accent">Seçilmiş</Badge>
            <Badge>Muted</Badge>
            {(["active", "pending", "inactive", "sold", "rejected"] as const).map((s) => <StatusBadge key={s} status={s} />)}
            <FollowButton following={following} onClick={() => setFollowing((v) => !v)} />
            <Avatar initials="GB" isOnline />
          </div>
        </section>

        <section data-testid="cards">
          <ProductGrid>
            <ProductCard product={product(1, { favorite: fav })} href="#" onToggleFavorite={() => setFav((v) => !v)} />
            <ProductCard product={product(2)} href="#" onToggleFavorite={() => undefined} />
            <ProductCard product={product(3, { status: "pending", views: 12 })} href="#" variant="listing" editHref="#" />
            <ProductCardSkeleton />
          </ProductGrid>
          <div className="mt-s4 flex flex-col gap-s2 sm:flex-row">
            <StatCard label="Aktiv elanlar" value="12" />
            <StatCard label="Baxışlar" value="1 240" hint="son 30 gün" />
          </div>
        </section>

        <section data-testid="lists">
          <Card className="px-s4">
            <ListRow title="Gəncə Butik" avatarInitials="GB" right={<FollowButton following onClick={() => undefined} />} />
            <SettingsListItem icon="globe" title="Dil" subtitle="Azərbaycan" onClick={() => undefined} />
            <SettingsListItem icon="heart" title="Sevimlilər" badge={4} onClick={() => undefined} />
            <SettingsListItem icon="logout" title="Çıxış" danger isLast onClick={() => undefined} />
          </Card>
        </section>

        <section data-testid="overlays" className="flex flex-wrap gap-s2">
          <Button onClick={() => toast.info("Məlumat bildirişi")}>Toast info</Button>
          <Button onClick={() => toast.success("Uğurla yadda saxlanıldı")}>Toast success</Button>
          <Button onClick={() => toast.error("Xəta baş verdi")}>Toast error</Button>
          <Button variant="secondary" onClick={() => setSheet(true)}>Sheet</Button>
          <Button variant="secondary" onClick={() => setDialog(true)}>Dialog</Button>
        </section>

        <EmptyState title="Sevimli yoxdur" subtitle="Bəyəndiyiniz məhsulları ürək ilə yadda saxlayın." icon="heart" action={<Button>Kəşf et</Button>} />
      </Container>

      <Modal open={sheet} onClose={() => setSheet(false)} title="Şəhər seçin">
        <div className="flex flex-col">
          {["Bakı", "Gəncə", "Sumqayıt", "Lənkəran"].map((c, i, a) => (
            <ListRow key={c} title={c} isLast={i === a.length - 1} onClick={() => setSheet(false)} />
          ))}
        </div>
      </Modal>
      <ConfirmDialog
        open={dialog}
        onClose={() => setDialog(false)}
        onConfirm={() => setDialog(false)}
        icon="logout"
        title="Çıxış etmək istəyirsiniz?"
        description="Hesabınızdan çıxacaqsınız."
        confirmLabel="Çıxış"
        cancelLabel="Ləğv et"
        destructive
      />
    </>
  );
}
