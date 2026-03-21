import { Search, Clock, Award, Shield } from "lucide-react"

const benefits = [
  {
    icon: Search,
    title: "მომხმარებლები მარტივად გიპოვიან",
    description: "სოციალური მედიის გარდა, ბიზნესის აღმოჩენის ძირითადი წყარო ბრაუზერში ძიებაა. საიტი საშუალებას გაძლევს გააუმჯობესო შენი აღმოჩენადობა.",
  },
  {
    icon: Clock,
    title: "24/7 აქტიურობა",
    description: "ფეისბუქზე ყველას ხელით უნდა უპასუხო. საიტზე კი კლიენტები შენს გარეშეც პოულობენ ინფორმაციას და ტოვებენ შეკვეთებს — ბიზნესი არ ჩერდება.",
  },
  {
    icon: Award,
    title: "პროფესიონალური იმიჯი",
    description: "საიტი ნდობას იწვევს ახალ კლიენტებში — კომპანიის იმიჯის განუყოფელი ნაწილია.",
  },
  {
    icon: Shield,
    title: "საკუთარი სივრცე, სრული თავისუფლება",
    description: "ფეისბუქის და სხვა სოციალური ქსელების წესებზე დამოკიდებული აღარ ხარ. შენი საიტი — შენი წესები.",
  },
]

export function WhyWebsite() {
  return (
    <section id="why" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            რაში მჭირდება საიტი?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            თუ აქ ხარ, უკვე იცი
            <br className="hidden sm:block" />
            <span className="text-muted-foreground">რომ საიტი გჭირდება 😉</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            მაგრამ თუ ჯერ კიდევ ეჭვობ — აი რამდენიმე მიზეზი
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-5">
                <benefit.icon className="h-6 w-6 text-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
