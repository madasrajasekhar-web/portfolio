import scholarPortraitImg from '../assets/images/avatar_student_scholar_1791452239982.jpg';
import projectResearchImg from '../assets/images/project_research_system_1791452260920.jpg';
import projectComputationalImg from '../assets/images/project_computational_model_1791452274760.jpg';
import projectWebArchiveImg from '../assets/images/project_web_archive_1791452291572.jpg';

export type ProficiencyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface SkillItem {
  name: string;
  proficiency?: ProficiencyLevel;
  context?: string;
}

export interface SkillCategory {
  id: string;
  title: 'Academic & Instructional Skills' | 'Computer & Accounting Tools' | 'Management & Core Strengths';
  subtitle: string;
  skills: SkillItem[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  specialization: string;
  aggregationOrStatus: string;
  coursework: string[];
  highlights: string[];
}

export type ProjectCategory =
  | 'Doctoral Study'
  | 'Patents'
  | 'Digital Commerce'
  | 'UPI & FinTech'
  | 'Finance & AI';

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  problem: string;
  objective: string;
  methodology: string;
  technologies: string[];
  implementation: string;
  results: string;
  keyLearning: string;
  role: string;
  year: string;
  category: ProjectCategory;
  image?: string;
  links: {
    viewUrl?: string;
    githubUrl?: string;
    caseStudyUrl?: string;
  };
}

export type ResearchStatus = 'Ongoing' | 'Completed' | 'Published' | 'Submitted';

export interface ResearchWork {
  id: string;
  title: string;
  abstract: string;
  methodology: string;
  keywords: string[];
  status: ResearchStatus;
  publicationInfo?: {
    authors: string;
    venue: string;
    year: string;
    doi?: string;
    link?: string;
  };
}

export type AchievementCategory =
  | 'Eligibility & Qualifications'
  | 'Patents'
  | 'Conferences'
  | 'Workshops'
  | 'Seminars & Webinars'
  | 'Faculty Development (FDP)';

