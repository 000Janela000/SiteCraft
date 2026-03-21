import Link from "next/link"
import { MessageSquare, Code2, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "დამიკავშირდი",
    description: "მომწერე ფეისბუქზე ან შეავსე ფორმა — აღწერე რა გჭირდება. კონსულტაცია უფასოა.",
    href: "#contact",
  },
  {
    number: "02",
    icon: Code2,
    title: "ვქმნი",
    description: "შენს მოთხოვნებზე მორგებულ საიტს ვქმნი მოკლე ვადებში. პროცესს ნებისმიერ ეტაპზე თვალს ადევნებ.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "ონლაინ ხარ",
    description: "საიტი მზადაა! დომეინისა და ჰოსტინგის დაყენებაშიც დაგეხმარები.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            პროცესი
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            როგორ მუშაობს
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            სამი მარტივი ნაბიჯი თქვენი ვებსაიტის შესაქმნელად
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border mb-6 relative">
                  <step.icon className="h-7 w-7 text-foreground" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                {step.href ? (
                  <Link href={step.href} className="text-xl font-semibold mb-3 inline-block hover:text-accent transition-colors">
                    {step.title}
                  </Link>
                ) : (
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                )}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
