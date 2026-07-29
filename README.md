# Advance Care Hub

Ek quick heads-up before prompt doon: About Us, Mission, aur doctor bio wagerah maine original likh diya hai — reference site ka exact paragraph copy karna legally risky hota hai (unka copyright content hai, aur medical business ke liye fake patient-count stats bhi theek nahi). Design, layout, colors, service categories same rakhe hain jaisa tune bola. Stats bar ke numbers placeholder rakhe hain — wo apne client se confirm karke daal dena.

```markdown

# Website Build Prompt — Advance Speech and Hearing Clinic

## Goal

Build a multi-page, fully responsive (mobile-first) website for an audiology and speech therapy clinic. Replicate the reference site's overall structure, layout, section types, visual style, and design system exactly — but all written content and business details below are specific to this client and must be used as-is.

Make the site feel smooth: subtle scroll-in animations on sections, smooth hover states on buttons/cards, sticky header on scroll, mobile hamburger menu with an expandable "Services" submenu (matching the reference's mobile nav behavior).

---

## Business Info

**Name:** Advance Speech and Hearing Clinic

**Type:** Audiologist / Speech & Hearing Specialist Clinic (multi-location, Gujarat)

**Head Office:** Gandhinagar

**Lead Doctor:** Dr. Naim A. Mansuri — Consultant Audiologist

**WhatsApp / Phone:** +91 99790 02527

**Logo:** No image logo yet — use a clean text-based wordmark ("Advance Speech and Hearing Clinic") in the heading font, styled like the reference logo (two-tone: one word in dark navy, one word in the primary red).

### Locations

1. **Gandhinagar (Head Office)** — 3rd Floor, 307, Shagun-11, above Croma Center, Sector 11, Gandhinagar, Gujarat 382010

2. **Patan** — 1st Floor, Pandya Complex, Opp. Old S.T. Bus Stop, Krishnanagar Society, Hansapur Part, Patan, Gujarat 384265 | Phone: 097242 82527

3. **Ahmedabad (Sarkhej)** — First Floor, Blue Water, 108, Amber Tower Rd, Near Bushra Hospital, Arshad Park, Sarkhej, Ahmedabad, Gujarat 380055

4. **Surendranagar** — Surendranagar, Gujarat (full address pending)

**Hours (all locations):** Open all 7 days, closes 7:00 PM (opening time not yet confirmed — placeholder 10:00 AM, replace once confirmed with client)

Do NOT include any star ratings or review counts anywhere on the site.

---

## Design System

### Colors

| Token | Hex |

|---|---|

| Primary (buttons, accents, headings) | #A93539 |

| Primary hover | #A3343B |

| Secondary | #54595F |

| Muted text | #7A7A7A |

| Dark navy (footer bg, headings) | #1A202C |

| Dark gray | #2D3748 |

| Mid gray | #4A5568 |

| Light gray | #718096 |

| Section bg (light) | #EDF2F7 |

| Card bg (lighter) | #F7FAFC |

| White | #FFFFFF |

| Page body background | #F1F4F9 |

### Typography

- Headings: **Roboto**, weight 600

- Secondary/accent headings: **Roboto Slab**, weight 400

- Body text: **Roboto**, weight 400

- Fallback stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif

### Spacing scale

xs: 1em · sm: 1.5rem · md: 2rem · lg: 2.5em · xl: 3.5em · xxl: 5rem

### Component style notes

- Service cards: white background, thick red left border, rounded corners, soft shadow

- Primary buttons: solid red (#A93539), white text, rounded (pill or slightly rounded rectangle)

- Secondary/dark buttons: navy background, white text

- CTA banners: full-width colored bar (alternating red and blue across pages) with left-aligned headline + phone number, right-aligned "Book Appointment" button

- Stats bar: full-width red background, 4 columns, large white bold numbers with small caps label underneath

---

## Global Components

### Header / Navigation

- Left: text logo

- Nav links: Home, Services (expandable dropdown/submenu on mobile), Doctors, About Us, Locations, Contact Us

- Right: "Make Appointment" button (primary red)

- Mobile: hamburger icon opens a full-screen left-side drawer menu, matching reference behavior (Services expands with a chevron)

### Footer (dark navy background)

- Column 1: Text logo + one-line tagline: "Trusted hearing and speech care across Gujarat."

- Column 2 "Explore": Home, Services, About Us, Doctors, Locations, Contact Us

- Column 3 "Services": Hearing Assessments, Hearing Aids & Fitting, Cochlear Implants, Tinnitus Management, Speech & Language Therapy

- Column 4 "Contact": WhatsApp/phone +91 99790 02527, head office address (Gandhinagar), link to full Locations page

- Bottom bar: "Advance Speech and Hearing Clinic © 2026 All rights reserved." | Privacy | Terms of Use

### Appointment / Contact Form (reused on Home, all service pages, Contact page)

Fields: Your Name, Your Phone/Email, Subject, Message (optional), Submit button. On submit, no backend needed yet — just show a success message (or wire to a WhatsApp click-to-chat link as a functional fallback: `https://wa.me/919979002527`).

