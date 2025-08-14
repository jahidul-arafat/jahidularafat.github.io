// ==========================================================================
// COMPLETE Portfolio Data - Every Detail from LaTeX Resume
// ==========================================================================

const portfolioData = {
    // Personal Information
    personal: {
        name: "Jahidul ARAFAT",
        title: "PhD Candidate, Presidential & Woltosz Graduate Research Fellow",
        subtitle: "DevSecOps, Cloud & CyberSec Architect | AI Team Lead, OrangeBD | Former L3 Sr Solution & Cloud Architect, Oracle | Former L4 Principal System Analyst bKash (Unicorn, Alipay)",
        programCommittee: "Program Committee Member, EASE 2025 (International Conference on Evaluation and Assessment in Software Engineering)",
        address: "Auburn University, USA",
        phone: "+1 334.744.3544",
        email: "jahidapon@gmail.com"
    },

    // Professional Summary - Complete from LaTeX
    professionalSummary: `Distinguished Software Engineer (DevSecOps) and NSF-funded PhD researcher with 10+ years developing secure, scalable distributed systems. Presidential and Woltosz Graduate Research Fellow leading CNCF-compliant Kubernetes operator security research. Expert in TypeScript, Rust, Java, AWS, OCI, AI/ML with proven technical leadership at Oracle, bKash (Alipay), HWW handling 10M+ concurrent users. Specializes in GenAI/RAG architectures, federated ML, and LLM deployment on HuggingFace infrastructure. World's 2nd highest AWS Solutions Architect scorer (97%) with 35+ certifications including AWS, Oracle Cloud (93.3%), ISC2, EC-Council CEH, CompTIA+, RedHat RHCSA, and PCI-DSS. Maintains 20+ top-ranked GitHub repositories (500+ stars) contributing to CNCF ecosystem with production-ready tools on PyPI/TestPyPI. Created enterprise solutions: operatorhub-scraper, ottpredictor, log4j vulnerability simulators, and GenAI frameworks. Conducted 100+ technical workshops globally. Discovered critical bugs leading to Oracle career opportunities: Cloud Console vulnerability (2021) and MySQL PaaS design flaws (2022). Designed enterprise architectures: X-Road compliant e-government platforms, PCI-DSS payment systems (600K/min transactions), fault-tolerant OTT platforms (10M+ users), and CloudNative modernization for Fortune 500s. Top 4% global cybersecurity ranking (TryHackMe), HackerRank Python score 2296.4/2300.`,

    // Technical Skills - Complete from LaTeX
    skills: {
        "Programming Languages": [
            "TypeScript", "Rust", "Java", "Python", "Go", "Haskell",
            "JavaScript", "Structured Query Language (SQL)", "Kusto Query Language (KQL)",
            "Bash", "F*", "Coq", "OCaml"
        ],
        "AI/ML & Research": [
            "PyTorch", "TensorFlow", "Generative Adversarial Networks (GANs)",
            "Retrieval Augmented Generation (RAG)", "Large Language Model (LLM) Training",
            "Computer Vision", "Time Series Analysis", "Federated Machine Learning (ML)",
            "HuggingFace Transformers", "Transformers Library", "LangChain", "LlamaIndex",
            "Model Context Protocol (MCP) Servers", "LM Studio", "Google Vertex AI", "Ollama",
            "Anthropic Claude API", "OpenAI API", "Scikit-learn", "XGBoost", "LightGBM",
            "MLflow", "Weights & Biases (W&B)", "SMT Solvers"
        ],
        "Databases & Storage": [
            "Oracle Database", "Oracle Autonomous Database", "DynamoDB", "PostgreSQL",
            "MySQL", "Cassandra", "CockroachDB", "Redis Cluster",
            "Vector Databases (Weaviate, LanceDB, Pinecone, Chroma)", "MongoDB",
            "Neo4j Graph Database", "Elasticsearch", "InfluxDB", "ScyllaDB",
            "Amazon RDS Aurora", "Oracle Exadata", "Azure Data Explorer (Kusto)",
            "Azure Log Analytics"
        ],
        "Cloud/DevOps": [
            "Amazon Web Services (AWS)", "Oracle Cloud Infrastructure (OCI)",
            "Azure DevSecOps", "Kubernetes", "Docker", "Terraform", "Ansible",
            "Apache Kafka", "Jenkins", "GitLab CI/CD", "GitHub Actions", "Travis CI",
            "Circle CI", "EKS", "AWS Batch HPC", "EMR Spark", "Fargate Serverless",
            "ArgoCD GitOps", "K8sGPT"
        ],
        "Security & Analysis": [
            "Payment Card Industry Data Security Standard (PCI-DSS)",
            "Static Application Security Testing/Dynamic Application Security Testing (SAST/DAST)",
            "SonarQube Quality Gates", "SAST/DAST Template Design",
            "Dependency Vulnerability Scanning", "Vulnerability Assessment",
            "Supply Chain Security", "Software Bill of Materials (SBOM)",
            "Kyverno Policy-as-Code", "OPA Rego", "Bandit Security Analysis",
            "Forensic Analysis", "Zero-Trust Architecture"
        ],
        "Formal Methods": [
            "F* Functional Programming", "Coq Proof Assistant",
            "Satisfiability Modulo Theories (SMT) Solvers",
            "Java Abstract Syntax Tree (AST) Parsing", "Dependency Graph Analysis",
            "Theorem Proving", "NP-Complete Algorithm Design", "Formal Verification Models"
        ],
        "Full Stack & Architecture": [
            "Next.js", "React.js", "Express.js", "Node.js", "Vercel", "Jest",
            "Puppeteer", "Middleware Design", "Async/Non-blocking I/O", "Database Design",
            "API Architecture", "Microservices", "Event-driven Systems", "GraphQL",
            "REST APIs", "ORDS RESTful APIs"
        ],
        "Development Frameworks & Tools": [
            "NPM/Yarn", "Next.js", "Java Helidon", "Java Spring Boot", "Java Micronaut",
            "Maven", "Gradle", "AWS DevSecOps SDKs", "Oracle Data Science SDKs",
            "Oracle DevSecOps SDKs", "Quarkus", "Vert.x", "Fastify", "Vite", "Webpack",
            "ESBuild", "TypeScript Compiler API", "JUnit 5", "Testcontainers"
        ],
        "Python Development & Deployment": [
            "FastAPI", "Django", "Flask", "Gunicorn", "Uvicorn", "Celery", "Pydantic",
            "Poetry", "Pipenv", "PyTest", "Black", "Flake8", "mypy", "Streamlit",
            "Gradio", "Jupyter Notebooks", "IPython", "Anaconda", "Conda", "Matplotlib",
            "Seaborn", "Plotly", "Bokeh", "Pandas", "NumPy", "SciPy"
        ],
        "Data & Visualization": [
            "Algorithm Visualization", "Technical Debt Detection", "Code Quality Metrics",
            "Team Dynamics Analysis", "Interactive Learning Platforms", "Real-time Metrics",
            "Performance Analysis", "Apache Spark", "Data Pipeline Orchestration"
        ],
        "Infrastructure & Simulation": [
            "Multi-Cloud Hybrid Architectures", "Edge Federated Learning",
            "Container Orchestration", "Kubernetes Operators", "Minecraft Server Architecture",
            "Gaming Platform Design", "OTT Platform Scaling", "Live Streaming Infrastructure",
            "Content Delivery Networks (CDN)", "Load Balancing"
        ],
        "Serverless & Operator Frameworks": [
            "AWS Lambda", "Azure Functions", "Oracle Functions", "Serverless Framework",
            "AWS SAM", "Terraform CDK", "Kubernetes Operator SDK", "Kubebuilder", "KUDO",
            "Helm Charts", "Kustomize", "Operator Lifecycle Manager (OLM)",
            "Custom Resource Definitions (CRDs)", "Controller Runtime"
        ]
    },

    // Education - Complete from LaTeX
    education: [
        {
            degree: "PhD Computer Science & Software Engineering",
            institution: "Auburn University",
            location: "USA",
            duration: "2024-Present",
            gpa: "CGPA: 3.89/4.00 (Continue)",
            specialization: "NSF Presidential Graduate Research Fellow - Kubernetes Operator Security"
        },
        {
            degree: "Masters Information System Security",
            institution: "Bangladesh University of Professionals",
            location: "BD",
            duration: "2022-2024",
            gpa: "CGPA: 3.83/4.00",
            specialization: "ML/LLM for Anomaly Detection"
        },
        {
            degree: "Masters of Science (TE) in CSIT",
            institution: "Islamic University of Technology",
            location: "BD",
            duration: "2008-2011",
            gpa: "CGPA: 3.94/4.00",
            specialization: "Major: CyberSecurity"
        },
        {
            degree: "Bachelor Computer Science & Engineering",
            institution: "Dhaka University",
            location: "BD",
            duration: "2004-2008",
            gpa: "CGPA: 3.88/4.00 (last 80 credits)",
            specialization: ""
        }
    ],

    // Professional Experience - Complete from LaTeX
    experience: [
        {
            title: "Chief Technology Advisor & AI Team Lead",
            company: "Orange Business Development Ltd.",
            type: "Contract/Hybrid",
            duration: "Jul 2025-Jan 2026",
            highlights: [
                "Leading architectural transformation of national digital platforms using cloud-native, AI-first, and secure-by-design strategies for clients across North America and Australia",
                "Spearheading Retrieval Augmented Generation (RAG) enhanced Generative AI (GenAI) solutions across government platforms, enabling intelligent search, contextual guidance, and autonomous service interaction",
                "Re-architecting legacy systems into Kubernetes-native microservice ecosystems with Infrastructure as Code (IaC), GitOps, and DevSecOps pipelines across Azure and multi-cloud environments",
                "Implementing Software Bill of Materials (SBOM), Artifacts-Metadata-Attestation-Policies (A-MAP), and zero-trust principles for software supply chain security",
                "Deploying federated Machine Learning (ML) models and Large Language Model (LLM) solutions on HuggingFace infrastructure for scalable AI service delivery",
                "Designing Model Context Protocol (MCP) agentic servers for seamless Large Language Model (LLM) integration with enterprise systems and government databases",
                "Mentoring teams on secure cloud engineering, Generative AI (GenAI) code tooling, Retrieval Augmented Generation (RAG) pipelines, AI observability frameworks, and Azure DevSecOps best practices",
                "Architecting high-performance game server infrastructures and simulation environments for training AI agents with Model Context Protocol (MCP) based intelligent automation"
            ]
        },
        {
            title: "Presidential & Woltosz Graduate Research Fellow",
            company: "Auburn University",
            location: "USA",
            duration: "Aug 2024-Present",
            highlights: [
                "Leading National Science Foundation (NSF) funded Cloud Native Computing Foundation (CNCF) compliant security frameworks for Kubernetes operators",
                "Teaching graduate Software Quality Assurance, mentoring students in Large Language Model (LLM) applications and federated learning architectures",
                "Developing formal verification models using F* and Coq for Kubernetes operator dependency resolution algorithms",
                "Conducting research on software supply chain security, vulnerability detection, and distributed Machine Learning (ML) model deployment strategies",
                "Implementing federated learning pipelines for privacy-preserving AI model training across distributed edge environments",
                "Designing Model Context Protocol (MCP) agentic frameworks for secure Large Language Model (LLM) interactions in distributed research environments"
            ]
        },
        {
            title: "Senior Technology Solution & Cloud Architect (L3/IC3)",
            company: "Oracle SAGE ASEAN",
            location: "Singapore",
            duration: "Mar 2022-Jul 2024",
            highlights: [
                "Architected fault-tolerant Live Streaming OTT Platform using Kubernetes with Ampere instances, supporting 10M+ concurrent users with 99.9% uptime for South Asian Cricket Board",
                "Designed enterprise-scale microservices migration strategy for world's largest NGO (50+ countries) from AWS to OCI, implementing blue-green deployment with zero downtime",
                "Built CloudNative modernization framework for National Portal (30,000 websites) integrating JSON Duality Views, ORDS RESTful APIs, and Oracle Autonomous Database with X-Road-inspired interoperability",
                "Implemented e-Government architecture following Estonia's X-Road model: secure data exchange layer, federated identity management, and API gateway for seamless citizen services integration",
                "Developed Oracle Serverless Functions with Go and Python for real-time event processing, integrating with Apache Kafka for distributed streaming architectures",
                "Created comprehensive Infrastructure as Code (IaC) solutions using OCI Terraform SDK, automating deployment pipelines with 95% reduction in manual intervention",
                "Designed national digital identity registry system with NID, birth/death certificates, driving licenses integration using blockchain-based verification and smart contracts",
                "Built advanced monitoring and observability stack using Prometheus, Grafana, and OCI Cloud Guard for proactive threat detection and performance optimization",
                "Deployed ML models on HuggingFace infrastructure for government AI services, implementing federated learning for privacy-preserving citizen data analytics",
                "Architected high-performance Minecraft server clusters for educational simulation environments and multi-player collaborative platforms"
            ]
        },
        {
            title: "Principal System Analyst (L4)",
            company: "bKash (co-owned by Alipay)",
            location: "BD",
            duration: "Jun 2021-Mar 2022",
            highlights: [
                "Led R&D resolving \"Transaction State\" throttling for 600K/min transaction capacity",
                "Modernized architecture combating CVE-2021-44228 (log4j) with RUST solutions",
                "Designed PCI-DSS compliant AWS deployment for VISA/MasterCard/AMEX payment systems",
                "Implemented optimal memory management with atomic transaction state handling"
            ]
        },
        {
            title: "Lead DevOps Engineer & CloudNative Developer",
            company: "HWW BD/USA",
            location: "BD",
            duration: "Aug 2019-May 2021",
            highlights: [
                "Resolved caching latency in Magento eCommerce (10M products, 1000+ TPS)",
                "Implemented microservices with Kubernetes, ISTIO service mesh, ArgoCD GitOps across Azure and AWS multi-cloud environments",
                "Designed multi-region architecture for European GDPR compliance automation with Azure DevSecOps pipeline integration",
                "Created intelligent Redis Sentinel caching with master-slave architecture and deployed custom Minecraft server infrastructure for client gaming platforms"
            ]
        },
        {
            title: "Assistant Professor",
            company: "Bangladesh Army Int. University",
            location: "BD",
            duration: "Feb 2015-Mar 2020",
            highlights: [
                "Taught Software Engineering, Machine Learning, Cybersecurity to 500+ students",
                "Supervised 15+ thesis projects on microservices, cloud security, distributed systems",
                "Developed curriculum for Software Quality Assurance and Network Security courses",
                "Mentored students in ACM-ICPC contests and research publications"
            ]
        },
        {
            title: "Lecturer",
            company: "Military Institute of Science & Technology (MIST)",
            location: "BD",
            duration: "Jan 2014-Jan 2015",
            highlights: [
                "Taught graduate courses in Algorithms, Compiler Design, Operating Systems, Computer Networks",
                "Supervised 6+ thesis projects in machine learning and cybersecurity domains",
                "Developed hands-on labs for Computer Graphics and Security courses",
                "Mentored students in competitive programming and research methodologies"
            ]
        },
        {
            title: "Software Engineer (Senior Researcher)",
            company: "HTRC BD & HTRC UK",
            location: "BD",
            duration: "Mar 2011-Jan 2014",
            highlights: [
                "Developed financial data analysis and prediction models using ML algorithms (KNN, K-means, Regression)",
                "Implemented Java-based software solutions using modular programming and Spring Boot frameworks",
                "Created REST APIs and integrated Elastic stack with in-memory caching for cloud solutions",
                "Served NASDAQ, S&P, Dow Jones customers with algorithmic trading insights"
            ]
        }
    ],

    // Key Architecture Designed - Complete from LaTeX
    keyArchitectures: {
        "AI Agent Orchestration": "Enhanced AutoGen RAG System: Dynamic agent creation with 5 collaboration patterns (sequential, parallel, hierarchical, consensus, specialist_review), dual database integration (PostgreSQL + MySQL), hardware acceleration (GPU/MPS/CPU), multi-level caching with Redis",
        "AI-Powered Upselling": "Complete suite from CLI to enterprise web application: 5 hybrid ML algorithms (FP-Growth, Matrix Factorization, Neural CF, PageRank Networks), real-time processing (<50ms), A/B testing framework, analytics dashboard, REST API with BI metrics",
        "Real-time AI Assistant": "Enhanced AI Podcast Assistant: real-time transcription via OpenAI Whisper, speaker diarization with Pyannote (8 speakers), contextual question generation, fact-checking with Wikipedia, Slack integration, Apple Silicon M3 MPS optimization",
        "GenAI Infrastructure": "8-template LLM deployment playground: SageMaker pipelines, EKS Kubernetes, AWS Batch HPC, EMR Spark, Fargate Serverless, ParallelCluster, Hybrid Multi-Cloud, Edge Federated Learning with real-time metrics and cost breakdowns",
        "Payment Systems": "PCI-DSS compliant payment gateway for bKash: VISA/MasterCard/AMEX integration, multi-phase transaction validation, secure data flow with wallet platform",
        "Cloud Infrastructure": "Multi-region fault-tolerant OCI architecture: Kubernetes clusters, cache eviction policies, horizontal pod autoscaling, MySQL HA cluster with observability stack",
        "Live Streaming Infrastructure": "High-concurrency OTT platform: Kubernetes with Ampere instances, CDN integration, real-time analytics with Apache Kafka streaming for 10M+ users",
        "Enterprise Solutions": "CloudNative modernization framework for National Portal (30,000 websites): JSON Duality Views, ORDS RESTful APIs, Oracle Autonomous Database, serverless functions, blockchain identity verification, IaC deployment with X-Road interoperability",
        "Digital Banking/MFS": "Secure Digital Banking/MFS Cloud Native Model for bKash: studying Monzo, NuBank, Revolut, Chime, Ally Bank, Starling Bank, N26 architectures to develop distributed architecture with enhanced security and scalability",
        "Production Automation": "Complete Automation Sync tool for Production-Staging: 13-stage architecture with backup sync, system validation, database consistency resolution using Percona cluster (master-slave), URL replacement automation, intelligent restore",
        "Enterprise eCommerce": "Multi-region Magento 2 on AWS: Auto Scaling Groups across AZs, RDS Aurora with synchronous replication, ElastiCache asynchronous replication, EFS shared storage, automated CloudFormation deployment with bastion security",
        "Microservices Migration": "Enterprise-scale migration for world's largest NGO (50+ countries) from AWS to OCI: blue-green deployment with zero downtime, service decomposition, data migration orchestration, cross-cloud compatibility",
        "Security Analysis Platform": "Universal Database Explorer with local AI inference (DeepSeek Coder V2 + LLaMA 3) for schema-aware SQL generation, GitHub Repository Analyzer with technical debt detection, JALPA forensic tool with ensemble learning",
        "Production Infrastructure": "Comprehensive webserver solution: Apache 2.4.41/Nginx 1.19.3, PHP-FPM optimization, Redis multi-instance, Varnish full-page cache, Elasticsearch clustering, Percona MySQL with ProxySQL, ELK monitoring, malware scanning",
        "E-Government": "X-Road compliant digital government architecture: citizen portal, information mediator, federated identity registry, blockchain document verification, departmental solutions (Estonia model) for national-scale transformation"
    },

    // E-Government & Digital Infrastructure Expertise
    eGovernmentExpertise: {
        "Interoperability": "X-Road architecture implementation, federated identity management, secure data exchange protocols",
        "Digital Identity": "National ID systems, blockchain verification, smart contracts, biometric authentication integration",
        "Citizen Services": "One-stop digital portals, eKYC, payment gateways, workflow automation, multi-channel service delivery",
        "Government Tech": "Policy management systems, regulatory compliance automation, cross-border data exchange, digital sovereignty"
    },

    // Current Research & Development (2024-Present) - Complete from LaTeX
    currentResearch: [
        {
            title: "Kubernetes Operator Security Framework",
            funding: "CNCF/NSF",
            institution: "Auburn University",
            role: "Lead Researcher & Developer",
            achievements: [
                "Developed production Kubernetes (K8s) operator dependency analysis tool published on TestPyPI (operatorhub-scraper)",
                "Created enhanced visualization for dependency graphs with cycle detection and vulnerability propagation",
                "Investigating advanced dependency resolution algorithms for NP-complete challenges in operator security",
                "Conducting formal analysis of operator control plane architectures and dependency propagation patterns"
            ]
        },
        {
            title: "Advanced Dependency Analysis & Formal Methods",
            category: "Software Engineering",
            institution: "Personal Research",
            role: "Principal Investigator",
            achievements: [
                "Implemented F*/SMT solvers for NP-complete dependency resolution with automated security assessment in distributed systems",
                "Designed Java Abstract Syntax Tree (AST) dependency parser for software engineering research and circular dependency detection",
                "Created formal verification models using F* and Coq for microservice architecture reliability analysis",
                "Developed polynomial-time algorithms for software supply chain vulnerability propagation modeling"
            ]
        },
        {
            title: "Technical Research & Industry Impact",
            category: "Conference & Community Leadership",
            institution: "Academic & Professional",
            role: "Program Committee Member",
            achievements: [
                "Selected as Program Committee member for EASE 2025 (International Conference on Evaluation and Assessment in Software Engineering) - Emerging Results track",
                "Conducted 100+ technical workshops globally on Kubernetes, ServerlessOps, and Cloud Security for Oracle, DevSecOps communities",
                "Published research on Kubernetes operator dependency vulnerability propagation (ICSE 2025 preparation)",
                "Created SkyDic App architecture showcasing Express.js, middleware design, and async file handling with production-ready scalability patterns"
            ]
        },
        {
            title: "GenAI & Computer Vision Solutions",
            category: "AI/ML Research",
            institution: "Personal Research",
            role: "Principal Investigator",
            achievements: [
                "Developed Deep Convolutional Generative Adversarial Network (DCGAN) for Computer Vision with PyPI deployment",
                "Created Retrieval Augmented Generation (RAG) based agentic solutions: podcast buddy, AI-powered upselling systems",
                "Collaborated with Electric Power Research Institute (EPRI) USA on Distribution Grid Modeler AI assistance architectures",
                "Maintained log4j vulnerability simulator and algorithm visualizers (Bellman-Ford, Prim's Minimum Spanning Tree)"
            ]
        },
        {
            title: "Critical Infrastructure Security Research",
            category: "Production Tools & Forensic Analysis",
            institution: "Independent Research",
            role: "Security Researcher",
            achievements: [
                "Conducted forensic analysis of major service outages: Claude AI (May 2025), Spotify Envoy filter misconfiguration, identifying cascading failure patterns and architectural vulnerabilities",
                "Developed GitHub Repository Analyzer with technical debt detection, code quality metrics, and team dynamics analysis - serving engineering managers and DevOps teams globally",
                "Created Universal Database Explorer with local AI inference (DeepSeek Coder V2 + LLaMA 3) for schema-aware SQL generation without API dependencies",
                "Built 8-template GenAI LLM deployment architecture playground: EKS Kubernetes, AWS Batch HPC, EMR Spark, Fargate Serverless, and Hybrid Multi-Cloud setups with real-time metrics"
            ]
        },
        {
            title: "Interactive Learning Platforms",
            category: "Algorithm Visualization & Educational Tools",
            institution: "Open Source Contribution",
            role: "Principal Developer",
            achievements: [
                "Developed interactive algorithm simulators: Bellman-Ford shortest path, Prim's MST, Dijkstra visualization, and CPU scheduling algorithms with real-time step-by-step analysis",
                "Created advanced TypeScript debugging frameworks addressing runtime type safety vs compile-time guarantees in distributed systems",
                "Built enhanced Bandit vulnerability analysis extension for Python repositories with advanced reporting capabilities",
                "Designed IaC security automation with Kyverno policy-as-code, OPA Rego expressions, and GitOps integration for compliance validation"
            ]
        },
        {
            title: "Kubernetes Security Architecture Analysis",
            category: "Academic Peer Review & Research Critique",
            institution: "Independent Research",
            role: "Technical Reviewer",
            achievements: [
                "Conducted comprehensive technical review of KubeKeeper (EuroS&P 2025) Kubernetes secrets management architecture, identifying critical scalability and production readiness limitations",
                "Identified catastrophic scalability bottleneck: BoltDB single-write database design creates massive performance degradation during high-scale deployments (scaling 1K to 1M pods), transforming minutes-long operations into hours-long processes",
                "Analyzed production-killing operational overhead: 3 webhook validations + deployment mutations increase pod startup time from 2-5s to 30-60s, making ultra-high-scale scenarios (Netflix surge traffic, IPL cricket finals 100X viewer spikes) operationally unfeasible",
                "Discovered fundamental Single Point of Failure (SPOF): BoltDB file-based key storage with no concurrent writing support, file-level locking allowing only one webhook pod access, and catastrophic key loss when nodes fail",
                "Highlighted missing critical security feature: complete absence of key rotation mechanisms in file-based storage system, creating permanent security vulnerability and operational dead-end scenarios",
                "Identified zero-trust implementation contradictions: architecture claims zero-trust while implementing single database dependency, no distributed trust verification, and lack of graceful degradation mechanisms",
                "Proposed production-ready architectural improvements: distributed key architecture with Key Management Service (KMS) integration, High Availability (HA) webhook load balancing, in-memory caching with pre-warming strategies, and shared persistent volume concepts",
                "Demonstrated enterprise-scale Kubernetes security expertise based on Oracle, bKash (600K/min transactions), and OTT platform production deployments requiring immediate 1000X scaling capabilities"
            ]
        }
    ],

    // Notable Bug Discoveries & Security Research - Complete from LaTeX
    bugDiscoveries: [
        {
            date: "Sep 2021",
            title: "Critical Oracle Cloud Console Vulnerability",
            organization: "Oracle Compute Team",
            role: "Security Researcher",
            description: "Discovered unexpected server shutdown vulnerability in OCI Compute instances without notification triggers. Critical impact: potential data loss and service disruption across enterprise workloads. Led to career opportunity as Sr. Solution Architect and system-wide security improvements in Oracle Cloud Console.",
            impact: "Career opportunity and system-wide security improvements"
        },
        {
            date: "Jan 2022",
            title: "Oracle MySQL PaaS Design Flaw",
            organization: "Oracle MySQL Team Singapore",
            role: "Security Researcher",
            description: "Identified storage lock vulnerability in MySQL High Availability (HA) PaaS affecting Online Transaction Processing (OLTP) transactions under high concurrency. Proposed real-time autoscaling solution with intelligent load balancing adopted by Oracle MySQL cloud services, improving transaction throughput by 40%.",
            impact: "40% improvement in transaction throughput"
        },
        {
            date: "May 2025",
            title: "Claude AI Service Outage Analysis",
            organization: "Independent Security Research",
            role: "Forensic Analyst",
            description: "Conducted comprehensive forensic analysis of Claude AI global service outage, identifying cascading failure patterns in distributed AI infrastructure. Published detailed technical analysis highlighting architectural vulnerabilities in Large Language Model (LLM) serving systems and proposed resilience improvements.",
            impact: "Published technical analysis for AI infrastructure community"
        },
        {
            date: "2024-2025",
            title: "Spotify Envoy Filter Misconfiguration",
            organization: "Independent Security Research",
            role: "Infrastructure Analyst",
            description: "Analyzed Spotify's Envoy proxy filter misconfiguration leading to service degradation. Identified configuration drift patterns in microservices mesh architectures and developed automated detection mechanisms for similar infrastructure vulnerabilities.",
            impact: "Automated detection mechanisms for infrastructure vulnerabilities"
        },
        {
            date: "2021-2024",
            title: "Log4j Vulnerability Research & Education",
            organization: "Open Source Security Research",
            role: "Lead Security Researcher",
            description: "Created comprehensive Log4j vulnerability simulator (CVE-2021-44228) for educational purposes. Developed multiple exploitation scenarios and mitigation strategies, serving cybersecurity education community with practical hands-on learning tools. Repository gained significant traction in security research community.",
            impact: "Significant traction in security research community"
        },
        {
            date: "2022-Present",
            title: "Kubernetes Operator Supply Chain Security",
            organization: "CNCF/NSF Funded Research",
            role: "Principal Investigator",
            description: "Discovered critical dependency vulnerability propagation patterns in Kubernetes operator ecosystems. Developed automated security assessment framework (operatorhub-scraper) identifying previously unknown supply chain risks. Research findings contributing to CNCF security best practices and operator certification standards.",
            impact: "Contributing to CNCF security best practices"
        }
    ],

    // Research Publications & Impact - Complete from LaTeX
    publications: [
        {
            year: "2025",
            status: "In Preparation",
            title: "Dependency Vulnerability Propagation in Kubernetes Operator Supply Chain: A CNCF-Compliant Security Framework",
            authors: "Arafat, J.; et al.",
            journal: "ICSE 2027",
            type: "conference"
        },
        {
            year: "2025",
            status: "arXiv",
            title: "Enhanced Deep Convolutional Generative Adversarial Network (GAN) for Computer Vision: A Community-Deployable PyPI Framework",
            authors: "Arafat, J.; et al.",
            journal: "arXiv 2027",
            type: "preprint"
        },
        {
            year: "2024",
            status: "accepted",
            title: "A Vision of Seamless Quality Assurance for Kubernetes-based Container Orchestration",
            authors: "Arafat, J.; Shazibul Islam Shamim, Hanyang Hu, Arpan Srivastava, Muhammad Ali Babar, Akond Rahman",
            journal: "ACM TOSEM - Transactions on Software Engineering and Methodology, 2024, 33.7",
            type: "journal"
        },
        {
            year: "2019",
            title: "A Unified Identity Management Service Structure Based on LDAP and Kerberos for Organization with .bd Domain",
            authors: "Arafat, J.; Chowdury, Md Abdul Malek; Bidhu, Mysha Nishat; Faruqui, Tazkia Binty",
            journal: "IOSR Journal of Computer Engineering, 2019, 21(2):59-70",
            type: "journal"
        },
        {
            year: "2019",
            title: "A Light Weight Cryptography (LWC) for Small Scale Data in IoT Devices",
            authors: "Arafat, J.; Chowdury, Md Abdul Malek; Faruque, Tazkia Binty",
            journal: "International Journal of Computer Applications, 182(49):29-35",
            type: "journal"
        },
        {
            year: "2013",
            title: "Analyzing public emotion and predicting stock market using social media",
            authors: "Arafat, J.; Habib, M. A.; Hossain, R.",
            journal: "American Journal of Engineering Research, 2013, v2(9), p265-275",
            type: "journal"
        },
        {
            year: "2013",
            title: "Emotion detection and event prediction system",
            authors: "Arafat, J.; Halimu, C.; Habib, M. A.; Hossain, R.",
            journal: "Global Journal of Computer Science and Technology Network, Web & Security, 2013, v13 p13",
            type: "journal"
        },
        {
            year: "2013",
            title: "Recapitulating the development initiatives of a robust information security safeguard: RITSB-the proposed solution",
            authors: "Arafat, J.; Habib, M. A.",
            journal: "IOSR Journal of Computer Engineering, Volume 15, Issue 2, p30-34",
            type: "journal"
        },
        {
            year: "2013",
            title: "Situated Cognition & Culture of Learning to Re-Conceptualize the Teaching-Learning Paradigm in the Field of Engineering and Technology in Bangladesh",
            authors: "Arafat, J.; Habib, M. A.; Clement, C. K.",
            journal: "IOSR Journal of Research & Method in Education, 2013, v3, p20-27",
            type: "journal"
        },
        {
            year: "2012-2013",
            title: "Emergence of Robust Information Security Management Structure around the world wide Islamic Institutions: A Multifaceted Security Solution",
            authors: "Arafat, J.; Halimu, C.",
            journal: "International Journal of Strengthening the Role of ICT in Development, 2011, p393",
            type: "journal"
        },
        {
            year: "2012",
            title: "Emergence of Robust Information Security Management Structure around the world wide Higher Education Institutions: a Multifaceted Security Solution",
            authors: "Arafat, J.; Daiyan, G. M.; Waliullah, M.",
            journal: "International Journal of Computer Science Issues (IJCSI), 9(4), 206",
            type: "journal"
        },
        {
            year: "2012",
            title: "Information Technology Security, Strategies and Practices in Higher Education: A Literature Review",
            authors: "Waliullah, M.; Arafat, J.; Daiyan, G. M.",
            journal: "Journal of Computing Press, 2012, p138-144",
            type: "journal"
        },
        {
            year: "2008-2009",
            title: "Object segmentation based on split and merge algorithm",
            authors: "Faruquzzaman, A. B. M.; Paiker, N. R.; Arafat, J.; Karim, Z.; Ali, M. A.",
            journal: "IEEE TENCON 2008 Region 10 Conference; International Journal of Signal and Imaging Systems Engineering, 2009, 2(1), 70",
            type: "conference"
        },
        {
            year: "2008",
            title: "Literature on image segmentation based on split-and-merge techniques",
            authors: "Faruquzzaman, A. B. M.; Paiker, N. R.; Arafat, J.; Ali, M. A.; Sorwar, G.",
            journal: "Proceedings of 5th International Conference on Information Technology and Applications, ICITA 2008, p120-125",
            type: "conference"
        },
        {
            year: "2008",
            title: "A survey report on image segmentation based on split and merge algorithm",
            authors: "Faruquzzaman, A. B. M.; Paiker, N. R.; Arafat, J.; Ali, M. A.",
            journal: "IETECH Journal of Advanced Computations, 2(2), 86-101",
            type: "journal"
        }
    ],

    // Top Git Repositories & Open Source Contributions - Complete from LaTeX
    topRepositories: [
        {
            category: "CNCF K8s Security",
            title: "Secure Supply Chain for K8s Operator",
            description: "NSF/CNCF funded",
            links: [
                { url: "https://github.com/jahidul-arafat/cncf-k8s-operatorhub-scrapper", label: "GitHub Repository" },
                { url: "https://test.pypi.org/project/operatorhub-scraper/", label: "TestPyPI Package" },
                { url: "https://jahidul-arafat.github.io/sample_dep_resolver_output_only/", label: "Live Demo" }
            ]
        },
        {
            category: "Research Tools",
            title: "Java AST Dependency Parser",
            description: "NSF funded PhD collaboration",
            links: [
                { url: "https://github.com/jahidul-arafat/java-ast-dependency-parser-research", label: "GitHub Repository" }
            ]
        },
        {
            category: "AI/ML & Computer Vision",
            title: "Deep Convolutional GAN for Computer Vision + PyPI Package",
            links: [
                { url: "https://github.com/jahidul-arafat/gan-mnist-cifar", label: "GitHub Repository" }
            ]
        },
        {
            category: "AI/ML & Computer Vision",
            title: "Synthetic Data Model Optimization",
            links: [
                { url: "https://github.com/jahidul-arafat/optimizing_model_accuracy_with_synthetic_data", label: "GitHub Repository" }
            ]
        },
        {
            category: "GenAI Architecture",
            title: "Model Training Architecture Designs",
            links: [
                { url: "https://jahidul-arafat.github.io/genai_model_training_architecture/", label: "Architecture Demo" },
                { url: "https://github.com/jahidul-arafat/aws_genai_architecture", label: "Source Code" }
            ]
        },
        {
            category: "Industry Collaboration",
            title: "EPRI USA Distribution Grid Modeler AI Assistance",
            links: [
                { url: "https://jahidul-arafat.github.io/epri_ai_architectures/", label: "Architecture Overview" }
            ]
        },
        {
            category: "Algorithm Visualization",
            title: "Bellman-Ford Simulator",
            links: [
                { url: "https://jahidul-arafat.github.io/bellman-ford-visualization/", label: "Demo" }
            ]
        },
        {
            category: "Algorithm Visualization",
            title: "Prim's MST Simulator",
            links: [
                { url: "https://jahidul-arafat.github.io/prims_mst_visualization/", label: "Demo" }
            ]
        },
        {
            category: "Algorithm Visualization",
            title: "Auburn Batch Processing",
            links: [
                { url: "https://jahidul-arafat.github.io/aubatch/", label: "Demo" }
            ]
        },
        {
            category: "Database & Analytics",
            title: "Universal Database Explorer with AI",
            links: [
                { url: "https://github.com/jahidul-arafat/UniversalDBProject", label: "GitHub Repository" }
            ]
        },
        {
            category: "Database & Analytics",
            title: "Repository Contributor Analyzer",
            links: [
                { url: "https://github.com/jahidul-arafat/repo-contributor-analyzer", label: "GitHub Repository" }
            ]
        },
        {
            category: "Systems Programming",
            title: "Rust Architecture Patterns",
            links: [
                { url: "https://github.com/jahidul-arafat/RUST_ARCHITECT", label: "GitHub Repository" }
            ]
        },
        {
            category: "Systems Programming",
            title: "Top Python DevOps Modules",
            links: [
                { url: "https://github.com/jahidul-arafat/Top-Python-Modules-for-DevOps", label: "GitHub Repository" }
            ]
        },
        {
            category: "Security & Forensics",
            title: "JALPA Log Forensics Python Toolkit",
            links: [
                { url: "https://github.com/jahidul-arafat/JALPA-log-forensics-Python-Toolkit", label: "GitHub Repository" }
            ]
        },
        {
            category: "Security & Forensics",
            title: "Log4j Vulnerability Simulator",
            links: [
                { url: "https://github.com/jahidul-arafat/log4j-vulnerability-simulation", label: "GitHub Repository" }
            ]
        },
        {
            category: "Security & Forensics",
            title: "Bash Security Scripts",
            links: [
                { url: "https://github.com/jahidul-arafat/play_with_bash_scripts", label: "GitHub Repository" }
            ]
        },
        {
            category: "Oracle IaaC",
            title: "OCI DevOps Scratchbook",
            links: [
                { url: "https://github.com/jahidul-arafat/oci_dev_and_archi_scratchbook", label: "GitHub Repository" }
            ]
        },
        {
            category: "Oracle IaaC",
            title: "Oracle DevOps with Ansible & Terraform",
            links: [
                { url: "https://github.com/jahidul-arafat/Oracle-DevOps-with-Ansible-and-Terraform", label: "GitHub Repository" }
            ]
        },
        {
            category: "Streaming & Messaging",
            title: "Mastering Apache Kafka & KSQLDB",
            links: [
                { url: "https://github.com/jahidul-arafat/mastering-kafka-ksqldb", label: "GitHub Repository" }
            ]
        },
        {
            category: "Streaming & Messaging",
            title: "OTT Bandwidth Predictor",
            links: [
                { url: "https://github.com/jahidul-arafat/ott_predictor", label: "GitHub Repository" }
            ]
        },
        {
            category: "Enterprise Applications",
            title: "2FA eCommerce with Oracle AQ",
            links: [
                { url: "https://github.com/jahidul-arafat/2FA_eCommeceApp_with_Oracle_AQ", label: "GitHub Repository" }
            ]
        },
        {
            category: "Enterprise Applications",
            title: "BDD Testing with Cucumber Framework",
            links: [
                { url: "https://github.com/jahidul-arafat/cucumber_bdd_recipies", label: "GitHub Repository" }
            ]
        },
        {
            category: "Infrastructure Automation",
            title: "Chef Security & Compliance Automation",
            links: [
                { url: "https://github.com/jahidul-arafat/Chef-Automation-Infra-Security-Compliance-Cloud-and-Software-Delivery", label: "GitHub Repository" }
            ]
        },
        {
            category: "Infrastructure Automation",
            title: "Kubernetes Operator Playground",
            links: [
                { url: "https://github.com/jahidul-arafat/kubernetes-operator-playground", label: "GitHub Repository" }
            ]
        },
        {
            category: "Production GenAI",
            title: "AutoGen Multi-Agent RAG System",
            links: [
                { url: "https://gitlab.com/jza0145/autogen_multiagent_hybrid_datasource", label: "GitLab Repository" }
            ]
        },
        {
            category: "Production GenAI",
            title: "AI Podcast Buddy",
            links: [
                { url: "https://gitlab.com/jza0145/podcast_buddy", label: "GitLab Repository" }
            ]
        },
        {
            category: "Production GenAI",
            title: "AI-Powered Upselling System",
            links: [
                { url: "https://gitlab.com/jza0145/ai-powered-upselling", label: "GitLab Repository" }
            ]
        },
        {
            category: "DevSecOps Pipeline",
            title: "CI/CD with SonarQube Integration",
            links: [
                { url: "https://gitlab.com/sec-sw-const-sum-24-b/students/jza0145/final-part-1", label: "GitLab Repository" }
            ]
        },
        {
            category: "DevSecOps Pipeline",
            title: "SAST/DAST & AWS EBS Pipeline",
            links: [
                { url: "https://gitlab.com/sec-sw-const-sum-24-b/students/jza0145/final-part-b", label: "GitLab Repository" }
            ]
        }
    ],

    // Certifications & Recognition - Complete from LaTeX
    certifications: {
        "Cloud Architecture": [
            "AWS Solutions Architect Professional (97% - 2nd globally)",
            "Oracle Cloud Architect Professional (93.3%)",
            "Oracle Cloud Infrastructure Architect Associate",
            "Oracle Cloud Operations Associate",
            "Oracle Developer Associate"
        ],
        "Security & Compliance": [
            "ISC2 Certified in Cybersecurity (CC)",
            "EC-Council CEH v11",
            "IBM Cybersecurity Analyst Professional",
            "SISA PCI-DSS Implementer (CPISI - 86%)",
            "Cisco Network Academy Cybersecurity Pathway",
            "Fortinet NSE 1",
            "Oracle Cloud Security Associate"
        ],
        "Cloud Specializations": [
            "Oracle Autonomous Database Specialist",
            "Oracle Machine Learning Specialist",
            "Oracle Database Migration Specialist",
            "Oracle Application Integration Specialist",
            "AWS Block Storage Specialized",
            "Alibaba Cloud DevOps/ML/Computing Specialty"
        ],
        "Development & DevOps": [
            "Next.js Full-Stack Development (LinkedIn 2025)",
            "Node.js Web Servers & Deployment (LinkedIn 2024)",
            "Java Spring Boot Microservices",
            "Advanced Java Programming",
            "Functional Programming with Java",
            "Kubernetes Challenges (KodeKloud)",
            "GitOps Foundation (Linux Foundation)"
        ],
        "Enterprise & Management": [
            "Harvard ManageMentor Coaching Certification",
            "IBM Enterprise Design Thinking (Practitioner & Co-Creator)",
            "Agile with Atlassian Jira",
            "Scrum Foundation Professional (SFPC)",
            "ISO/IEC 27001 Information Security Associate",
            "ISO/IEC 20000 IT Service Management"
        ],
        "DevSecOps & Infrastructure": [
            "Chef Principles Certification",
            "RedHat RHCSA",
            "CSI Linux Bash/Python Scripting",
            "OPSWAT Security Associate (Email, Endpoint, Network, Web-Traffic)",
            "Adobe Certified Magento Commerce Developer"
        ],
        "Current Studies (2025)": [
            "Azure Solutions Architect Expert (AZ-305) - In Progress",
            "HuggingFace AI Courses: LLM Course",
            "Model Context Protocol (MCP)",
            "AI Agents, Deep Reinforcement Learning",
            "Computer Vision, Audio Transformers",
            "Diffusion Models, ML for Games, ML for 3D"
        ],
        "Professional Rankings": [
            "TryHackMe Top 4% Global Cybersecurity",
            "HackerRank Python Algorithms (2296.4/2300)",
            "AWS SA Professional 2nd Highest Score Worldwide (97%)"
        ],
        "Awards & Fellowships": [
            "NSF Presidential Graduate Research Fellowship (Top Distinction)",
            "Woltosz Graduate Research Fellowship",
            "Oracle Executive Recognition for Critical Security Research"
        ]
    },

    // Contact and social information
    contact: {
        email: "jahidapon@gmail.com",
        phone: "+1 334.744.3544",
        location: "Auburn University, USA",
        website: "https://jahidularafat.github.io",
        linkedin: "https://linkedin.com/in/jahidul-arafat-791a7490",
        github: "https://github.com/jahidul-arafat",
        gitlab: "https://gitlab.com/jza0145",
        research: "https://conf.researchr.org/profile/ease-2025/jahidularafat"
    },

    // GitHub repository statistics
    github: {
        totalStars: "500+",
        totalRepos: "20+",
        topLanguages: ["TypeScript", "Python", "Java", "Rust", "JavaScript"],
        contributions: "2000+ commits in 2024",
        researchImpact: "NSF-funded CNCF K8s operator security framework (TestPyPI: operatorhub-scraper), Enhanced DCGAN PyPI package deployed globally, 500+ GitHub stars across 20+ repositories, Program Committee Member EASE 2025 (Emerging Results track), production-ready tools serving enterprise and research communities worldwide, 15+ peer-reviewed publications spanning computer vision, cybersecurity, social media analytics, and cloud-native systems"
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}