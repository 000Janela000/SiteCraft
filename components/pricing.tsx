import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const packages = [
  {
    name: "Landing Page",
    nameGe: "ლენდინგ ფეიჯი",
    price: "250",
    description: "ერთგვერდიანი ვებსაიტი შენი იმიჯის წარსადგენად",
    features: [
      "ერთგვერდიანი ვებსაიტი",
      "მობილურზე ადაპტირებული",
      "თანამედროვე დიზაინი",
      "SEO — აღმოჩენადობა ძიებაში",
    ],
    popular: false,
  },
  {
    name: "Multi-page",
    nameGe: "მრავალგვერდიანი",
    price: "350",
    description: "სრულფასოვანი ვებსაიტი შენი ბიზნესისთვის",
    features: [
      "მრავალი გვერდი",
      "ორგანიზებული სტრუქტურა და ნავიგაცია",
      "საკონტაქტო გვერდი",
      "მობილურზე ადაპტირებული",
      "SEO — აღმოჩენადობა ძიებაში",
    ],
    popular: true,
  },
  {
    name: "With Admin Panel",
    nameGe: "სამართავი გვერდით",
    price: "500",
    description: "მართე კონტენტი დამოუკიდებლად",
    features: [
      "მრავალგვერდიანის ყველა ფუნქცია",
      "სამართავი პანელი",
      "კონტენტის რედაქტირება",
      "სურათების ატვირთვა",
      "დეველოპერი აღარ გჭირდება",
    ],
    popular: false,
  },
  {
    name: "With Payments",
    nameGe: "გადახდის სისტემით",
    price: "800",
    description: "ონლაინ მაღაზია — მიიღე შეკვეთები ონლაინ",
    features: [
      "სამართავი გვერდის ყველა ფუნქცია",
      "ონლაინ გადახდის ინტეგრაცია",
      "TBC / BOG Pay ინტეგრაცია",
      "შეკვეთების მართვა",
      "ელ-ფოსტის შეტყობინებები",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            ფასები
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            გამჭვირვალე ფასები,
            <br className="hidden sm:block" />
            დამალული ხარჯების გარეშე
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            სააგენტოები 2,000+ ლარს იღებენ საიტის შექმნაში. მე კი პირდაპირ ვმუშაობ კლიენტთან — ვთავაზობ პრემიუმ პროდუქტს გონივრულ ფასად.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative flex flex-col bg-card border rounded-2xl p-6 ${
                pkg.popular
                  ? "border-accent ring-1 ring-accent"
                  : "border-border"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    <Star className="h-3 w-3 fill-current" />
                    პოპულარული
                  </div>
                </div>
              )}

              {/* Package Info */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">{pkg.name}</p>
                <h3 className="text-xl font-semibold mt-1">{pkg.nameGe}</h3>
                <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">საწყისი</span>
                <div className="mt-1">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground ml-1">ლარიდან</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                variant={pkg.popular ? "default" : "outline"}
                className="w-full"
              >
                <Link href="#contact">შეკვეთა</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Free Consultation Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            არ იცი რომელი პაკეტი ჭირდება შენს ბიზნესს?{" "}
            <Link href="#contact" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors">
              მომწერე ან დამირეკე უფასო კონსულტაციისთვის
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
