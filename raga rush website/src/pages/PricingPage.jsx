import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const plans = [
  {
    name: 'Classic',
    price: 'INR 24,999',
    details: ['1 original song (up to 2:30)', '1 vocal style', '2 revisions', 'Delivery in 10 days'],
  },
  {
    name: 'Signature',
    price: 'INR 44,999',
    details: ['1 song (up to 3:30)', 'Premium arrangement', '4 revisions', 'Delivery in 7 days'],
  },
  {
    name: 'Cinematic',
    price: 'INR 79,999+',
    details: ['Extended composition', 'Film-grade production', 'Priority delivery', 'Performance/stems add-ons'],
  },
]

export function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing | Raga Rush"
        description="Transparent pricing for Raga Rush custom song packages. Choose from Classic, Signature, and Cinematic experiences."
        path="/pricing"
      />
      <AnimatedSection className="container py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl">Pricing that matches your moment.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Starting packages below. Final quote depends on language count, arrangement complexity, and rush timeline.
        </p>
      </AnimatedSection>
      <AnimatedSection className="container pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <motion.div key={plan.name} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
              <Card className="h-full bg-card/70">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <p className="text-3xl font-bold text-primary">{plan.price}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  {plan.details.map((item) => (
                    <p key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent" />
                      {item}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/contact">
            <Button size="lg">Request a Custom Quote</Button>
          </Link>
        </div>
      </AnimatedSection>
    </>
  )
}