export interface AchievementEntry {
  id: string;
  category: AchievementCategory;
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface CertificationEntry {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  skillsAcquired: string[];
  credentialUrl: string;
}

export type ExperienceCategory =
  | 'Teaching Experience'
  | 'Research Experience'
  | 'Academic Coordination';

export interface ExperienceEntry {
  id: string;
  category: ExperienceCategory;
  organization: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  keyContributions: string[];
}

export interface PublicationEntry {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  indexingOrIssn: string;
  abstract: string;
  category: 'Online Buying Behavior' | 'UPI & FinTech' | 'Digital Marketing' | 'Finance & AI';
  url: string;
}

export interface PatentEntry {
  id: string;
  title: string;
  patentType: 'Official Journal Patent' | 'Official Journal Design Patent';
  domain: string;
  summary: string;
}

export interface StudentProfile {
  name: string;
  greetingLabel: string;
  headline: string;
  heroIntroduction: string;
  profileImage: string;
  profileImageAlt: string;
  university: string;
  currentInstitution: string;
  degree: string;
  location: string;
  permanentAddress: string;
  email: string;
  phone: string;
  linkedinUrl?: string;
  githubUrl?: string;
  orcidUrl?: string;
  resumeUrl: string;
  personalBioData: {
    fatherName: string;
    dateOfBirth: string;
    sex: string;
    maritalStatus: string;
    nationality: string;
  };
  snapshot: {
    educationTitle: string;
    educationSubtitle: string;
    researchTitle: string;
    researchSubtitle: string;
    projectsTitle: string;
    projectsSubtitle: string;
    locationTitle: string;
    locationSubtitle: string;
  };
  about: {
    paragraphs: string[];
    careerObjectiveVerbatim: string;
    currentRole: string;
    doctoralUniversity: string;
    academicQualification: string;
    teachingInstitution: string;
    location: string;
    areasOfInterest: string[];
    currentlyExploring: string[];
  };
  education: EducationEntry[];
  skillCategories: SkillCategory[];
  patents: PatentEntry[];
  projects: ProjectEntry[];
  research: {
    thesisTitle: string;
    thesisUniversity: string;
    thesisDepartment: string;
    thesisStatus: string;
    interests: string[];
    topics: string[];
    currentFocus: string;
    methodologyOverview: string;
    futureDirections: string;
    keywords: string[];
    works: ResearchWork[];
  };
  achievements: AchievementEntry[];
  certifications: CertificationEntry[];
  showExperience: boolean;
  experience: ExperienceEntry[];
  showPublications: boolean;
  publications: PublicationEntry[];
  futureDirection: {
    heading: string;
    summary: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
}

export const defaultStudentProfile: StudentProfile = {
  name: 'Madasu Rajasekhar',
  greetingLabel: 'CURRICULUM VITAE & ACADEMIC PORTFOLIO',
  headline: 'Assistant Professor of Commerce • Doctoral Researcher (Ph.D. Submitted) • APSET Qualified',
  heroIntroduction:
    'I am an Assistant Professor in the Department of Commerce at DNR College, Bhimavaram, with 3 years of teaching experience, and a Doctoral Researcher at Sri Venkateswara University, Andhra Pradesh. Having qualified APSET (2024) for Assistant Professor in Commerce, my research and teaching focus on online buying behavior, Unified Payment Interface (UPI) adoption, digital marketing, sustainable entrepreneurship, and financial analysis.',
  profileImage: scholarPortraitImg,
  profileImageAlt: 'Academic portrait placeholder for Madasu Rajasekhar, Assistant Professor of Commerce',
  university: 'Sri Venkateswara University & DNR College, Bhimavaram',
  currentInstitution: 'DNR College, Bhimavaram',
  degree: 'Ph.D. in Commerce (Submitted) · M.Com · APSET Qualified',
  location: 'West Godavari District, Andhra Pradesh, India',
  permanentAddress:
    'Chinakapavaram (P), Akiveedu (Mandal), West Godavari (Dist), Andhra Pradesh, India – 534235',
  email: 'rajasekhar132@gmail.com',
  phone: '+91 7993711383',
  resumeUrl: '#resume-preview',
  personalBioData: {
    fatherName: 'S/o Siva',
    dateOfBirth: '02/02/1999',
    sex: 'Male',
    maritalStatus: 'Unmarried',
    nationality: 'Indian',
  },
  snapshot: {
    educationTitle: 'Ph.D. in Commerce (Submitted)',
    educationSubtitle: 'Sri Venkateswara University, A.P. · M.Com (75%) · B.Com (76%)',
    researchTitle: 'APSET Qualified (2024)',
    researchSubtitle: 'Cert. No: 300337 · Ref: APSLET/3637/2024 · Roll No: 010408108',
    projectsTitle: '9 Publications & 3 Patents',
    projectsSubtitle: 'UGC CARE · ABDC Indexed · IEEE ICRISET · Official Journal Patents',
    locationTitle: '3 Years Teaching Experience',
    locationSubtitle: 'Assistant Professor, Dept. of Commerce, DNR College, Bhimavaram',
  },
  about: {
    paragraphs: [
      'I serve as an Assistant Professor in the Department of Commerce at DNR College, Bhimavaram, West Godavari District, Andhra Pradesh, where I have taught and mentored commerce students for the past three years. Alongside my teaching responsibilities, I have submitted my Doctor of Philosophy (Ph.D.) thesis in Commerce at Sri Venkateswara (SV) University, Andhra Pradesh, titled "A Study on Online Buying Behavior With Special Reference to West Godavari District of Andhra Pradesh."',
      'In April 2024, I qualified the Andhra Pradesh State Eligibility Test (APSET) for Eligibility as Assistant Professor in Commerce. My scholarly work investigates how digital ecosystems are reshaping commerce across regional and national contexts—spanning consumer attitudes toward online shopping websites, awareness and adoption of Unified Payment Interface (UPI), social media’s influence on consumer buying decisions, investor sentiment in stock markets, and the role of green marketing and social entrepreneurship in environmental sustainability.',
      'In the classroom and beyond, I am committed to clear instructional communication, practical accounting and computer literacy (including Tally ERP and MS Office), and organizing both classroom and outdoor educational events that help students connect commerce theory with real-world practice.',
    ],
    careerObjectiveVerbatim:
      'To work in a challenging environment that provides me an opportunity to utilize my skills and to accept new challenges and situations, making a positive contribution towards the given situation and helping in the growth of the organization.',
    currentRole: 'Assistant Professor, Department of Commerce (3 Years Experience)',
    doctoralUniversity: 'Department of Commerce, SV University, Andhra Pradesh (Ph.D. Submitted)',
    academicQualification: 'APSET Qualified in Commerce (26th April 2024) · M.Com · B.Com',
    teachingInstitution: 'DNR College, Bhimavaram, West Godavari District, Andhra Pradesh',
    location: 'Chinakapavaram, Akiveedu, West Godavari, Andhra Pradesh – 534235, India',
    areasOfInterest: [
      'Online Buying Behavior & E-Commerce',
      'Unified Payment Interface (UPI) Adoption',
      'Digital Marketing & Consumer Perception',
      'Social Entrepreneurship & Green Marketing',
      'Investor Sentiment & Stock Market Volatility',
      'AI & Virtual Reality in Marketing & Finance',
    ],
    currentlyExploring: [
      'Empirical evaluation of customer perceptions toward online shopping in West Godavari District',
      'Artificial Intelligence implementation on marketing models and financial strategies',
      'Psychological and empirical analysis of investor sentiment and stock market volatility in India',
      'Social entrepreneurship frameworks for promoting environmental sustainability through green marketing',
    ],
  },
  education: [
    {
      id: 'edu-phd',
      degree: 'Ph.D. — Doctor of Philosophy in Commerce (Submitted)',
      institution: 'Sri Venkateswara (SV) University',
      location: 'Andhra Pradesh, India',
      year: 'Submitted',
      specialization: 'Department of Commerce · Consumer Behavior & Digital Commerce',
      aggregationOrStatus: 'Doctoral Thesis Submitted',
      coursework: [
        'Online Buying Behavior',
        'Research & Publication Ethics',
        'Consumer Perception Analysis',
        'Empirical Commerce Studies',
      ],
      highlights: [
        'Thesis Title: "A Study on Online Buying Behavior With Special Reference to West Godavari District of Andhra Pradesh."',
        'Completed Training Course on Research and Publication Ethics organised by Sri Venkateswara University.',
      ],
    },
    {
      id: 'edu-apset',
      degree: 'APSET — Eligibility as Assistant Professor (Qualified in Commerce)',
      institution: 'Andhra Pradesh State Eligibility Test (APSET)',
      location: 'Andhra Pradesh, India',
      year: '26th April 2024',
      specialization: 'Commerce (State Eligibility for Assistant Professor)',
      aggregationOrStatus: 'Qualified · Cert. No: 300337',
      coursework: [
        'Commerce & Accounting',
        'Teaching & Research Aptitude',
        'Business Management & Marketing',
        'Financial & Economic Analysis',
      ],
      highlights: [
        'Certificate No: 300337 · APSET Ref. No: APSLET/3637/2024 · Roll No: 010408108.',
        'Qualified for appointment as Assistant Professor in Commerce across universities and degree colleges.',
      ],
    },
    {
      id: 'edu-mcom',
      degree: 'M.Com (Master of Commerce)',
      institution: 'DNR College, Bhimavaram',
      location: 'West Godavari District, Andhra Pradesh, India',
      year: 'Completed in 2021',
      specialization: 'Department of Commerce',
      aggregationOrStatus: '75% Aggregation',
      coursework: [
        'Advanced Commerce & Accounting',
        'Financial Management',
        'Marketing & Consumer Studies',
        'Business Economics',
      ],
      highlights: [
        'Graduated with First Class (75% aggregation) from the Department of Commerce, DNR College, Bhimavaram.',
      ],
    },
    {
      id: 'edu-bcom',
      degree: 'B.Com (Bachelor of Commerce)',
      institution: 'Annapurna Degree College, Ganapavaram',
      location: 'West Godavari District, Andhra Pradesh, India',
      year: 'Undergraduate Degree',
      specialization: 'Commerce',
      aggregationOrStatus: '76% Aggregation',
      coursework: [
        'Financial Accounting',
        'Business Organization & Management',
        'Banking & Financial Systems',
        'Commercial Law & Taxation',
      ],
      highlights: [
        'Completed Bachelor of Commerce with 76% aggregation at Annapurna Degree College, Ganapavaram.',
      ],
    },
    {
      id: 'edu-cec',
      degree: 'Intermediate — C.E.C (Civics, Economics, Commerce)',
      institution: 'Board of Intermediate Education, Andhra Pradesh',
      location: 'Andhra Pradesh, India',
      year: 'Higher Secondary',
      specialization: 'Civics, Economics & Commerce',
      aggregationOrStatus: '71.9% Aggregation',
      coursework: ['Civics', 'Economics', 'Commerce & Accountancy'],
      highlights: [
        'Completed Intermediate (C.E.C) under the Board of Intermediate Education, Andhra Pradesh with 71.9% aggregation.',
      ],
    },
  ],
  skillCategories: [
    {
      id: 'skills-academic',
      title: 'Academic & Instructional Skills',
      subtitle: 'Classroom instruction, educational event execution, and scholarly research methods',
      skills: [
        {
          name: 'Commerce Teaching & Instruction',
          context: '3 years of experience as Assistant Professor in the Department of Commerce at DNR College, Bhimavaram',
        },
        {
          name: 'Communication & Instructional Delivery',
          context: 'Clear academic explanation, lecture delivery, and student mentoring in commerce subjects',
        },
        {
          name: 'Classroom & Outdoor Educational Activities',
          context: 'Planning and executing both in-classroom academic sessions and outdoor educational activities and events',
        },
        {
          name: 'Presentation Skills',
          context: 'Academic paper presentation at multidisciplinary conferences, seminars, and faculty development workshops',
        },
        {
          name: 'Social Science Research & Publication Ethics',
          context: 'Trained in Research & Publication Ethics (SV University) and Social Science / Biostatistical Research Methodology',
        },
      ],
    },
    {
      id: 'skills-technical',
      title: 'Computer & Accounting Tools',
      subtitle: 'Practical accounting software, office productivity suites, and digital literacy',
      skills: [
        {
          name: 'Tally ERP',
          context: 'Enterprise accounting, financial ledger management, and commercial bookkeeping workflows',
        },
        {
          name: 'MS Office Suite',
          context: 'Document preparation, spreadsheet data tabulation, and academic slide presentations',
        },
        {
          name: 'Computer & Internet Applications',
          context: 'Strong working knowledge of computer systems, online academic databases, and digital research tools',
        },
      ],
    },
    {
      id: 'skills-professional',
      title: 'Management & Core Strengths',
      subtitle: 'Organizational leadership, adaptability, and academic problem-solving',
      skills: [
        {
          name: 'Management',
          context: 'Academic administration, departmental coordination, and educational event organization',
        },
        {
          name: 'Adaptability',
          context: 'Innovative and quick in adapting to new academic challenges, curricula, and institutional environments',
        },
        {
          name: 'Collaborative Academic Contribution',
          context: 'Committed to institutional growth and student success in higher education',
        },
      ],
    },
  ],
  patents: [
    {
      id: 'pat-1',
      title: 'Exploring Factors Influencing the Adoption of Online Shopping',
      patentType: 'Official Journal Patent',
      domain: 'Digital Commerce & Consumer Behavior',
      summary:
        'Published Official Journal Patent investigating the structural, behavioral, and trust factors that drive consumer adoption of online shopping platforms.',
    },
    {
      id: 'pat-2',
      title: 'The Role of Social Entrepreneurship in Promoting Environment Sustainability: A Green Marketing Perspective',
      patentType: 'Official Journal Patent',
      domain: 'Social Entrepreneurship & Green Marketing',
      summary:
        'Published Official Journal Patent examining how social entrepreneurship models and green marketing strategies foster environmental sustainability.',
    },
    {
      id: 'pat-3',
      title: 'Device To Record Customer Satisfaction and Financial Analysis',
      patentType: 'Official Journal Design Patent',
      domain: 'Customer Satisfaction & Financial Analysis Hardware/System Design',
      summary:
        'Published Official Journal Design Patent for a specialized device designed to record customer satisfaction metrics alongside integrated financial analysis.',
    },
  ],
  projects: [
    {
      id: 'proj-phd-thesis',
      title: 'Doctoral Research Study: Online Buying Behavior in West Godavari District of Andhra Pradesh',
      description:
        'Comprehensive Ph.D. doctoral thesis submitted to the Department of Commerce, Sri Venkateswara University, examining customer perceptions, attitudes, and behavioral determinants in online shopping.',
      problem:
        'While e-commerce adoption has expanded rapidly across semi-urban and rural districts in Andhra Pradesh, empirical evidence on regional consumer trust, platform attitudes, and buying determinants in West Godavari District remained limited.',
      objective:
        'Analyze the demographic, perceptual, and technological factors shaping online buying behavior among consumers in West Godavari District.',
      methodology:
        'Empirical survey-based commerce research combining primary respondent data from West Godavari District with secondary literature synthesis and statistical analysis.',
      technologies: [
        'Empirical Survey Design',
        'Consumer Behavior Modeling',
        'Statistical Tabulation',
        'MS Office',
        'Research & Publication Ethics',
      ],
      implementation:
        'Conducted structured field research across West Godavari District, evaluating customer perceptions toward shopping websites, digital payment integration, and post-purchase satisfaction.',
      results:
        'Submitted doctoral dissertation at SV University and published related peer-reviewed studies in UGC CARE Listed (2024), JETIR (May 2025), and IJFMR (December 2025) journals.',
      keyLearning:
        'Established how regional digital literacy, UPI payment convenience, and website trustworthiness jointly govern online purchase frequency.',
      role: 'Ph.D. Doctoral Researcher',
      year: '2024–2025',
      category: 'Doctoral Study',
      image: projectWebArchiveImg,
      links: {
        viewUrl: '#research',
        caseStudyUrl: '#projects',
      },
    },
    {
      id: 'proj-patent-device',
      title: 'Official Journal Design Patent: Device To Record Customer Satisfaction and Financial Analysis',
      description:
        'An Official Journal Design Patent for an integrated system/device linking real-time customer satisfaction recording with commercial financial analysis.',
      problem:
        'Retail and service enterprises often capture customer feedback separately from financial performance records, making it difficult to correlate service satisfaction with financial outcomes.',
      objective:
        'Design a dedicated device framework capable of recording customer satisfaction inputs and aligning them with financial analysis workflows.',
      methodology:
        'Applied commercial design principles combining consumer feedback instrumentation with structured financial evaluation metrics.',
      technologies: [
        'Official Journal Design Patent',
        'Customer Satisfaction Metrics',
        'Financial Analysis',
        'Commercial Instrumentation',
      ],
      implementation:
        'Formulated and documented the design specifications for official patent journal publication.',
      results:
        'Recognized as an Official Journal Design Patent contributing to practical commerce and retail instrumentation.',
      keyLearning:
        'Demonstrated how academic insights in consumer satisfaction and accounting can be translated into a tangible design patent.',
      role: 'Inventor / Author',
      year: 'Published Patent',
      category: 'Patents',
      image: projectResearchImg,
      links: {
        viewUrl: '#achievements',
        caseStudyUrl: '#projects',
      },
    },
    {
      id: 'proj-patent-green',
      title: 'Official Journal Patent: Social Entrepreneurship & Green Marketing for Environmental Sustainability',
      description:
        'Official Journal Patent and research framework titled "Exploring Factors Influencing the Adoption of Online Shopping" and "The Role of Social Entrepreneurship in Promoting Environment Sustainability: A Green Marketing Perspective."',
      problem:
        'Modern commercial growth requires sustainable business frameworks that balance consumer adoption of digital commerce with ecological responsibility.',
      objective:
        'Evaluate the factors driving online shopping adoption alongside the role of social entrepreneurship and green marketing in promoting environmental sustainability.',
      methodology:
        'Multidisciplinary commerce inquiry integrating green marketing principles, social enterprise models, and digital consumer adoption factors.',
      technologies: [
        'Official Journal Patent',
        'Green Marketing',
        'Social Entrepreneurship',
        'Online Shopping Adoption',
      ],
      implementation:
        'Developed structured patent documentation and conceptual models published in the Official Patent Journal.',
      results:
        'Published two Official Journal Patents addressing both online shopping adoption factors and green marketing sustainability.',
      keyLearning:
        'Highlighted the synergy between ethical social entrepreneurship and sustainable consumer markets.',
      role: 'Inventor / Researcher',
      year: 'Published Patent',
      category: 'Patents',
      image: projectComputationalImg,
      links: {
        viewUrl: '#achievements',
        caseStudyUrl: '#projects',
      },
    },
    {
      id: 'proj-upi-study',
      title: 'Regional Case Study: Awareness, Adoption and Advancement in Unified Payment Interface (UPI)',
      description:
        'Empirical research investigating the awareness, adoption patterns, and technological advancement of Unified Payment Interface (UPI) with a focused case study on West Godavari District, Andhra Pradesh.',
      problem:
        'Understanding how everyday consumers and merchants transition from cash to instant mobile payment systems (UPI) in regional districts is vital for financial inclusion.',
      objective:
        'Assess consumer awareness levels, adoption barriers, and transaction habits regarding UPI across West Godavari District.',
      methodology:
        'Case study methodology and empirical survey analysis published across IJCRT (ISSN 2320-2882) and JETIR (ISSN 2349-5169).',
      technologies: [
        'FinTech & Digital Payments',
        'UPI Case Study',
        'Empirical Survey Analysis',
        'Regional Financial Inclusion',
      ],
      implementation:
        'Evaluated user adoption determinants and documented the advancement of UPI ecosystems in Andhra Pradesh.',
      results:
        'Published two peer-reviewed journal papers in IJCRT (ISSN 2320-2882) and JETIR (ISSN 2349-5169).',
      keyLearning:
        'Provided empirical insights into how mobile payment simplicity accelerates digital commerce participation.',
      role: 'Author & Researcher',
      year: 'Published',
      category: 'UPI & FinTech',
      links: {
        viewUrl: '#publications',
        caseStudyUrl: '#projects',
      },
    },
    {
      id: 'proj-digital-marketing',
      title: 'Empirical Study: Consumer Perception on Digital Marketing & Social Media Decision Making',
      description:
        'Comparative research analyzing consumer perception on digital marketing in East Godavari District (ABDC Indexed) and the role of social media in consumer buying decisions.',
      problem:
        'Digital advertising and social media platforms rapidly alter how consumers evaluate brands, requiring updated empirical investigation across regional markets.',
      objective:
        'Examine consumer perception toward digital marketing channels in East Godavari District and assess how social media influences purchase decisions.',
      methodology:
        'Quantitative and analytical evaluation of consumer responses across digital marketing touchpoints and social media platforms.',
      technologies: [
        'Digital Marketing Analytics',
        'Consumer Perception',
        'Social Media Commerce',
        'ABDC Indexed Research',
      ],
      implementation:
        'Authored journal and conference studies presented at the International Conference on Global Issues in Multidisciplinary Academic Research and published in Korea Review of International Studies (Vol. 16).',
      results:
        'Published in Korea Review of International Studies (ISSN 1226-4741, ABDC Indexing) and International Conference proceedings (ISBN 978-81-976480-9-0).',
      keyLearning:
        'Clarified the measurable impact of social media engagement and digital marketing credibility on buyer decision-making.',
      role: 'Author & Conference Presenter',
      year: '2024–2025',
      category: 'Digital Commerce',
      links: {
        viewUrl: '#publications',
        caseStudyUrl: '#projects',
      },
    },
    {
      id: 'proj-finance-ai',
      title: 'Investor Sentiment, Stock Market Volatility & AI in Marketing and Finance Strategies',
      description:
        'Dual-focus research investigating (1) psychological and empirical dimensions of investor sentiment and stock market volatility in India, and (2) Artificial Intelligence implementation in marketing models and finance strategies.',
      problem:
        'Modern financial markets and marketing systems are increasingly shaped by behavioral investor psychology as well as algorithmic AI models.',
      objective:
        'Analyze how psychological investor sentiment interacts with stock market volatility in India, and evaluate AI implementation across marketing and financial strategies.',
      methodology:
        'Behavioral finance and multidisciplinary analytical review combining empirical analysis of investment strategies with AI model assessment.',
      technologies: [
        'Behavioral Finance',
        'Investor Sentiment Analysis',
        'Stock Market Volatility',
        'AI in Marketing & Finance (IEEE)',
      ],
      implementation:
        'Published empirical findings in JETIR (September 2025) and IEEE ICRISET (2025).',
      results:
        'Published in JETIR (Issue 9, September 2025) and ICRISET (970-8-3315-5833-8/25, 2025 IEEE).',
      keyLearning:
        'Connected behavioral finance insights with emerging artificial intelligence applications in commerce.',
      role: 'Author & Researcher',
      year: '2025',
      category: 'Finance & AI',
      links: {
        viewUrl: '#publications',
        caseStudyUrl: '#projects',
      },
    },
  ],
  research: {
    thesisTitle:
      'A Study on Online Buying Behavior With Special Reference to West Godavari District of Andhra Pradesh',
    thesisUniversity: 'Sri Venkateswara (SV) University, Andhra Pradesh, India',
    thesisDepartment: 'Department of Commerce',
    thesisStatus: 'Ph.D. Thesis Submitted',
    interests: [
      'Online Buying Behavior & E-Commerce Consumer Perception',
      'Unified Payment Interface (UPI) Awareness & Digital Financial Inclusion',
      'Digital Marketing & Social Media Consumer Decision Making',
      'Investor Sentiment, Behavioral Finance & Stock Market Volatility',
      'Social Entrepreneurship & Green Marketing Sustainability',
      'Artificial Intelligence & Virtual Reality in Marketing and Finance',
    ],
    topics: [
      'Regional E-Commerce Studies (West & East Godavari Districts, Andhra Pradesh)',
      'Customer Attitudes Toward Online Shopping Websites',
      'UPI Adoption & FinTech Advancement',
      'Psychological & Empirical Analysis of Investment Strategies in India',
      'AI Implementation in Marketing Models and Financial Strategies',
    ],
    currentFocus:
      'My doctoral and post-graduate research investigates consumer behavior in digital commerce—specifically examining customer perceptions toward online shopping and UPI adoption in West and East Godavari Districts of Andhra Pradesh, alongside emerging studies on investor sentiment and AI-driven marketing and finance strategies.',
    methodologyOverview:
      'Trained in Social Science Research Methodology (Shoolini University), Biostatistical Workshop methods (Anurag of Pharmacy), and Research & Publication Ethics (Sri Venkateswara University), my research combines primary regional survey studies with empirical analysis.',
    futureDirections:
      'Continuing post-doctoral and faculty research in digital commerce, financial literacy, sustainable green marketing, and AI applications in retail and financial markets while mentoring undergraduate and postgraduate commerce students.',
    keywords: [
      'Online Buying Behavior',
      'Unified Payment Interface (UPI)',
      'Digital Marketing',
      'West Godavari District',
      'East Godavari District',
      'Social Entrepreneurship',
      'Green Marketing',
      'Investor Sentiment',
      'AI in Finance & Marketing',
    ],
    works: [
      {
        id: 'res-phd',
        title:
          'Doctoral Thesis: A Study on Online Buying Behavior With Special Reference to West Godavari District of Andhra Pradesh',
        abstract:
          'Submitted Ph.D. dissertation in the Department of Commerce at Sri Venkateswara University, Andhra Pradesh. The study investigates customers’ perceptions, attitudes toward shopping websites, and socioeconomic factors influencing online buying behavior in West Godavari District.',
        methodology:
          'Empirical primary survey data collection and statistical analysis across consumers in West Godavari District, Andhra Pradesh.',
        keywords: [
          'Ph.D. Thesis',
          'Online Buying Behavior',
          'West Godavari District',
          'SV University',
          'Commerce',
        ],
        status: 'Submitted',
        publicationInfo: {
          authors: 'Madasu Rajasekhar',
          venue: 'Department of Commerce, Sri Venkateswara University, Andhra Pradesh, India',
          year: 'Submitted',
        },
      },
      {
        id: 'res-patents',
        title:
          'Patent Portfolio: Online Shopping Adoption, Green Marketing Sustainability & Customer Satisfaction / Financial Analysis Device',
        abstract:
          'Three published Official Journal Patents: (1) Exploring Factors Influencing the Adoption of Online Shopping, (2) The Role of Social Entrepreneurship in Promoting Environment Sustainability: A Green Marketing Perspective, and (3) Device To Record Customer Satisfaction and Financial Analysis (Design Patent).',
        methodology:
          'Applied commerce research, green marketing sustainability modeling, and customer satisfaction / financial analysis instrumentation design.',
        keywords: [
          'Official Journal Patent',
          'Design Patent',
          'Green Marketing',
          'Social Entrepreneurship',
          'Financial Analysis Device',
        ],
        status: 'Published',
        publicationInfo: {
          authors: 'Madasu Rajasekhar',
          venue: 'Official Journal Patent & Official Journal Design Patent',
          year: 'Published',
        },
      },
    ],
  },
  achievements: [
    {
      id: 'ach-apset',
      category: 'Eligibility & Qualifications',
      title: 'Qualified APSET for Eligibility as Assistant Professor in Commerce',
      organization: 'Andhra Pradesh State Eligibility Test (APSET)',
      year: '26th April 2024',
      description:
        'Qualified in Commerce for Assistant Professor eligibility. Certificate No: 300337 · APSET Ref. No: APSLET/3637/2024 · Roll No: 010408108.',
    },
    {
      id: 'ach-patent-1',
      category: 'Patents',
      title: 'Exploring Factors Influencing the Adoption of Online Shopping',
      organization: 'Official Journal Patent',
      year: 'Published Patent',
      description:
        'Official Journal Patent examining the key determinants and consumer readiness factors influencing the adoption of online shopping.',
    },
    {
      id: 'ach-patent-2',
      category: 'Patents',
      title: 'The Role of Social Entrepreneurship in Promoting Environment Sustainability: A Green Marketing Perspective',
      organization: 'Official Journal Patent',
      year: 'Published Patent',
      description:
        'Official Journal Patent focused on social entrepreneurship and green marketing frameworks for environmental sustainability.',
    },
    {
      id: 'ach-patent-3',
      category: 'Patents',
      title: 'Device To Record Customer Satisfaction and Financial Analysis',
      organization: 'Official Journal Design Patent',
      year: 'Published Patent',
      description:
        'Official Journal Design Patent for a specialized device to record customer satisfaction and conduct financial analysis.',
    },
    {
      id: 'ach-sem-1',
      category: 'Workshops',
      title: 'Training Course on Research and Publication Ethics',
      organization: 'Sri Venkateswara University',
      year: 'Completed',
      description:
        'Completed formal academic training course on Research and Publication Ethics organised by Sri Venkateswara University.',
    },
    {
      id: 'ach-sem-2',
      category: 'Conferences',
      title: 'Social Media Game Change in Consumers’ Buying Decision Making',
      organization:
        'International Conference on Global Issues in Multidisciplinary Academic Research · Star International Foundation for Research and Education',
      year: 'Conference',
      description:
        'Participated and presented research at the International Conference on Global Issues in Multidisciplinary Academic Research organised by Star International Foundation for Research and Education.',
    },
    {
      id: 'ach-sem-3',
      category: 'Workshops',
      title: 'Research Methodology and Bio Statistical Workshop',
      organization: 'Anurag of Pharmacy',
      year: 'Workshop',
      description:
        'Participated in the Research Methodology and Bio Statistical Workshop organised by Anurag of Pharmacy.',
    },
    {
      id: 'ach-sem-4',
      category: 'Workshops',
      title: 'Research Methodology for Social Science Workshop',
      organization: 'Shoolini University',
      year: 'Workshop',
      description:
        'Completed the Workshop on Research Methodology for Social Science organised by Shoolini University.',
    },
    {
      id: 'ach-sem-5',
      category: 'Seminars & Webinars',
      title: 'Virtual Reality in Retail, Industry, Banking and Marketing',
      organization: 'SRM Institute of Science and Technology',
      year: 'Seminar / Webinar',
      description:
        'Participated in the academic session on Virtual Reality in Retail, Industry, Banking and Marketing organised by SRM Institute of Science and Technology.',
    },
    {
      id: 'ach-sem-6',
      category: 'Seminars & Webinars',
      title: 'Sustainable Economic Growth Through Innovation, Infrastructure and Artificial Intelligence',
      organization: 'Government City College, Hyderabad',
      year: 'Seminar / Webinar',
      description:
        'Participated in the seminar on Sustainable Economic Growth Through Innovation, Infrastructure and Artificial Intelligence organised by Government City College, Hyderabad.',
    },
    {
      id: 'ach-sem-7',
      category: 'Faculty Development (FDP)',
      title: 'Five-Day Online Faculty Development Programme (FDP)',
      organization: 'Academic Faculty Development Programme',
      year: 'FDP',
      description:
        'Successfully completed a Five-Day Online Faculty Development Programme (FDP) for continuous pedagogical and research enrichment.',
    },
  ],
  certifications: [
    {
      id: 'cert-apset',
      name: 'APSET — State Eligibility Test for Assistant Professor (Commerce)',
      issuer: 'Andhra Pradesh State Eligibility Test (APSET)',
      issueDate: '26th April 2024',
      credentialId: 'Cert No: 300337 | Ref: APSLET/3637/2024 | Roll: 010408108',
      skillsAcquired: [
        'Assistant Professor Eligibility',
        'Commerce',
        'Academic & Research Aptitude',
      ],
      credentialUrl: '#certifications',
    },
    {
      id: 'cert-svu-ethics',
      name: 'Training Course on Research and Publication Ethics',
      issuer: 'Sri Venkateswara University',
      issueDate: 'Doctoral Training',
      credentialId: 'SV University — Research & Publication Ethics',
      skillsAcquired: [
        'Research Integrity',
        'Publication Ethics',
        'Academic Citation Standards',
      ],
      credentialUrl: '#certifications',
    },
    {
      id: 'cert-workshops',
      name: 'Research Methodology & Faculty Development Certifications (FDP & Workshops)',
      issuer: 'Shoolini University · Anurag of Pharmacy · SRM IST · Govt. City College Hyderabad',
      issueDate: 'Academic Seminars & FDPs',
      credentialId: 'Social Science Research, Biostatistics, VR & AI Seminars, 5-Day Online FDP',
      skillsAcquired: [
        'Social Science Research Methodology',
        'Biostatistics',
        'AI & VR in Marketing/Banking',
        'Faculty Development (5-Day Online FDP)',
      ],
      credentialUrl: '#certifications',
    },
  ],
  showExperience: true,
  experience: [
    {
      id: 'exp-dnr',
      category: 'Teaching Experience',
      organization: 'DNR College, Bhimavaram',
      role: 'Assistant Professor, Department of Commerce',
      duration: '3 Years Experience',
      location: 'Bhimavaram, West Godavari District, Andhra Pradesh, India',
      responsibilities: [
        'Delivering undergraduate and postgraduate lectures in the Department of Commerce at DNR College, Bhimavaram.',
        'Applying strong communication, instructional, and presentation skills to facilitate student learning in commerce, accounting, and business subjects.',
        'Planning and executing both in-classroom academic activities and outdoor educational events and student initiatives.',
      ],
      keyContributions: [
        '3 years of dedicated faculty service in the Department of Commerce at DNR College, Bhimavaram.',
        'Integrating practical computer and accounting knowledge (MS Office, Tally ERP) with commerce curriculum instruction.',
        'Pursuing active scholarly publication (9 research papers and 3 patents) alongside full-time teaching duties.',
      ],
    },
  ],
  showPublications: true,
  publications: [
    {
      id: 'pub-1',
      title: 'A Study on Online Buying Behavior: Customers’ Perceptions on Online Shopping',
      authors: 'Madasu Rajasekhar',
      venue: 'International Journal of Cultural Studies and Social Sciences (UGC CARE Listed Journal)',
      year: 'July–December 2024',
      indexingOrIssn: 'ISSN: 2347-4777 · Vol. 20, Issue No. 15 · UGC CARE Listed Journal',
      category: 'Online Buying Behavior',
      abstract:
        'Published in a UGC CARE Listed Journal (Vol. 20, Issue No. 15, July–December 2024), this study examines customers’ perceptions, trust factors, and behavioral patterns toward online shopping.',
      url: '#publications',
    },
    {
      id: 'pub-2',
      title:
        'Consumer Perception on Digital Marketing (With Special Reference To East Godavari District of Andhra Pradesh)',
      authors: 'Madasu Rajasekhar',
      venue: 'Korea Review of International Studies (ABDC Indexing)',
      year: 'Vol. 16',
      indexingOrIssn: 'ISSN: 1226-4741 · Vol. 16 · ABDC Indexing',
      category: 'Digital Marketing',
      abstract:
        'An ABDC-indexed empirical research article analyzing how consumers in East Godavari District of Andhra Pradesh perceive and respond to digital marketing channels.',
      url: '#publications',
    },
    {
      id: 'pub-3',
      title: 'Artificial Intelligence Implementation on Marketing Models And Finance Strategies',
      authors: 'Madasu Rajasekhar',
      venue: 'ICRISET — 2025 IEEE',
      year: '2025',
      indexingOrIssn: 'IEEE / ICRISET: 970-8-3315-5833-8/25 · 2025 IEEE',
      category: 'Finance & AI',
      abstract:
        'Published in 2025 IEEE (ICRISET), this paper investigates the implementation of Artificial Intelligence across contemporary marketing models and financial decision-making strategies.',
      url: '#publications',
    },
    {
      id: 'pub-4',
      title:
        'A Study on Online Buying Behavior (With Special Reference To Customers Perception In West Godavari District Of Andhra Pradesh)',
      authors: 'Madasu Rajasekhar',
      venue: 'International Journal for Multidisciplinary Research (IJFMR)',
      year: 'December 2025',
      indexingOrIssn: 'ISSN: 2582-2160 · Issue December 2025',
      category: 'Online Buying Behavior',
      abstract:
        'Empirical investigation focused specifically on customers’ perception of online buying behavior in West Godavari District of Andhra Pradesh, published in IJFMR (December 2025).',
      url: '#publications',
    },
    {
      id: 'pub-5',
      title:
        'Investor Sentiment And Stock Market Volatility In India: A Psychological And Empirical Analysis Of Investment Strategies',
      authors: 'Madasu Rajasekhar',
      venue: 'Journal of Emerging Technologies and Innovative Research (JETIR)',
      year: 'September 2025',
      indexingOrIssn: 'JETIR · ISSN / ID: 63975 · Issue 9, September 2025',
      category: 'Finance & AI',
      abstract:
        'A psychological and empirical analysis examining how investor sentiment influences stock market volatility and shapes investment strategies in India.',
      url: '#publications',
    },
    {
      id: 'pub-6',
      title: 'Customer Attitudes Toward Shopping Websites: A Study on Online Buying Behaviour',
      authors: 'Madasu Rajasekhar',
      venue: 'Journal of Emerging Technologies and Innovative Research (JETIR)',
      year: 'May 2025',
      indexingOrIssn: 'ISSN: 2349-5162 · Vol. 12, Issue 5, May 2025',
      category: 'Online Buying Behavior',
      abstract:
        'Examines customer attitudes toward e-commerce shopping websites and their impact on online buying behavior, published in JETIR (Vol. 12, Issue 5, May 2025).',
      url: '#publications',
    },
    {
      id: 'pub-7',
      title: 'Social Media Game Change in Consumer Buying Decision Making',
      authors: 'Madasu Rajasekhar',
      venue: 'International Conference on Global Issues In Multidisciplinary Academic Research',
      year: 'Conference Proceedings',
      indexingOrIssn: 'ISBN: 978-81-976480-9-0',
      category: 'Digital Marketing',
      abstract:
        'Investigates how social media platforms act as a game-changer in shaping consumer buying decision-making processes, published in the International Conference proceedings (ISBN 978-81-976480-9-0).',
      url: '#publications',
    },
    {
      id: 'pub-8',
      title:
        'Awareness and Adoption UPI (A Case Study West Godavari District of Andhra Pradesh)',
      authors: 'Madasu Rajasekhar',
      venue: 'Journal of Emerging Technologies and Innovative Research (JETIR)',
      year: 'Published',
      indexingOrIssn: 'ISSN: 2349-5169 · JETIR',
      category: 'UPI & FinTech',
      abstract:
        'A regional case study of West Godavari District, Andhra Pradesh, analyzing consumer awareness and adoption of the Unified Payment Interface (UPI).',
      url: '#publications',
    },
    {
      id: 'pub-9',
      title: 'Awareness, Adoption and Advancement in Unified Payment Interface (UPI)',
      authors: 'Madasu Rajasekhar',
      venue: 'International Journal of Creativity Research Thoughts (IJCRT)',
      year: 'Published',
      indexingOrIssn: 'ISSN: 2320-2882 · IJCRT',
      category: 'UPI & FinTech',
      abstract:
        'Examines the broader trajectory of awareness, user adoption, and technological advancement in India’s Unified Payment Interface (UPI) ecosystem.',
      url: '#publications',
    },
  ],
  futureDirection: {
    heading: 'Academic Vision & Future Direction',
    summary:
      'Guided by my commitment to working in challenging academic environments where I can utilize my instructional and research skills, accept new responsibilities, and contribute positively to institutional growth, my work moves forward along three core pillars:',
    pillars: [
      {
        title: '01 · Advancing Empirical Commerce & Consumer Research',
        description:
          'Building upon my Ph.D. thesis at SV University and 9 published papers to deepen empirical research in digital commerce, UPI financial inclusion, green marketing, and AI-enabled financial strategies.',
      },
      {
        title: '02 · Excellence in Commerce Pedagogy & Student Mentorship',
        description:
          'Leveraging my APSET qualification and 3 years of Assistant Professor experience at DNR College to deliver engaging classroom instruction, practical Tally ERP / computer training, and outdoor educational programs.',
      },
      {
        title: '03 · Institutional Contribution & Multidisciplinary Collaboration',
        description:
          'Participating actively in Faculty Development Programmes (FDPs), national/international seminars, and patent innovation to contribute meaningfully to the growth of the department and institution.',
      },
    ],
  },
};
