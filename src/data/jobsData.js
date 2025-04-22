const jobsData = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "Global Tech Solutions",
    companyLogo: "https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64",
    location: "Berlin, Germany",
    region: "Europe",
    jobType: "Full-time",
    experienceLevel: "Senior Level",
    salary: "$80,000 - $110,000",
    tags: ["React", "Node.js", "AWS"],
    featured: true,
    shortDescription: "Join our international team in Berlin to build scalable cloud-based applications for enterprise clients worldwide.",
    description: `
      <h3>About the Role</h3>
      <p>We are looking for a Senior Software Engineer to join our engineering team in Berlin. You will be working on complex, cloud-based applications that serve our enterprise clients across the globe.</p>
      
      <h3>Responsibilities</h3>
      <ul>
        <li>Design, develop and maintain high-performance, scalable applications</li>
        <li>Collaborate with international teams across different time zones</li>
        <li>Mentor junior developers and conduct code reviews</li>
        <li>Implement best practices for software development</li>
        <li>Work with product managers to define and implement new features</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>5+ years of professional software development experience</li>
        <li>Strong knowledge of React, Node.js, and AWS</li>
        <li>Experience with microservices architecture</li>
        <li>Excellent problem-solving skills</li>
        <li>Fluent in English, German is a plus</li>
        <li>Bachelor's degree in Computer Science or equivalent</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Competitive salary and equity options</li>
        <li>Relocation assistance to Germany</li>
        <li>30 days of paid vacation</li>
        <li>Flexible working hours</li>
        <li>International work environment</li>
        <li>Professional development budget</li>
      </ul>
    `,
    applicationProcess: "Apply with your resume and a cover letter. We'll review your application and get back to you within 2 weeks for a technical interview."
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "Creative Digital Agency",
    companyLogo: "https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64",
    location: "Tokyo, Japan",
    region: "Asia",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$60,000 - $80,000",
    tags: ["UI Design", "UX Research", "Figma"],
    featured: false,
    shortDescription: "Design beautiful, intuitive interfaces for our clients' products in our Tokyo office, collaborating with our international design team.",
    description: `
      <h3>About the Role</h3>
      <p>We are seeking a talented UX/UI Designer to join our creative team in Tokyo. In this role, you will create visually stunning and highly functional interfaces for our diverse client portfolio.</p>
      
      <h3>Responsibilities</h3>
      <ul>
        <li>Create wireframes, mockups, and prototypes for web and mobile applications</li>
        <li>Conduct user research and usability testing</li>
        <li>Collaborate with developers to ensure proper implementation of designs</li>
        <li>Maintain and evolve our clients' design systems</li>
        <li>Stay updated on the latest design trends and best practices</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>3+ years of professional UX/UI design experience</li>
        <li>Strong portfolio demonstrating your design skills</li>
        <li>Proficiency in Figma, Sketch, or similar design tools</li>
        <li>Experience with user research and usability testing</li>
        <li>Excellent communication skills in English, Japanese is a plus</li>
        <li>Bachelor's degree in Design or equivalent</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Competitive salary</li>
        <li>Relocation assistance to Japan</li>
        <li>20 days of paid vacation</li>
        <li>Creative work environment</li>
        <li>International client exposure</li>
        <li>Professional development opportunities</li>
      </ul>
    `,
    applicationProcess: "Please submit your portfolio along with your resume. Selected candidates will be invited for a design challenge followed by an interview."
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "FinTech Innovations",
    companyLogo: "https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64",
    location: "Singapore",
    region: "Asia",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$70,000 - $90,000",
    tags: ["Python", "Machine Learning", "SQL"],
    featured: true,
    shortDescription: "Apply your data science expertise in our Singapore office to develop predictive models that power our financial products.",
    description: `
      <h3>About the Role</h3>
      <p>We are looking for a Data Scientist to join our team in Singapore. You will work on developing and implementing advanced machine learning models for our financial products.</p>
      
      <h3>Responsibilities</h3>
      <ul>
        <li>Develop machine learning models to solve business problems</li>
        <li>Extract and analyze data from various sources</li>
        <li>Create visualizations to communicate findings to stakeholders</li>
        <li>Work with engineering team to deploy models to production</li>
        <li>Stay up-to-date with the latest developments in machine learning</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>3+ years of experience in data science or related field</li>
        <li>Strong programming skills in Python</li>
        <li>Experience with machine learning frameworks (TensorFlow, PyTorch)</li>
        <li>Proficiency in SQL and data manipulation</li>
        <li>Strong analytical and problem-solving skills</li>
        <li>Master's degree or PhD in a quantitative field</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Competitive salary and performance bonuses</li>
        <li>Relocation assistance to Singapore</li>
        <li>21 days of paid vacation</li>
        <li>Flexible working hours</li>
        <li>International work environment</li>
        <li>Education and conference allowance</li>
      </ul>
    `,
    applicationProcess: "Apply with your resume and a brief description of a data science project you're proud of. Shortlisted candidates will undergo a technical assessment and interview rounds."
  },
  {
    id: "4",
    title: "Marketing Manager",
    company: "International Brands Group",
    companyLogo: "https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64",
    location: "Barcelona, Spain",
    region: "Europe",
    jobType: "Full-time",
    experienceLevel: "Senior Level",
    salary: "$65,000 - $85,000",
    tags: ["Digital Marketing", "Brand Strategy", "Team Leadership"],
    featured: false,
    shortDescription: "Lead marketing initiatives for our portfolio of consumer brands from our Barcelona office, focusing on European and global markets.",
    description: `
      <h3>About the Role</h3>
      <p>We are seeking an experienced Marketing Manager to lead our marketing team in Barcelona. You will be responsible for developing and executing marketing strategies for our portfolio of consumer brands across European and global markets.</p>
      
      <h3>Responsibilities</h3>
      <ul>
        <li>Develop and implement marketing strategies across multiple brands</li>
        <li>Lead a team of marketing specialists across different disciplines</li>
        <li>Manage marketing budgets and track ROI</li>
        <li>Collaborate with international teams for global campaigns</li>
        <li>Analyze market trends and competitor activities</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>5+ years of experience in marketing, with at least 2 years in a leadership role</li>
        <li>Proven track record of successful marketing campaigns</li>
        <li>Experience with international markets, particularly in Europe</li>
        <li>Strong analytical and strategic thinking skills</li>
        <li>Excellent communication skills in English, Spanish is a plus</li>
        <li>Bachelor's degree in Marketing, Business, or related field</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Competitive salary and performance bonuses</li>
        <li>Relocation assistance to Spain</li>
        <li>25 days of paid vacation</li>
        <li>Flexible working hours</li>
        <li>International travel opportunities</li>
        <li>Professional development programs</li>
      </ul>
    `,
    applicationProcess: "Submit your resume and a cover letter detailing your marketing experience. Shortlisted candidates will be invited for multiple interview rounds with our marketing leadership team."
  },
  {
    id: "5",
    title: "Product Manager",
    company: "Tech Innovators Inc.",
    companyLogo: "https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64",
    location: "Toronto, Canada",
    region: "North America",
    jobType: "Full-time",
    experienceLevel: "Senior Level",
    salary: "$90,000 - $120,000",
    tags: ["Product Strategy", "Agile", "B2B"],
    featured: true,
    shortDescription: "Lead product development for our B2B SaaS platform in our Toronto office, working with a diverse international team.",
    description: `
      <h3>About the Role</h3>
      <p>We are looking for an experienced Product Manager to join our team in Toronto. You will be responsible for defining and executing the product strategy for our B2B SaaS platform.</p>
      
      <h3>Responsibilities</h3>
      <ul>
        <li>Define product vision, strategy, and roadmap</li>
        <li>Gather and prioritize product requirements</li>
        <li>Work closely with engineering, design, and marketing teams</li>
        <li>Analyze market trends and competitors</li>
        <li>Measure and optimize product performance metrics</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>5+ years of experience in product management, preferably for B2B products</li>
        <li>Strong understanding of SaaS business models</li>
        <li>Experience with Agile development methodologies</li>
        <li>Excellent analytical, communication, and leadership skills</li>
        <li>Technical background is a plus</li>
        <li>Bachelor's degree in Business, Computer Science, or related field</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Competitive salary and equity options</li>
        <li>Relocation assistance to Canada</li>
        <li>25 days of paid vacation</li>
        <li>Flexible working arrangements</li>
        <li>Comprehensive health insurance</li>
        <li>Professional development budget</li>
      </ul>
    `,
    applicationProcess: "Submit your resume and a brief description of a product you've managed. We'll review your application and invite qualified candidates for multiple interview rounds."
  },
  {
    id: "6",
    title: "Remote DevOps Engineer",
    company: "Cloud Systems Ltd",
    companyLogo: "https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64",
    location: "Remote",
    region: "All Regions",
    jobType: "Remote",
    experienceLevel: "Mid Level",
    salary: "$75,000 - $95,000",
    tags: ["AWS", "Kubernetes", "CI/CD"],
    featured: false,
    shortDescription: "Manage our cloud infrastructure and deployment pipelines from anywhere in the world, working with our distributed engineering team.",
    description: `
      <h3>About the Role</h3>
      <p>We are seeking a DevOps Engineer to join our fully remote team. You will be responsible for managing our cloud infrastructure and implementing robust deployment pipelines.</p>
      
      <h3>Responsibilities</h3>
      <ul>
        <li>Design, implement, and maintain our cloud infrastructure on AWS</li>
        <li>Set up and optimize CI/CD pipelines</li>
        <li>Implement monitoring and alerting solutions</li>
        <li>Automate infrastructure using Infrastructure as Code tools</li>
        <li>Collaborate with developers to improve deployment processes</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>3+ years of experience in DevOps or SRE roles</li>
        <li>Strong knowledge of AWS services</li>
        <li>Experience with container orchestration (Kubernetes)</li>
        <li>Proficiency with CI/CD tools (Jenkins, GitHub Actions)</li>
        <li>Knowledge of Infrastructure as Code (Terraform, CloudFormation)</li>
        <li>Excellent communication skills for remote collaboration</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Competitive salary</li>
        <li>Flexible working hours across time zones</li>
        <li>25 days of paid vacation</li>
        <li>Home office stipend</li>
        <li>Annual team retreat</li>
        <li>Professional development budget</li>
      </ul>
    `,
    applicationProcess: "Apply with your resume and a cover letter. Qualified candidates will participate in technical interviews and a practical assessment."
  },
  {
    id: "7",
    title: "ESL Teacher",
    company: "Global Education Institute",
    companyLogo: "https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64",
    location: "Seoul, South Korea",
    region: "Asia",
    jobType: "Full-time",
    experienceLevel: "Entry Level",
    salary: "$30,000 - $45,000",
    tags: ["Teaching", "English", "Education"],
    featured: false,
    shortDescription: "Teach English as a Second Language to students in Seoul, with opportunities for professional development and cultural exchange.",
    description: `
      <h3>About the Role</h3>
      <p>We are looking for enthusiastic ESL Teachers to join our team in Seoul, South Korea. You will be teaching English to students of various ages and proficiency levels.</p>
      
      <h3>Responsibilities</h3>
      <ul>
        <li>Plan and deliver engaging English language lessons</li>
        <li>Assess student progress and provide constructive feedback</li>
        <li>Create and adapt teaching materials</li>
        <li>Participate in school events and activities</li>
        <li>Foster a positive and inclusive learning environment</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Bachelor's degree in any field</li>
        <li>TEFL/TESOL certification (preferred)</li>
        <li>Native or near-native English proficiency</li>
        <li>Teaching experience is a plus but not required</li>
        <li>Patience, creativity, and strong communication skills</li>
        <li>Willingness to adapt to Korean culture</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Competitive salary</li>
        <li>Free furnished housing</li>
        <li>Airfare reimbursement</li>
        <li>Health insurance</li>
        <li>Paid vacation and holidays</li>
        <li>End-of-contract bonus</li>
      </ul>
    `,
    applicationProcess: "Submit your resume, a cover letter, and a recent photo. Shortlisted candidates will have a video interview and need to provide reference letters."
  },
  {
    id: "8",
    title: "International Sales Manager",
    company: "Global Manufacturing Corp",
    companyLogo: "https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64",
    location: "Dubai, UAE",
    region: "Middle East",
    jobType: "Full-time",
    experienceLevel: "Senior Level",
    salary: "$85,000 - $120,000",
    tags: ["Sales", "B2B", "Manufacturing"],
    featured: true,
    shortDescription: "Lead our international sales team from our Dubai office, developing relationships with clients across the Middle East, Africa, and Asia.",
    description: `
      <h3>About the Role</h3>
      <p>We are seeking an experienced International Sales Manager to lead our sales team in Dubai. You will be responsible for developing and executing sales strategies across the Middle East, Africa, and Asia regions.</p>
      
      <h3>Responsibilities</h3>
      <ul>
        <li>Develop and implement regional sales strategies</li>
        <li>Build and maintain relationships with key clients</li>
        <li>Lead and mentor a team of sales representatives</li>
        <li>Meet and exceed sales targets</li>
        <li>Analyze market trends and competitor activities</li>
        <li>Represent the company at industry events and trade shows</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>7+ years of sales experience in manufacturing or related industries</li>
        <li>Proven track record of exceeding sales targets</li>
        <li>Experience in the Middle East, Africa, or Asia markets</li>
        <li>Strong leadership and negotiation skills</li>
        <li>Excellent communication skills in English, Arabic is a plus</li>
        <li>Bachelor's degree in Business, Marketing, or related field</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Competitive salary and commission structure</li>
        <li>Relocation package to Dubai</li>
        <li>Tax-free income (UAE)</li>
        <li>30 days of paid vacation</li>
        <li>International travel opportunities</li>
        <li>Comprehensive health insurance</li>
      </ul>
    `,
    applicationProcess: "Submit your resume and a cover letter highlighting your sales achievements. Selected candidates will go through multiple interview rounds including presentations."
  }
];

export default jobsData;