import Nav from "@/app/components/Nav"
import Hero from "@/app/components/Hero"
import ThesisSection from "@/app/components/ThesisSection"
import ScienceSection from "@/app/components/ScienceSection"
import WorldMap from "@/app/components/WorldMap"
import FieldWork from "@/app/components/FieldWork"
import PostersSection from "@/app/components/PostersSection"
import LifeSection from "@/app/components/LifeSection"
import AnimatedSection from "@/app/components/AnimatedSection"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <AnimatedSection>
        <ThesisSection />
      </AnimatedSection>
      <AnimatedSection>
        <ScienceSection />
      </AnimatedSection>
      <WorldMap />
      <FieldWork />
      <AnimatedSection>
        <PostersSection />
      </AnimatedSection>
      <AnimatedSection>
        <LifeSection />
      </AnimatedSection>
    </main>
  )
}
