import { Metrics } from "./metrics"
import { lighthouseScores } from "@/lib/lighthouse"

export function MetricsSection() {
  const metrics = [
    { label: "სიჩქარე", score: lighthouseScores.sitecraft.performance },
    { label: "ხელმისაწვდომობა", score: lighthouseScores.sitecraft.accessibility },
    { label: "საუკეთესო ღირებულებები", score: lighthouseScores.sitecraft.bestPractices },
    { label: "SEO", score: lighthouseScores.sitecraft.seo },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            ხარისხის სამ证
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4">
            შენი საიტი იქნება
            <br className="hidden sm:block" />
            <span className="text-muted-foreground">სწრაფი და ოპტიმიზირებული</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            ჩვენი საიტი საუკეთესო ღირებულებების აკმაყოფილებს — შენიც აკმაყოფილებდება
          </p>
        </div>

        {/* Metrics */}
        <Metrics scores={metrics} />
      </div>
    </section>
  )
}
