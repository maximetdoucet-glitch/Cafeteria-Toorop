import type { Metadata } from "next";
import ReviewsContent from "@/components/pages/ReviewsContent";

export const metadata: Metadata = {
  title: "Recensies | Cafetaria Toorop — De stem van Nijmegen",
  description: "Lees wat onze gasten zeggen over onze verse friet, beroemde kapsalon en gastvrije service in Nijmegen.",
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
