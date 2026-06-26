import Hero from "@/app/components/Hero"
import ThesisSection from "@/app/components/ThesisSection"
import WorldMap from "@/app/components/WorldMap"
import FieldWork from "@/app/components/FieldWork"
import PostersSection from "@/app/components/PostersSection"
import LifeSection from "@/app/components/LifeSection"

export default function Home() {
  return (
    <main>
      <Hero />
      <ThesisSection />
      <WorldMap />
      <FieldWork />
      <PostersSection />
      <LifeSection />
    </main>
  )
}
