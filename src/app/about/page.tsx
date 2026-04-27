import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "Over Ons | Cafetaria Toorop — Nijmegen",
  description: "Ontdek het verhaal achter Cafetaria Toorop. Een vertrouwde snackbar in Nijmegen voor verse friet, snacks en meer.",
};

export default function AboutPage() {
  return <AboutContent />;
}
