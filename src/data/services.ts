export type Service = {
  slug: string;
  title: string;
  icon: string;
  oneLiner: string;
  bullets: string[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const services: Service[] = [
  {
    slug: "hearing-assessments",
    title: "Hearing Assessments",
    icon: "",
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
          "A hearing assessment is a set of diagnostic tests used to measure how well a person hears across different frequencies and volumes. At Advance Speech & Hearing Clinic, our assessments are carried out by trained audiologists using calibrated equipment, giving an accurate picture of a patient's hearing health in a single visit.",
          "Assessments are suitable for children as young as a few months old through to seniors, and results guide every next step — whether that's monitoring, a hearing aid recommendation, or referral for further treatment.",
        ],
      },
      {
        heading: "Why Hearing Assessments Matter",
        paragraphs: [
          "Early detection of hearing loss significantly improves treatment outcomes. Many hearing conditions are manageable when identified early, but can worsen significantly if left unchecked.",
          "Our comprehensive assessment battery ensures no aspect of hearing health is missed — from the outer ear to the central auditory pathways.",
        ],
      },
    ],
  },
  {
    slug: "hearing-aids",
    title: "Hearing Aid Fitting",
    icon: "",
    oneLiner:
      "Advanced digital hearing aids fitted and programmed for your specific hearing profile.",
    bullets: [
      "Digital Behind-the-Ear (BTE) Aids",
      "In-the-Ear (ITE) Custom Aids",
      "Receiver-in-Canal (RIC) Aids",
      "Invisible-in-Canal (IIC) Aids",
      "Paediatric Hearing Aid Fittings",
      "Rechargeable & Bluetooth Models",
    ],
    sections: [
      {
        heading: "Advanced Hearing Aid Solutions",
        paragraphs: [
          "We offer hearing aids from leading manufacturers, selected and programmed to match each patient's audiogram. Every fitting includes real-ear verification to confirm the device is performing as prescribed.",
          "Our follow-up programme includes fine-tuning appointments and counselling to help patients get the most from their hearing aid in everyday life.",
        ],
      },
    ],
  },
  {
    slug: "speech-therapy",
    title: "Speech Therapy",
    icon: "",
    oneLiner:
      "Evidence-based speech and language therapy for children and adults with communication difficulties.",
    bullets: [
      "Articulation & Phonology Disorders",
      "Language Development Delays",
      "Fluency / Stammering Therapy",
      "Voice Disorders",
      "Augmentative Communication (AAC)",
      "Post-Stroke Speech Rehabilitation",
    ],
    sections: [
      {
        heading: "Comprehensive Speech & Language Therapy",
        paragraphs: [
          "Our certified speech-language pathologists provide therapy for a wide range of communication disorders in children and adults, using evidence-based techniques.",
          "Each therapy plan is personalised after a thorough assessment and reviewed regularly to ensure steady progress.",
        ],
      },
    ],
  },
  {
    slug: "tinnitus-management",
    title: "Tinnitus Management",
    icon: "",
    oneLiner:
      "Specialist assessment and evidence-based management plans for tinnitus and hyperacusis.",
    bullets: [
      "Tinnitus Assessment & Profiling",
      "Sound Therapy",
      "Tinnitus Retraining Therapy (TRT)",
      "Cognitive Behavioural Techniques",
      "Relaxation & Sleep Guidance",
    ],
    sections: [
      {
        heading: "Managing Tinnitus Effectively",
        paragraphs: [
          "Tinnitus — the perception of sound with no external source — affects millions of people. Our clinic provides thorough assessment and personalised management plans to reduce its impact on daily life.",
          "We use internationally recognised therapies including TRT and sound enrichment strategies, tailored to each patient's experience of tinnitus.",
        ],
      },
    ],
  },
  {
    slug: "hearing-aid-repair-maintenance",
    title: "Hearing Aid Repair & Maintenance",
    icon: "",
    oneLiner:
      "Servicing and maintenance for hearing aids across major brands, keeping devices working at their best.",
    bullets: [
      "Battery Replacement",
      "Wax Guard & Tube Change",
      "Device Cleaning",
      "Software Updates & Reprogramming",
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
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
