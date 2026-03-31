import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card)_1px,transparent_1px),linear-gradient(to_bottom,var(--card)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-8">
            <Sparkles className="h-4 w-4 text-accent" />
            <span>უფასო კონსულტაცია</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance leading-[1.1]">
            შენი ბიზნესი
            <br />
            <span className="text-muted-foreground">იმსახურებს ვებსაიტს</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            თანამედროვე და სწრაფი ვებსაიტები ქართული ბიზნესისთვის, ხელმისაწვდომ ფასად.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto text-base px-8 py-6">
              <Link href="#pricing">
                ფასების ნახვა
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-base px-8 py-6">
              <Link href="#portfolio">პორტფოლიოს ნახვა</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">10+</div>
              <div className="mt-1 text-sm text-muted-foreground">დასრულებული პროექტი</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">3-7</div>
              <div className="mt-1 text-sm text-muted-foreground">დღეში მიწოდება</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">100%</div>
              <div className="mt-1 text-sm text-muted-foreground">კმაყოფილი კლიენტი</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <div className="mt-1 text-sm text-muted-foreground">მხარდაჭერა</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
