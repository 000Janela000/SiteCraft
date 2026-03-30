"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Mail, Phone, Send, MessageCircle, RotateCcw } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmed = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    }

    if (!trimmed.name || !trimmed.phone || !trimmed.message) return

    setIsSubmitting(true)

    const message = `სახელი: ${trimmed.name}\nტელეფონი: ${trimmed.phone}\nშეტყობინება: ${trimmed.message}`

    // Open Messenger FIRST while still in synchronous user gesture context
    window.open("https://m.me/janela01", "_blank")

    try {
      await navigator.clipboard.writeText(message)
    } catch {
      // Clipboard API may not be available on all devices
    }

    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleReset = () => {
    setFormData({ name: "", phone: "", message: "" })
    setSubmitted(false)
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            კონტაქტი
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            მოდი ვისაუბროთ
            <br className="hidden sm:block" />
            <span className="text-muted-foreground">შენს პროექტზე</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">დამიკავშირდით</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              მზად ვარ შენს პროექტზე სამუშაოდ. მომწერე ფეისბუქზე ან შეავსე ფორმა
              და დაგიკავშირდები 24 საათში.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="https://www.facebook.com/janela01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1877F2] flex items-center justify-center shrink-0">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-accent transition-colors">Facebook</p>
                  <p className="text-sm text-muted-foreground">@janela01</p>
                </div>
              </a>

              <a
                href="tel:+59965721010"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-accent transition-colors">ტელეფონი</p>
                  <p className="text-sm text-muted-foreground">+599 65 72 10</p>
                </div>
              </a>

              <a
                href="mailto:ssjanelidze@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-accent transition-colors">ელ-ფოსტა</p>
                  <p className="text-sm text-muted-foreground">ssjanelidze@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Primary CTA */}
            <Button size="lg" className="w-full mt-8" asChild>
              <a
                href="https://www.facebook.com/janela01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                მომწერეთ Facebook-ზე
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">გამოგზავნეთ შეტყობინება</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Messenger გაიხსნა!</h4>
                  <p className="text-muted-foreground mb-2">
                    შენი მონაცემები დაკოპირებულია — ჩასვი Messenger-ის ჩატში.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    თუ Messenger არ გაიხსნა, მომწერეთ პირდაპირ Facebook-ზე.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button asChild>
                      <a
                        href="https://m.me/janela01"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Messenger-ის გახსნა
                      </a>
                    </Button>
                    <Button variant="outline" onClick={handleReset}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      ახალი შეტყობინება
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      სახელი
                    </label>
                    <Input
                      id="name"
                      placeholder="შენი სახელი"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      maxLength={100}
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      ტელეფონი
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="555 12 34 56"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      maxLength={20}
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      შეტყობინება
                    </label>
                    <Textarea
                      id="message"
                      placeholder="აღწერე შენი ბიზნესი და რა ტიპის საიტი გჭირდება..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      maxLength={1000}
                      className="bg-secondary border-border resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "იგზავნება..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        გაგზავნა
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
