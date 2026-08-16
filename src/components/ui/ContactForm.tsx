'use client'

import { useState, type FormEvent } from 'react'
import styles from './ContactForm.module.css'
import { CONTACT } from '@/lib/constants'

interface FormState {
  name: string
  company: string
  country: string
  phone: string
  email: string
  requirement: string
  fabricType: string
  composition: string
  gsm: string
  width: string
  quantity: string
  application: string
  targetPrice: string
  message: string
}

const initial: FormState = {
  name: '', company: '', country: '', phone: '', email: '',
  requirement: '', fabricType: '', composition: '', gsm: '',
  width: '', quantity: '', application: '', targetPrice: '', message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
      setErrors((prev) => ({ ...prev, [field]: false }))
    }
  }

  function validate(): boolean {
    const required: (keyof FormState)[] = ['name', 'company', 'phone', 'email', 'requirement']
    const newErrors: Partial<Record<keyof FormState, boolean>> = {}
    let valid = true
    required.forEach((f) => {
      if (!form[f].trim()) {
        newErrors[f] = true
        valid = false
      }
    })
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    if (!emailOk) { newErrors.email = true; valid = false }
    setErrors(newErrors)
    return valid
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    // Build mailto body — replace this block with fetch() to /api/enquiry or Formspree
    const body = Object.entries(form)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')
    window.location.href = `mailto:${CONTACT.email}?subject=Fabric Enquiry from ${form.company}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✅</div>
        <h3>Enquiry Submitted</h3>
        <p>Thank you, {form.name}. Your email client should have opened with your enquiry. Our team will respond within one business day.</p>
        <button className="btn btn-primary" onClick={() => { setForm(initial); setSubmitted(false) }}>
          Send Another Enquiry
        </button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <Field label="Name" required error={errors.name}>
          <input type="text" value={form.name} onChange={set('name')} placeholder="Your full name" autoComplete="name" />
        </Field>
        <Field label="Company Name" required error={errors.company}>
          <input type="text" value={form.company} onChange={set('company')} placeholder="Your company" autoComplete="organization" />
        </Field>
      </div>

      <div className={styles.row}>
        <Field label="Country" error={false}>
          <input type="text" value={form.country} onChange={set('country')} placeholder="Country" autoComplete="country-name" />
        </Field>
        <Field label="Phone / WhatsApp" required error={errors.phone}>
          <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 XXXXX XXXXX" autoComplete="tel" />
        </Field>
      </div>

      <Field label="Email Address" required error={errors.email}>
        <input type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" autoComplete="email" />
      </Field>

      <Field label="Product Requirement" required error={errors.requirement}>
        <input type="text" value={form.requirement} onChange={set('requirement')} placeholder="e.g. Suiting Fabric — PV, 150 GSM, Grey" />
      </Field>

      <div className={styles.row}>
        <Field label="Fabric Type" error={false}>
          <select value={form.fabricType} onChange={set('fabricType')}>
            <option value="">Select type</option>
            <option>Suiting</option>
            <option>Shirting</option>
            <option>Uniform</option>
            <option>Corporate / Institutional</option>
            <option>Printed</option>
            <option>Specialty / Custom</option>
          </select>
        </Field>
        <Field label="Composition" error={false}>
          <input type="text" value={form.composition} onChange={set('composition')} placeholder="e.g. Polyester/Viscose 80/20" />
        </Field>
      </div>

      <div className={styles.row}>
        <Field label="GSM" error={false}>
          <input type="text" value={form.gsm} onChange={set('gsm')} placeholder="e.g. 150–170 GSM" />
        </Field>
        <Field label="Width" error={false}>
          <input type="text" value={form.width} onChange={set('width')} placeholder="e.g. 58 inches" />
        </Field>
      </div>

      <div className={styles.row}>
        <Field label="Quantity" error={false}>
          <input type="text" value={form.quantity} onChange={set('quantity')} placeholder="e.g. 5000 metres" />
        </Field>
        <Field label="End Application" error={false}>
          <input type="text" value={form.application} onChange={set('application')} placeholder="e.g. School Uniforms" />
        </Field>
      </div>

      <Field label="Target Price (optional)" error={false}>
        <input type="text" value={form.targetPrice} onChange={set('targetPrice')} placeholder="e.g. ₹80–100 per metre" />
      </Field>

      <Field label="Message" error={false}>
        <textarea value={form.message} onChange={set('message')} placeholder="Any additional details or questions..." rows={4} />
      </Field>

      <button type="submit" className={`btn btn-primary ${styles.submit}`}>
        Send Enquiry
      </button>
    </form>
  )
}

function Field({
  label, required, error, children,
}: {
  label: string; required?: boolean; error?: boolean; children: React.ReactNode
}) {
  return (
    <div className={`${styles.field}${error ? ` ${styles.fieldError}` : ''}`}>
      <label>
        {label}
        {required && <span className={styles.req}> *</span>}
      </label>
      {children}
      {error && <span className={styles.errorMsg}>This field is required</span>}
    </div>
  )
}