### Opening Hours Widget (sidebar on service pages)

"Open All Days — Closes 7:00 PM" (single line, since hours don't vary by day)

### Stats Bar

4 columns with placeholder values — mark clearly as placeholders to replace once client confirms real numbers:

- [X]+ Happy Patients

- [X] Locations

- [X] Years of Service

- [X] Specialist Staff

---

## Pages & Content

### 1. Home

- **Hero:** Eyebrow "Welcome To" → Heading "Advance Speech and Hearing Clinic" → Tagline: "Trusted audiology and speech therapy care across Gujarat — accurate hearing assessments, advanced hearing aid fittings, and complete auditory rehabilitation under one roof." → CTA button "Book Consultation" → two side-by-side cards: "Call / WhatsApp Us — +91 99790 02527" and "Open All Days — Closes 7 PM"

- **About teaser:** Eyebrow "About Us" → Heading "Advance Speech and Hearing Clinic" → Paragraph: "Advance Speech and Hearing Clinic has been serving patients across Gujarat with dedicated audiology and speech-language care. Led by Dr. Naim A. Mansuri, our team combines clinical expertise with modern diagnostic technology to assess, treat, and manage hearing and speech conditions for patients of every age. From our head office in Gandhinagar to branches in Patan, Ahmedabad, and Surendranagar, we bring the same standard of personalized care to every location." → "Know More" button

- **Services grid:** Eyebrow "Services" → Heading "Our Hearing & Speech Services" → 9 two-column cards (see Services section below) → "View All Services" button

- **Stats bar**

- **Doctors teaser:** Eyebrow "Our Doctor" → Heading "Meet Our Specialist" → short paragraph introducing Dr. Naim A. Mansuri → "More About Us" button

- **Locations/Contact section:** Map + all 4 branch addresses + WhatsApp/phone + contact form

- **Footer**

### 2. About Us

- Banner header: "About Us"

- Image/video block (ear + audiometry chart style image)

- Heading "Advance Speech and Hearing Clinic" → Paragraph: "At Advance Speech and Hearing Clinic, we believe better hearing and clear communication change lives — at home, at school, and at work. Every patient who walks into any of our clinics receives a thorough evaluation, a clear explanation of their results, and a treatment plan built around their specific needs and lifestyle."

- **Mission & Values** accordion section:

  - Heading: "Mission & Values"

  - Intro paragraph: "Hearing and speech are at the center of how we connect with the people around us. Our team is committed to identifying problems early, treating them effectively, and supporting patients and their families through every step of the process — whether that's a child's first hearing test or an adult adjusting to a new hearing aid."

  - **Mission** (expanded bullets): Provide accurate, technology-driven hearing and speech assessments for all ages · Fit and program hearing aids and assistive devices suited to each patient's lifestyle · Make expert audiology care accessible across multiple Gujarat locations · Guide families through diagnosis, treatment, and long-term auditory rehabilitation · Stay current with the latest diagnostic and hearing aid technology

  - **Vision** (collapsed): "To be Gujarat's most trusted name in hearing and speech care, recognized for accuracy, compassion, and consistent results across every branch."

  - **Values** (collapsed): "Patient-first care, clinical accuracy, honesty in every diagnosis, and long-term support beyond the first appointment."

- Stats bar

- CTA banner: "Get a Free Consultation — Call or WhatsApp +91 99790 02527" / "Book Appointment"

- Footer

### 3. Doctors

- Banner header: "Our Doctor"

- One doctor card (design should support adding more later):

  - **Dr. Naim A. Mansuri** — Consultant Audiologist

  - Bio: "Dr. Naim A. Mansuri leads Advance Speech and Hearing Clinic with a focus on precise diagnosis and personalized hearing aid fitting. With years of clinical experience across multiple Gujarat locations, he has helped hundreds of patients — from newborns to seniors — regain clear hearing and confident communication."

- CTA banner

- Footer

### 4. Services Overview

Same 9-category grid as Home, full width, each linking to its own detail page:

1. **Hearing Assessments** — "Detailed hearing tests for children and adults to accurately measure hearing ability and detect problems early." — Pure Tone Audiometry (PTA), Speech Audiometry, Auditory Brainstem Response (ABR), Otoacoustic Emissions (OAE), Tympanometry & Acoustic Reflexes, Auditory Steady-State Response (ASSR)

2. **Hearing Aids & Fitting** — "Digital hearing aids programmed and fitted to match each patient's hearing profile and daily routine." — Behind-the-Ear (BTE), In-the-Ear (ITE), Completely-in-Canal (CIC), Rechargeable Bluetooth Aids, Real Ear Measurement (REM), Ear Mould Impression

3. **Cochlear Implants** — "Evaluation, surgical coordination, and rehabilitation support for patients with severe to profound hearing loss." — Implant Suitability Assessment, Surgical Coordination, MAP Programming, Rehabilitation Therapy

4. **Tinnitus Management** — "Structured programs to help patients manage chronic ringing in the ears and improve day-to-day comfort." — Sound Therapy Devices, Tinnitus Retraining Therapy (TRT), Relaxation Coaching, Noise Masking Systems

5. **Speech & Language Therapy** — "Therapy for children and adults working to improve speech clarity, language skills, and communication confidence." — Articulation Therapy, Language Delay Intervention, Fluency & Stuttering Correction, Voice Therapy

6. **Pediatric Audiology** — "Hearing care built for children — from newborn screening to fitting hearing aids for young ears." — Newborn Hearing Screening, Behavioral Observation Audiometry (BOA), Play Audiometry, Parent Guidance Sessions, Hearing Aid Fitting for Kids

7. **Home Visits & Tele-Audiology** — "Remote consultations and at-home diagnostic support for patients who can't easily visit a clinic." — Virtual Hearing Aid Programming, Video Consultations, On-Site Testing, Elderly & Disability Care

8. **Assistive Listening Devices (ALDs)** — "Additional listening tools that improve hearing in classrooms, offices, and other everyday environments." — FM Systems, Induction Loop Systems, Infrared Listening Devices, Personal Amplifiers, TV Streamers for Hearing Aids

9. **Hearing Aid Repair & Maintenance** — "Servicing and maintenance for hearing aids across major brands, keeping devices working at their best." — Battery Replacement, Wax Guard & Tube Change, Device Cleaning, Software Updates, Loaner Devices During Repair

### 5. Service Detail Pages (one per category above)

Template: Banner with service name → left column (image + 3 text sections) → right column (Opening Hours widget + Appointment form) → CTA banner → Footer

**Full example copy for 3 services (use this exact structure/tone to write the remaining 6):**

**— Hearing Assessments —**

*What Are Hearing Assessments?*

"A hearing assessment is a set of diagnostic tests used to measure how well a person hears across different frequencies and volumes. At Advance Speech and Hearing Clinic, our assessments are carried out by trained audiologists using calibrated equipment, giving an accurate picture of a patient's hearing health in a single visit."

"Assessments are suitable for children as young as a few months old through to seniors, and results guide every next step — whether that's monitoring, a hearing aid recommendation, or referral for further treatment."

*Why Hearing Assessments Matter*

"Hearing loss often develops slowly, and many people adjust without realizing how much they're missing until it starts affecting conversations, work, or relationships. A timely assessment catches these changes early."

"Left unaddressed, hearing difficulties can lead to social withdrawal, strain in relationships, and reduced performance at school or work. An early, accurate diagnosis opens the door to the right treatment before the impact grows."

*Who Should Get a Hearing Assessment?*

Consider booking an assessment if: You often ask people to repeat themselves · You find it hard to follow conversations in noisy places · Others say you keep the TV or phone volume too loud · Children are slow to respond to sounds or speech · You've noticed ringing or fullness in your ears

"Assessments are recommended for all ages — the earlier a hearing issue is caught, the better the outcome."

**— Hearing Aids & Fitting —**

*Understanding Hearing Aid Fitting*

"Fitting a hearing aid is more than picking a device off a shelf — it's a guided process that matches the aid's settings to a patient's exact hearing profile and daily lifestyle. At Advance Speech and Hearing Clinic, every fitting starts with a full assessment and ends with real-world testing."

"Whether it's a first-time hearing aid or an upgrade, our audiologists walk patients through each step so the result feels natural and comfortable from day one."

*Why Proper Fitting Matters*

"A poorly fitted hearing aid can cause discomfort, feedback noise, or even make hearing worse over time. That's why our process includes precise measurements, digital programming, and testing in real listening conditions."

"Matching the device settings to each patient's hearing profile helps restore natural, clear hearing — so patients can re-engage with conversations and environments they'd been struggling with."

*How We Personalize Every Fitting*

Every patient's ear shape, hearing thresholds, and lifestyle are different. Our fitting process includes: Audiometric testing to map hearing loss · Lifestyle assessment to match the right device · Real-ear measurement (REM) for acoustic accuracy · Custom programming based on speech needs · Ongoing adjustments for gain and noise management

"This ensures every hearing aid we fit is not just functional, but fully optimized for the patient wearing it."

**— Cochlear Implants —**

*What Are Cochlear Implants?*

"Cochlear implants are medical devices designed for people with severe to profound hearing loss who get limited benefit from hearing aids. Unlike hearing aids, which amplify sound, a cochlear implant bypasses the damaged part of the ear and stimulates the auditory nerve directly."

"For patients who haven't found success with hearing aids, a cochlear implant can offer a meaningful return to clearer hearing, improving communication and daily independence."

*How Cochlear Implants Work*

"An external processor picks up sound and converts it into a digital signal. That signal is sent to an internal implant, which stimulates the auditory nerve directly — bypassing the damaged cochlea. The brain interprets these signals as sound."

"Cochlear implant technology continues to improve, offering better sound quality and clearer speech recognition, even in noisy environments."

*Who Can Benefit From Cochlear Implants?*

Cochlear implants may be suitable for patients who: Have severe to profound hearing loss in both ears · See limited improvement from hearing aids · Score below 50% on speech recognition tests (even with hearing aids) · Are medically fit for surgery · Are committed to post-implant rehabilitation

"Children as young as 12 months and adults of any age can be evaluated for suitability."

**For the remaining 6 services** (Tinnitus Management, Speech & Language Therapy, Pediatric Audiology, Home Visits & Tele-Audiology, Assistive Listening Devices, Hearing Aid Repair & Maintenance): follow the same 3-section pattern (What is it? / Why it matters / Who should consider it), using the one-liner description and bullet list from the Services Overview section above, and write 2 short original paragraphs per section in the same tone as the examples.

### 6. Locations / Contact

- Heading: "Visit Us"

- 4 branch cards, each with: branch name, full address, map embed, phone (Patan only) / WhatsApp, hours ("Open All Days — Closes 7 PM")

- Contact form at the bottom

- Footer

---

## Technical Requirements

- Fully responsive, mobile-first (test at 375px width first, then scale up)

- Sticky header on scroll

- Smooth section-reveal animations and button/card hover transitions

- Working WhatsApp click-to-chat button (`https://wa.me/919979002527`) in header and on every CTA banner

- Contact/appointment forms: front-end only for now, show a success confirmation on submit

- Clean, fast-loading, no broken image placeholders — use neutral stock-style imagery for hero/service sections until real photos are provided

```



So mujhe is same to same ese website bnani hai jiese image mai sb kuch same ho sb kuch sb kuch except logo branding name , contact info , address, doctor name , phone number also integrate whatsapp jab bhi kisis ko appointment book karne ho toh voh jab book kare so ussko address ya Branch choose karne ka option aye acche tarike se proffesion badiya tarike se aur mujhe ese bahut badiya website chaiye smooth ness animation ke saath yaad rakhio and yaad rakh ki blog ka section mat add kario

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/788bb0be-efba-456b-9436-2fc57260b249).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
