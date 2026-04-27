import type { Metadata } from "next";
import MenuContent from "@/components/pages/MenuContent";

export const metadata: Metadata = {
  title: "Menukaart | Cafetaria Toorop — Nijmegen",
  description: "Bekijk onze volledige menukaart. Verse friet, snacks, kapsalons, pizza's, burgers en meer. Bestel online of haal af in Nijmegen.",
};

export default function MenuPage() {
  return <MenuContent />;
}
