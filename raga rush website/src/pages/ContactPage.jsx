import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  occasion: '',
  message: '',
}

const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'

export function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('Thank you! Your brief has been sent. We will reply within 24 hours.')
      setForm(initialForm)
    } catch (error) {
      setStatus('Unable to send right now. Please email us directly at hello@ragarush.in.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Seo
        title="Contact | Raga Rush"
        description="Contact Raga Rush to commission your custom wedding, creator, or brand song."
        path="/contact"
      />
      <AnimatedSection className="container py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl">Tell us your story.</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Share your occasion, references, and desired mood. We will turn your brief into a tailor-made composition.
        </p>
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <Card className="mt-10 max-w-2xl bg-card/70">
            <CardHeader>
              <CardTitle>Project inquiry form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                <Input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
                <Input name="phone" placeholder="Phone / WhatsApp" value={form.phone} onChange={handleChange} />
                <Input name="occasion" placeholder="Wedding / Creator / Brand" value={form.occasion} onChange={handleChange} required />
                <Textarea name="message" placeholder="Tell us the story and vibe you want..." value={form.message} onChange={handleChange} required />
                <Button type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Brief'}
                </Button>
              </form>
              {status && <p className="mt-4 text-sm text-muted-foreground">{status}</p>}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatedSection>
    </>
  )
}
