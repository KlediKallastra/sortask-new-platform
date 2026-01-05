# Translation Paths - Complete Text Inventory

This document lists all text strings found across the application that need translation.

## ✅ Already Translated (in messages/en.json and messages/de.json)

### Navigation (nav.*)
- nav.solutions
- nav.portfolio
- nav.pricing
- nav.about
- nav.faqs
- nav.contact

### Hero Section (hero.*)
- hero.badge
- hero.title
- hero.titleHighlight
- hero.description
- hero.ctaStart
- hero.ctaExplore

### Features Section (features.*)
- features.title
- features.subtitle
- features.lightningFast.title
- features.lightningFast.description
- features.enterpriseGrade.title
- features.enterpriseGrade.description
- features.provenResults.title
- features.provenResults.description
- features.expertSupport.title
- features.expertSupport.description
- features.cta

### Stats Section (stats.*)
- stats.accuracyRate
- stats.automatedUptime
- stats.roiAverage

### Projects Section (projects.*)
- projects.title
- projects.subtitle
- projects.cta

### Testimonials Section (testimonials.*)
- testimonials.quote
- testimonials.author
- testimonials.role

### Contact Section (contact.*)
- contact.title
- contact.subtitle
- contact.emailPlaceholder
- contact.cta
- contact.disclaimer

### Footer (footer.*)
- footer.description
- footer.platform
- footer.company
- footer.connect
- footer.copyright
- footer.cookiePolicy
- footer.imprint
- footer.aiAgents
- footer.voiceIntegration
- footer.workflowAutomation

---

## 📝 Still Need Translation (To be added to JSON)

### Hero Component Additional Text
- hero.agentStatus: "Agent Status"
- hero.onlineActive: "Online & Active"
- hero.optimization: "Optimization"
- hero.efficiency: "+420% Efficiency"

### Solutions Page (solutions.*)
- solutions.hero.title: "Solutions"
- solutions.hero.subtitle: "..." (needs to be extracted)
- solutions.title: "Solutions That Work"
- solutions.subtitle: "We build AI tools that save you time..."
- solutions.items.* (6 solution cards with title, description, features)

### About Page (about.*)
- about.hero.title: "About Sortask"
- about.hero.description: "..."
- about.mission.title: "Our Mission"
- about.mission.p1: "..."
- about.mission.p2: "..."
- about.vision.title: "Our Vision"
- about.vision.description: "..."
- about.values.* (3 values with title and description)
- about.team.title: "Our Team"
- about.team.ejon.name: "Ejon Duka"
- about.team.ejon.role: "Co-Founder & CEO"
- about.team.kledi.name: "Kledi Kallastra"
- about.team.kledi.role: "Co-Founder & CTO"
- about.team.avdyl.name: "Avdyl Zogaj"
- about.team.avdyl.role: "Co-Founder & COO"

### Portfolio Page (portfolio.*)
- portfolio.hero.title: "Our Portfolio"
- portfolio.hero.subtitle: "Real projects. Real results..."
- portfolio.technologies.title: "Technologies & Capabilities"
- portfolio.technologies.subtitle: "..."
- portfolio.technologies.items.* (4 items)
- portfolio.cta.title: "Ready to see similar results..."
- portfolio.cta.subtitle: "..."
- portfolio.cta.button: "Start Your Project"
- portfolio.projects.* (3 projects with title, category, description, result)

### Pricing Page (pricing.*)
- pricing.hero.title: "Pricing"
- pricing.hero.subtitle: "Every project is unique..."
- pricing.card.badge: "Custom Pricing"
- pricing.card.description: "..."
- pricing.card.included.title: "What's Typically Included:"
- pricing.card.features.* (10 features)
- pricing.card.cta.text: "Ready to get started?..."
- pricing.card.cta.button: "Get Your Custom Quote"
- pricing.info.title: "Why Custom Pricing?"
- pricing.info.description: "..."

### Contact Page (contact.*)
- contact.hero.title: "Get in Touch"
- contact.hero.subtitle: "Ready to transform..."
- contact.form.name: "Name *"
- contact.form.company: "Company"
- contact.form.email: "Email *"
- contact.form.phone: "Phone"
- contact.form.message: "Message *"
- contact.form.namePlaceholder: "Your name"
- contact.form.companyPlaceholder: "Your company"
- contact.form.emailPlaceholder: "your@email.com"
- contact.form.phonePlaceholder: "+1 (555) 000-0000"
- contact.form.messagePlaceholder: "Tell us about your project..."
- contact.form.submit: "Send Message"
- contact.form.sending: "Sending..."
- contact.sidebar.quickCall.title: "Quick Call"
- contact.sidebar.quickCall.description: "..."
- contact.sidebar.quickCall.button: "Schedule Call"
- contact.sidebar.getInTouch.title: "Get in Touch"
- contact.sidebar.email.label: "Email"
- contact.sidebar.phone.label: "Phone"

### FAQs Page (faqs.*)
- faqs.hero.title: "Frequently Asked Questions"
- faqs.hero.subtitle: "Find answers to common questions..."
- faqs.items.* (6 FAQs with question and answer)
- faqs.cta.title: "Still Have Questions?"
- faqs.cta.description: "Can't find what you're looking for?..."
- faqs.cta.button: "Contact Us"

### Cookie Policy Page (cookiePolicy.*)
- (All text from cookie-policy/page.tsx)

### Imprint Page (imprint.*)
- (All text from imprint/page.tsx)

---

## Next Steps

1. Extract remaining text from all pages
2. Add paths to messages/en.json
3. Translate to German in messages/de.json
4. Update components to use `t()` function

## Usage Example

```tsx
import { useTranslations } from '../../lib/i18n'

export default function MyComponent() {
  const t = useTranslations().t
  
  return <h1>{t('hero.title')}</h1>
}
```

