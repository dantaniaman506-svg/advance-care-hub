export type Service = {
  slug: string;
  title: string;
  oneLiner: string;
  bullets: string[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const services: Service[] = [
  {
    slug: "hearing-assessments",
    title: "Hearing Assessments",
    oneLiner:
      "Detailed hearing tests for children and adults to accurately measure hearing ability and detect problems early.",
    bullets: [
      "Pure Tone Audiometry (PTA)",
      "Speech Audiometry",
      "Auditory Brainstem Response (ABR)",
      "Otoacoustic Emissions (OAE)",
      "Tympanometry & Acoustic Reflexes",
      "Auditory Steady-State Response (ASSR)",
    ],
    sections: [
      {
        heading: "What Are Hearing Assessments?",
        paragraphs: [
          "A hearing assessment is a set of diagnostic tests used to measure how well a person hears across different frequencies and volumes. At Advance Speech and Hearing Clinic, our assessments are carried out by trained audiologists using calibrated equipment, giving an accurate picture of a patient's hearing health in a single visit.",
          "Assessments are suitable for children as young as a few months old through to seniors, and results guide every next step — whether that's monitoring, a hearing aid recommendation, or referral for further treatment.",
        ],
      },
      {
        heading: "Why Hearing Assessments Matter",
        paragraphs: [
          "Hearing loss often develops slowly, and many people adjust without realizing how much they're missing until it starts affecting conversations, work, or relationships. A timely assessment catches these changes early.",
          "Left unaddressed, hearing difficulties can lead to social withdrawal, strain in relationships, and reduced performance at school or work. An early, accurate diagnosis opens the door to the right treatment before the impact grows.",
        ],
      },
      {
        heading: "Who Should Get a Hearing Assessment?",
        paragraphs: [
          "Assessments are recommended for all ages — the earlier a hearing issue is caught, the better the outcome.",
        ],
        bullets: [
          "You often ask people to repeat themselves",
          "You find it hard to follow conversations in noisy places",
          "Others say you keep the TV or phone volume too loud",
          "Children are slow to respond to sounds or speech",
          "You've noticed ringing or fullness in your ears",
        ],
      },
    ],
  },
  {
    slug: "hearing-aids-fitting",
    title: "Hearing Aids & Fitting",
    oneLiner:
      "Digital hearing aids programmed and fitted to match each patient's hearing profile and daily routine.",
    bullets: [
      "Behind-the-Ear (BTE)",
      "In-the-Ear (ITE)",
      "Completely-in-Canal (CIC)",
      "Rechargeable Bluetooth Aids",
      "Real Ear Measurement (REM)",
      "Ear Mould Impression",
    ],
    sections: [
      {
        heading: "Understanding Hearing Aid Fitting",
        paragraphs: [
          "Fitting a hearing aid is more than picking a device off a shelf — it's a guided process that matches the aid's settings to a patient's exact hearing profile and daily lifestyle. At Advance Speech and Hearing Clinic, every fitting starts with a full assessment and ends with real-world testing.",
          "Whether it's a first-time hearing aid or an upgrade, our audiologists walk patients through each step so the result feels natural and comfortable from day one.",
        ],
      },
      {
        heading: "Why Proper Fitting Matters",
        paragraphs: [
          "A poorly fitted hearing aid can cause discomfort, feedback noise, or even make hearing worse over time. That's why our process includes precise measurements, digital programming, and testing in real listening conditions.",
          "Matching the device settings to each patient's hearing profile helps restore natural, clear hearing — so patients can re-engage with conversations and environments they'd been struggling with.",
        ],
      },
      {
        heading: "How We Personalize Every Fitting",
        paragraphs: [
          "This ensures every hearing aid we fit is not just functional, but fully optimized for the patient wearing it.",
        ],
        bullets: [
          "Audiometric testing to map hearing loss",
          "Lifestyle assessment to match the right device",
          "Real-ear measurement (REM) for acoustic accuracy",
          "Custom programming based on speech needs",
          "Ongoing adjustments for gain and noise management",
        ],
      },
    ],
  },
  {
    slug: "cochlear-implants",
    title: "Cochlear Implants",
    oneLiner:
      "Evaluation, surgical coordination, and rehabilitation support for patients with severe to profound hearing loss.",
    bullets: [
      "Implant Suitability Assessment",
      "Surgical Coordination",
      "MAP Programming",
      "Rehabilitation Therapy",
    ],
    sections: [
      {
        heading: "What Are Cochlear Implants?",
        paragraphs: [
          "Cochlear implants are medical devices designed for people with severe to profound hearing loss who get limited benefit from hearing aids. Unlike hearing aids, which amplify sound, a cochlear implant bypasses the damaged part of the ear and stimulates the auditory nerve directly.",
          "For patients who haven't found success with hearing aids, a cochlear implant can offer a meaningful return to clearer hearing, improving communication and daily independence.",
        ],
      },
      {
        heading: "How Cochlear Implants Work",
        paragraphs: [
          "An external processor picks up sound and converts it into a digital signal. That signal is sent to an internal implant, which stimulates the auditory nerve directly — bypassing the damaged cochlea. The brain interprets these signals as sound.",
          "Cochlear implant technology continues to improve, offering better sound quality and clearer speech recognition, even in noisy environments.",
        ],
      },
      {
        heading: "Who Can Benefit From Cochlear Implants?",
        paragraphs: [
          "Children as young as 12 months and adults of any age can be evaluated for suitability.",
        ],
        bullets: [
          "Severe to profound hearing loss in both ears",
          "Limited improvement from hearing aids",
          "Speech recognition scores below 50% (with hearing aids)",
          "Medically fit for surgery",
          "Committed to post-implant rehabilitation",
        ],
      },
    ],
  },
  {
    slug: "tinnitus-management",
    title: "Tinnitus Management",
    oneLiner:
      "Structured programs to help patients manage chronic ringing in the ears and improve day-to-day comfort.",
    bullets: [
      "Sound Therapy Devices",
      "Tinnitus Retraining Therapy (TRT)",
      "Relaxation Coaching",
      "Noise Masking Systems",
    ],
    sections: [
      {
        heading: "What Is Tinnitus Management?",
        paragraphs: [
          "Tinnitus is the persistent perception of ringing, buzzing, or hissing in the ears when no external sound is present. Our tinnitus management programs combine sound therapy, counselling, and personalised routines to help patients live comfortably with the condition.",
          "There is no single cure for tinnitus, but the right combination of therapies can dramatically reduce how much it interferes with daily life.",
        ],
      },
      {
        heading: "Why Structured Care Matters",
        paragraphs: [
          "Untreated tinnitus can affect sleep, concentration, and mood. Patients often withdraw from social situations or struggle at work because the ringing masks conversation and takes up mental energy.",
          "A structured plan — built around the patient's specific triggers and hearing profile — gradually retrains the brain to filter tinnitus into the background so it no longer dominates attention.",
        ],
      },
      {
        heading: "Who Should Consider Tinnitus Support?",
        paragraphs: [
          "If tinnitus is disrupting your sleep, focus, or comfort, an assessment is the right first step.",
        ],
        bullets: [
          "Ringing or buzzing lasting more than a few weeks",
          "Tinnitus paired with hearing loss",
          "Difficulty sleeping or concentrating",
          "Rising anxiety or stress around the ringing",
          "Previous ear infections or noise exposure",
        ],
      },
    ],
  },
  {
    slug: "speech-language-therapy",
    title: "Speech & Language Therapy",
    oneLiner:
      "Therapy for children and adults working to improve speech clarity, language skills, and communication confidence.",
    bullets: [
      "Articulation Therapy",
      "Language Delay Intervention",
      "Fluency & Stuttering Correction",
      "Voice Therapy",
    ],
    sections: [
      {
        heading: "What Is Speech & Language Therapy?",
        paragraphs: [
          "Speech and language therapy helps people of all ages express themselves clearly and understand others with confidence. At Advance Speech and Hearing Clinic, our therapists work with children who are late to talk, adults recovering from neurological events, and everyone in between.",
          "Every plan starts with a detailed evaluation so therapy targets the exact skills the patient needs — pronunciation, sentence building, fluency, or voice quality.",
        ],
      },
      {
        heading: "Why Early Intervention Matters",
        paragraphs: [
          "Communication difficulties can affect school performance, friendships, and self-esteem — especially in children. The earlier therapy begins, the more the brain adapts and the faster progress usually follows.",
          "For adults, structured therapy after a stroke, injury, or long-standing habit change gives patients a reliable path back to clear, comfortable speech.",
        ],
      },
      {
        heading: "Who Benefits From Therapy?",
        paragraphs: [
          "Both children and adults can benefit from a personalised therapy plan.",
        ],
        bullets: [
          "Children with delayed speech or unclear pronunciation",
          "Kids struggling with reading, writing, or vocabulary",
          "Adults or children who stutter",
          "Patients recovering from a stroke or brain injury",
          "Voice issues from overuse or medical causes",
        ],
      },
    ],
  },
  {
    slug: "pediatric-audiology",
    title: "Pediatric Audiology",
    oneLiner:
      "Hearing care built for children — from newborn screening to fitting hearing aids for young ears.",
    bullets: [
      "Newborn Hearing Screening",
      "Behavioral Observation Audiometry (BOA)",
      "Play Audiometry",
      "Parent Guidance Sessions",
      "Hearing Aid Fitting for Kids",
    ],
    sections: [
      {
        heading: "What Is Pediatric Audiology?",
        paragraphs: [
          "Pediatric audiology focuses on hearing care for infants, toddlers, and school-age children. Our team uses child-friendly techniques and equipment to accurately test hearing at every developmental stage.",
          "From newborn screening within days of birth to hearing aid fittings for growing ears, we tailor every step to a child's age and comfort.",
        ],
      },
      {
        heading: "Why Early Detection Changes Outcomes",
        paragraphs: [
          "The first few years of life are critical for speech and language development. Even mild hearing loss during this window can slow down learning and social skills if it goes unnoticed.",
          "Identifying hearing issues early gives children the earliest possible start with hearing devices, therapy, and support — dramatically improving long-term outcomes at school and at home.",
        ],
      },
      {
        heading: "Who Should Bring Their Child In?",
        paragraphs: [
          "Any concern about a child's hearing or speech is worth a professional look.",
        ],
        bullets: [
          "Newborns who missed hospital screening",
          "Toddlers who aren't responding to their name",
          "Children with delayed or unclear speech",
          "Frequent ear infections or ear pain",
          "Difficulty following instructions at home or school",
        ],
      },
    ],
  },
  {
    slug: "home-visits-tele-audiology",
    title: "Home Visits & Tele-Audiology",
    oneLiner:
      "Remote consultations and at-home diagnostic support for patients who can't easily visit a clinic.",
    bullets: [
      "Virtual Hearing Aid Programming",
      "Video Consultations",
      "On-Site Testing",
      "Elderly & Disability Care",
    ],
    sections: [
      {
        heading: "What Are Home Visits & Tele-Audiology?",
        paragraphs: [
          "Home visits bring our audiologists directly to a patient's residence for hearing tests, hearing aid fittings, and follow-up care. Tele-audiology adds a virtual layer so patients can consult with our team by video call from anywhere in Gujarat.",
          "Together, these services make expert hearing care accessible to elderly patients, people with limited mobility, and families who prefer support from home.",
        ],
      },
      {
        heading: "Why This Service Matters",
        paragraphs: [
          "For many patients, travel is the single biggest barrier to consistent hearing care. Missed follow-ups often lead to poorly adjusted devices, wasted investments, and slower progress.",
          "Bringing the clinic to the patient keeps care on schedule, protects hearing aid performance, and gives caregivers peace of mind that a specialist is only a call away.",
        ],
      },
      {
        heading: "Who Should Consider Home or Virtual Care?",
        paragraphs: [
          "If travelling to the clinic is difficult, home or virtual care can keep treatment on track.",
        ],
        bullets: [
          "Elderly patients with limited mobility",
          "Patients recovering from surgery or illness",
          "People living far from any of our branches",
          "Families needing quick device adjustments",
          "Caregivers seeking guided training at home",
        ],
      },
    ],
  },
  {
    slug: "assistive-listening-devices",
    title: "Assistive Listening Devices (ALDs)",
    oneLiner:
      "Additional listening tools that improve hearing in classrooms, offices, and other everyday environments.",
    bullets: [
      "FM Systems",
      "Induction Loop Systems",
      "Infrared Listening Devices",
      "Personal Amplifiers",
      "TV Streamers for Hearing Aids",
    ],
    sections: [
      {
        heading: "What Are Assistive Listening Devices?",
        paragraphs: [
          "Assistive listening devices work alongside or in place of hearing aids to make specific listening situations easier — a noisy classroom, a large meeting room, or an evening in front of the TV.",
          "We help patients choose devices that plug the gaps their hearing aids alone can't cover, giving clearer sound exactly where it's needed.",
        ],
      },
      {
        heading: "Why ALDs Are Worth Considering",
        paragraphs: [
          "Even the best hearing aid can struggle when the speaker is far away or the room is echoey. ALDs solve this by placing the sound source right at the listener's ear.",
          "Students hear teachers clearly across the classroom, professionals follow meetings without straining, and family members enjoy TV at a comfortable volume for everyone.",
        ],
      },
      {
        heading: "Who Should Consider ALDs?",
        paragraphs: [
          "ALDs pair well with hearing aids and can also help people with mild hearing difficulties.",
        ],
        bullets: [
          "Students in classrooms or lecture halls",
          "Professionals in meetings and conferences",
          "Homes where the TV is often too loud for others",
          "Patients attending places of worship or theatres",
          "Anyone struggling to hear in group settings",
        ],
      },
    ],
  },
  {
    slug: "hearing-aid-repair-maintenance",
    title: "Hearing Aid Repair & Maintenance",
    oneLiner:
      "Servicing and maintenance for hearing aids across major brands, keeping devices working at their best.",
    bullets: [
      "Battery Replacement",
      "Wax Guard & Tube Change",
      "Device Cleaning",
      "Software Updates",
      "Loaner Devices During Repair",
    ],
    sections: [
      {
        heading: "What Is Repair & Maintenance Care?",
        paragraphs: [
          "Hearing aids are precision devices worn every day, and they need routine care to keep performing well. Our repair and maintenance service covers cleaning, part replacement, and software updates for all major brands.",
          "When a device needs deeper repair, we coordinate with the manufacturer and provide a loaner so patients are never without hearing support.",
        ],
      },
      {
        heading: "Why Regular Servicing Matters",
        paragraphs: [
          "Earwax, moisture, and daily wear slowly reduce a hearing aid's sound quality. Many patients assume their hearing has changed when the device is simply due for cleaning or a new wax guard.",
          "Regular servicing extends the life of the hearing aid, protects the investment, and keeps sound consistently clear between full check-ups.",
        ],
      },
      {
        heading: "Who Should Book a Service?",
        paragraphs: [
          "Servicing is recommended for every hearing aid user, whether the device was purchased with us or elsewhere.",
        ],
        bullets: [
          "Sound feels muffled or intermittent",
          "Whistling or feedback has increased",
          "Battery life has suddenly dropped",
          "It's been 6+ months since the last service",
          "The device is out of warranty and needs repair",
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
