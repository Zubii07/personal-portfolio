import { Project } from '../types';

export const projects: Project[] = [
  // Full Stack Projects
  {
    id: 'AI-Interview-Agent',
    title: 'AI Interview Agent',
    description: 'A smart voice-based interview preparation tool that simulates real interview scenarios using AI.',
    longDescription: `Problem: Candidates preparing for interviews often practice with generic question banks that ignore their actual resume and the specific job they're applying for, leading to poor alignment between preparation and real interview expectations.

Solution: Built a web-based AI interview platform that generates personalized interview questions from a candidate's resume and job description, using LLMs with voice input/output to simulate a realistic, spoken interview experience rather than a static text quiz.

Result/Impact: Delivered a fully functional Round 1 flow covering education, experience, and subject-matter questions, with the AI evaluating spoken responses, generating improvement tips, and issuing a pass/fail decision with retry support. Round 2 is designed to auto-schedule after Round 1 clearance with automated email confirmations and reminders, extending the same voice-based evaluation flow to a second interview stage.`,
    images: [
      '/InterviewAgent/public.png',
      '/InterviewAgent/home.png',
      '/InterviewAgent/round1.png',
      '/InterviewAgent/Feedback.png',
    ],
    technologies: ['React.js', 'Python', 'Flask', 'SQLite', 'SQLAlchemy', 'OpenAPI', 'STT', 'TTS', 'LangChain', 'SMTP'],
    category: 'fullstack',
    projectUrl: 'https://github.com/Zubii07/Interview-Agent',
    features: [
      'User authentication and authorization',
      'Resume & JD upload',
      'LLM asks questions in voice',
      'Candidate answers in voice',
      'LLM evaluates responses, provides feedback, improvement tips, and pass/fail status',
      'Retry option for candidates',
    ]
  },
  // Backend Projects
  {
    id: 'mediderma-ai',
    title: 'MediDerma-AI',
    description: 'MediDerma-AI is an AI-powered mobile application that detects skin diseases from images using deep-learning models and provides instant diagnosis, treatment recommendations, weather-based skin alerts, and ancestry-based insights.',
    longDescription: `Problem: Access to timely dermatology diagnosis is limited by cost, location, and appointment availability, leaving many people without an easy way to get an early read on potentially serious skin conditions like melanoma or psoriasis before they worsen.

Solution: Built an AI-powered mobile dermatology assistant that analyzes skin images captured via camera or gallery upload, using convolutional neural networks trained on diverse dermatology datasets to classify conditions such as acne, eczema, psoriasis, fungal infections, melanoma, basal cell carcinoma, and squamous cell carcinoma across varying skin tones and textures.

Result/Impact: Delivered a mobile application that goes beyond diagnosis to provide personalized treatment recommendations, UV and weather-based skin safety alerts, and ancestral skin-health insights, built on a scalable architecture with real-time prediction APIs and secure cloud integration. The app bridges the gap between professional dermatology and everyday users, enabling early detection and continuous skin-health monitoring directly from a mobile device.`,
    images: [
      '/MediDerma/front.jpeg',
      '/MediDerma/Create Account.jpeg',
      '/MediDerma/Profile.jpeg',
      '/MediDerma/home.jpeg',
      '/MediDerma/actions.jpeg',
      '/MediDerma/scan history.jpeg',
      '/MediDerma/desease analysis.jpeg',
      '/MediDerma/precautions.jpeg',
      '/MediDerma/importance.jpeg',
      '/MediDerma/location.jpeg',
      '/MediDerma/Mode.jpeg',
    ],
    technologies: ['React Native', 'Python', 'FastAPI', 'Firebase', 'Deep Learning', 'Convolutional Neural Networks (CNNs)', 'Transfer Learning', 'TensorFlow', 'Image Preprocessing & Augmentation', 'Model Fine-tuning & Evaluation'],
    category: 'ai-ml',
    projectUrl: 'https://github.com/Zubii07/MediDerma-AI',
    features: [
      'AI-Powered Skin Disease Detection',
      'Treatment Recommendations',
      'Easy Image Scanning',
      'Weather-Based Skin Alerts',
      'Ancestral & Genetic Skin Analysis',
    ]
  },
  {
    id: 'apc-system',
    title: 'Automatic Passenger Counting (APC) System',
    description: 'A computer vision system for automatically counting bus/transit passengers using YOLO11m detection, BoT-SORT tracking, and geometric door-line crossing logic. Co-authored as a published research contribution.',
    longDescription: `Problem: Public transit operators need accurate, automated passenger counts to plan routes, allocate resources, and report ridership data but manual counting is expensive, error-prone, and doesn't scale across large fleets.

Solution: Built a computer vision-based passenger counting system that detects and tracks passengers in real time as they cross a bus doorway, using object detection and multi-object tracking combined with geometric crossing logic to count entries and exits accurately.

Result/Impact: Delivered a working system after iterating through multiple architectural approaches (YOLOv8 zone-based counting → ViT scene classification → final YOLO11m + BoT-SORT + door-line crossing method), achieving 95% counting accuracy on test footage. Co-authored as a published research contribution supporting a client's master's thesis, with the paper published on Zenodo and additional submission targeted at IEEE.`,
     images: [
      '/APC/pipeline.png',
      '/APC/platform view.png',
      '/APC/door view boarding.png',
    ],
    technologies: ['Python', 'YOLO11m', 'BoT-SORT', 'OpenCV', 'Computer Vision', 'Object Tracking', 'Deep Learning'],
    category: 'ai-ml',
    projectUrl: 'https://zenodo.org/records/21223994',
    features: [
      'Iterated through multiple architectures including YOLOv8 zone-based counting and ViT scene classification before finalizing the YOLO11m + BoT-SORT approach',
      'Published as a research contribution',
      'Built for a client\'s master\'s thesis contribution',
      'Geometric door-line crossing logic for reliable passenger counting'
    ]
  },
  {
    id: 'cvar-risk-forecasting',
    title: 'Deep Learning Downside Risk Forecasting & CVaR Portfolio Optimization',
    description: 'A quantitative finance pipeline forecasting downside risk and optimizing portfolios using Conditional Value-at-Risk (CVaR), combining classical GARCH baselines with LSTM/Transformer deep learning models.',
    longDescription: `Problem: Traditional portfolio risk models like GARCH struggle to capture the non-linear, fat-tailed nature of financial market downturns leaving investors under prepared for tail risk events like market crashes.Standard variance based risk measures also fail to account for the severity of losses beyond a threshold, not just their probability.

Solution: Built a six-phase deep learning pipeline that forecasts downside risk and optimizes portfolio allocation using Conditional Value-at-Risk (CVaR), a risk measure that captures expected losses in worst-case scenarios, not just average volatility. The system benchmarks classical statistical baselines against modern sequence models to identify the most reliable forecasting approach.

Result/Impact: Delivered a production-grade risk forecasting system where the Transformer model outperformed the GARCH baseline by ~19% on forecast accuracy (MAE), statistically validated via Diebold-Mariano testing (p<0.001) across 20+ years of historical data and 3 major market stress scenarios (2008 GFC, COVID-19, 2022 inflation shock). The Phase 4 portfolio-engine rebuild prioritized methodological rigor over inflated results — isolating exactly how much value the AI forecasts added, rather than presenting vanity metrics.`,
     images: [
      '/RiskForcasting/35_dissertation_summary.png',
      '/RiskForcasting/A2_performance_metrics_comparison.png',
      '/RiskForcasting/E6_dm_tests.png',
      '/RiskForcasting/D1_end_to_end_pipeline.png',
      '/RiskForcasting/A4_weight_allocation_heatmaps.png',
      '/RiskForcasting/28_three_crisis_vix.png',
    ],
    technologies: ['Python', 'PyTorch', 'LSTM', 'Transformers', 'GARCH', 'CVaR Optimization', 'Backtesting', 'Quantitative Finance'],
    category: 'ai-ml',
    projectUrl: 'https://github.com/Zubii07/Risk_Forcasting-Dissertation',
    features: [
      'GARCH baseline models for classical volatility forecasting comparison',
      'LSTM and Transformer-based deep learning models for non-linear risk pattern detection',
      'CVaR-based portfolio optimization for tail-risk-aware asset allocation',
      'Comprehensive backtesting framework evaluated across 17 performance metrics',
      'Stress-testing across 3 historical market crisis periods (e.g., 2008 Financial Crisis, COVID-19 crash)',
      ' Mid-project methodology rebuild (Phase 4) to eliminate look-ahead bias and ensure result validity',
    ]
  },
  {
    id: 'recommender-system',
    title: 'Movie Recommender System: BPR-MF vs LightGCN',
    description: 'A comparative recommender system benchmarking Bayesian Personalized Ranking Matrix Factorization (BPR-MF) against LightGCN graph-based collaborative filtering on the MovieLens dataset.',
    longDescription: `Problem: Recommendation systems need to balance accuracy with computational efficiency, but it's often unclear whether simpler matrix factorization approaches or more complex graph based models actually deliver better real world performance for a given dataset size.

Solution: Built and benchmarked two recommendation approaches head-to-head on the MovieLens dataset, Bayesian Personalized Ranking Matrix Factorization (BPR-MF) as a classical baseline, and LightGCN, a graph neural network-based collaborative filtering model to compare accuracy, ranking quality, and computational trade-offs.

Result/Impact: LightGCN outperformed the BPR-MF baseline by 15% on Recall@K, demonstrating the value of graph-based relationship modeling for recommendation tasks.`,
    images: [
      'RecommenderSystem/RS1&RS2 Final Graph.png',
      'RecommenderSystem/movielens_eda.png',
    ],
    technologies: ['Python', 'PyTorch', 'LightGCN', 'Matrix Factorization', 'Collaborative Filtering', 'MovieLens', 'Recommender Systems'],
    category: 'ai-ml',
    projectUrl: 'https://github.com/Zubii07/MF-BPR-Comparison',
    features: [
      'Comparative model evaluation between BPR-MF and LightGCN',
      'Graph neural network based recommendations',
      'Performance benchmarking on standard recommendation metrics',
      'Built using the MovieLens dataset'
    ]
  },
  {
    id: 'price-intelligence-dashboard',
    title: 'FMCG Price Intelligence System',
    description: 'A real-time price monitoring and comparison platform for a UAE retail client, scraping and analyzing pricing data across major regional retailers to deliver competitive intelligence.',
    longDescription: `Problem: A UAE retail client needed real-time visibility into competitor pricing across major regional grocery chains to stay competitively priced, but manually tracking prices across multiple retailers was slow and unreliable.

Solution: Built an automated price intelligence platform that scrapes product pricing from major UAE retailers — Carrefour, Union Coop, Sharjah Coop, and AD Coop — and surfaces it through a live comparison dashboard, giving the client a real-time view of the competitive pricing landscape.

Result/Impact: Delivered a fully automated pipeline covering 5 retailers and 20+ products, refreshing pricing data daily, and cutting the client's manual price-checking effort from 10 hours/week to near-zero. The Streamlit dashboard gave the client actionable competitive intelligence they could act on immediately rather than relying on stale, manually collected data.`,
    images: [
      'FMCG/final.png',
      'FMCG/home.png',
      'FMCG/product 1.png',
      'FMCG/product 2.png',
    ],
    technologies: ['Python', 'Streamlit', 'FastAPI', 'Web Scraping', 'Data Pipelines', 'PostgreSQL', 'Data Visualization'],
    category: 'fullstack',
    projectUrl: 'https://github.com/Zubii07/TOKENIZ-ED-UAE',
    features: [
      'Automated scraping across major retail sources including Carrefour, Union Coop, Sharjah Coop, and AD Coop',
      'Price comparison dashboard for product monitoring',
      'Streamlit and FastAPI based architecture',
      'Built for a UAE retail client'
    ]
  }
];
