import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore our collection.",
}

export default function StorePage() {
  return <StoreTemplate />
}
