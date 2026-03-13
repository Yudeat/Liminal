🏴‍☠️ Exile | Decision. Departure. Defined.
Exile is a transparent, system-driven platform that de-risks the study-abroad application process. It replaces the "black box" of traditional consultancy with a clear, auditable workflow that prioritizes correctness over persuasion.

Live Demo: https://exile-nu.vercel.app/

📖 The "Exile" Philosophy
Applying to universities abroad is a high-stakes transition. Students often rely on consultants out of fear: fear of missing documents, eligibility mismatches, or visa rejections due to clerical errors.

Exile exists to turn this fear into a verifiable process. It acts as a guided application infrastructure—an "autopilot for global education" where the student remains the pilot, and the system ensures the flight path is clear of errors.

Core Pillars
Transparency: Every decision and requirement is visible. No hidden commissions or biased recommendations.

Student Control: Automation assists—it never replaces user consent. The student always clicks "Submit."

Verification: Errors are caught at the upload stage, not the rejection stage.

🛠 Tech Stack
Framework: Next.js 14+ (App Router)

Styling: Tailwind CSS

Animations: Framer Motion (for smooth, state-based UI transitions)

Database & Auth: Supabase (PostgreSQL + GoTrue)

Deployment: Vercel

Validation: Zod (Strict schema-based eligibility and document checking)

🚀 Key Features (MVP)
1. Smart Profile & Eligibility Engine
A logic-driven module that maps student academic JSON profiles against specific university requirement schemas to ensure high-probability matches.

2. Document Vault & Compliance Checker
A secure dashboard for uploading sensitive documents (Passports, Transcripts, CVs).

Real-time Linting: Checks for formatting, seals, and validity.

Country Standards: Maps uploads against official immigration and university mandates.

3. SOP Review & Scoring
An analysis tool that evaluates Statements of Purpose for structure, clarity, and relevance—providing actionable suggestions while ensuring the student remains the author.

4. Guided Application Automation
A "human-in-the-loop" automation tool that handles:

Form pre-filling and field validation.

Step-by-step guidance through complex portal workflows.

💻 Getting Started
Prerequisites
Node.js 18.x or higher

A Supabase project (for Authentication and Storage)

Installation
Clone the repository

Bash
git clone https://github.com/your-username/exile.git
cd exile
Install dependencies

Bash
npm install
Code snippet
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_URL=https://exile-nu.vercel.app/
Run Development Server

Bash
npm run dev
🛡 Security & Trust
Encryption: All sensitive documents are encrypted at rest via Supabase Storage.

Data Sovereignty: Users can export or delete their entire profile and document history at any time.

Clerical Error Refund: If a system error leads to a failure, 90% of the platform fee is refunded. Trust is treated as infrastructure, not marketing.

🤝 Contributing
We are currently in Early MVP. We welcome contributors interested in:

Schema Design: Developing JSON schemas for global university requirements.

Document Parsing: Improving automated document verification.

UI/UX: Refining the "Exile" aesthetic—minimal, high-contrast, and calm.

Project Link: https://exile-nu.vercel.app/
