const program1 = [
    {
        day:"Day 1: Introduction to AI for Biomedical",
        sessions:[
            {
                session:'Morning Session:',
                sessionName:'Introduction to AI and AI for Biomedical',
                topic:[
                    'Welcome Speech and Workshop Overview',
                    'Introduction to Artificial Intelligence (AI)',
                    'AI Applications: OCR, Text Classification, Information Extraction, Table Extraction, Voice Transcriber, Voice Diarization'
                ]
            },
            {
                session:'Afternoon Session:',
                sessionName:' Machine Learning at 2023:',
                topic:[
                    'Introduction to Machine Learning (ML)',
                    'Data Representation: Text, Image and Speech',
                    'Feature Extraction & Representation',
                    'Data/Features as Matrix',
                    'Labels/Classes',
                    'Types of Machine Learning: Supervised, Unsupervised, and Reinforcement Learning',
                ]
            }
        ]
    },{
        day:"Day 2: Brainstroming Bio-Medical Use Cases",
        sessions:[
            {
                session:'Morning Session:',
                sessionName:'Morning Session: AI Core Modules Consumption',
                topic:[
                    'Consuming REST APIs (Requests)',
                    'Hands-on',
                    '-OCR',
                    '-Table Extraction',
                    '-Information Extraction',
                    '-Text Classification',
                    '-Voice Transcriber',
                    '-Voice Diarizer',
                    'Discussion on Bio-Medical Use Cases',
                    'Assigning Projects'
                    
                ]
            },
            {
                session:'Afternoon Session:',
                sessionName:' Developing AI Application:',
                topic:[
                    'Project Formulation',
                    'Git Setup',
                    'Application Orchestration',
                    'Serving Application (FastAPI)',
                    'Application Exposure (Streamlit)',
                ]
            }
        ]
    }
]

const program2 = [
    {
        day:"Day 3: From Regression to Deep Learning",
        sessions:[
            {
                session:'Morning Session:',
                sessionName:'Conventional Machine Learning',
                topics:[
                    {
                        title:'Fundamentals of Machine Learning',
                        contents:[
                            'What is Machine Learning?',
                            'Supervised ML Algorithms',
                            'Unsupervised ML Algorithms'
                        ]
                    },
                    {
                        title:'From Regression to Deep Learning',
                        contents:[
                            'Formulating Ax = b',
                            'Solving Ax = b through Matrix Methods',
                            'Solving Ax = b through Approximation Methods',
                            'Visualising a Neuron'
                        ]
                    }
                ]

            },{
                session:'Afternoon Session:',
                sessionName:' Introduction to Deep Learning:',
                topics:[
                    {
                        title:'Understanding Deep Learning',
                        contents:[
                            'What is deep learning?',
                            'Why deep learning matters.',
                            'Applications of deep learning.'
                        ]
                    },
                    {
                        title:'Neural Networks Fundamentals',
                        contents:[
                            'Basic structure of artificial neurons.',
                            'Activation functions (e.g., ReLU, Sigmoid).',
                            'Building blocks of neural networks.'
                        ]
                    },
                    {
                        title:'Training Neural Networks',
                        contents:[
                            'Loss functions and optimization.',
                            'Backpropagation and gradient descent.',
                            'Model training and validation.'
                        ]
                    },
                    {
                        title:'Deep Learning Frameworks',
                        contents:[
                            'Overview of popular deep learning framework (PyTorch).'
                        ]
                    },
                    {
                        title:'Building a Simple Neural Network',
                        contents:[
                            'Participants create a basic neural network and train it on a sample dataset using a deep learning framework.'
                        ]
                    },
                    {
                        title:'Deep Learning Applications',
                        contents:[
                            'Real-world use cases in computer vision, natural language processing.'
                        ]
                    },
                    {
                        title:'Future Trends in Deep Learning',
                        contents:[
                            'Discuss emerging trends in deep learning, Transformer Networks and GANs.'
                        ]
                    },
                    
                ]
            }
        ]
    },{
        day:"Day 4: NLP for Biomedical",
        sessions:[
            {
                session:'Morning Session:',
                sessionName:'Introduction to NLP and Biomedical Text Data',
                topics:[
                    {
                        title:'Fundamentals of NLP',
                        contents:[
                            'What is NLP?',
                            'Key NLP tasks: Tokenization, Part-of-Speech Tagging, Named Entity Recognition, Sentiment Analysis, etc.',
                            'NLP libraries and tools (e.g., NLTK, spaCy).'
                        ]
                    },
                    {
                        title:'Biomedical Text Data',
                        contents:[
                            'Introduction to biomedical text and its complexity.',
                            'Sources of biomedical text data (research articles, clinical notes, etc.).',
                            'Challenges in processing biomedical text.'
                        ]
                    }
                ]
            },{
                session:'Afternoon Session:',
                sessionName:'Advanced NLP Techniques for Biomedical Text:',
                topics:[
                    {
                        title:'Word Embeddings and Pre-trained Models',
                        contents:[
                            'Word embeddings (e.g., Word2Vec, GloVe).',
                            'Introduction to pre-trained models (BERT, BioBERT).',
                            'Using pre-trained models for biomedical NLP.'
                        ]
                    },{
                        title:'Biomedical Named Entity Recognition (NER)',
                        contents:[
                                'Importance of NER in biomedical text.',
                                'Building a simple NER model for extracting entities like diseases and drugs.'
                        ]
                    },{
                        title:'Biomedical Text Classification',
                        contents:[
                            'Introduction to text classification in the biomedical domain.',
                            'Participants work on a practical NLP task using biomedical text data.'
                        ]
                    }
                ]
            }
        ]
    },{
        day:"Day 5: Computer Vision for Biomedical",
        sessions:[
            {
                session:'Morning Session:',
                sessionName:'Introduction to Computer Vision and Biomedical Imaging',
                topics:[
                    {
                        title:'Fundamentals of Computer Vision',
                        contents:[
                            'What is computer vision?',
                            'Key computer vision tasks: Image classification, object detection,     segmentation, etc.',
                            'Computer vision libraries (e.g., OpenCV).'
                        ]
                    },
                    {
                        title:'Biomedical Imaging',
                        contents:[
                            'Introduction to biomedical imaging modalities (X-ray, MRI, CT, microscopy, etc.).',
                            'Challenges and nuances of biomedical image analysis.'
                        ]
                    },{
                        title:'Basic Image Processing',
                        contents:[
                            'Participants perform basic image processing operations using sample biomedical images.'
                        ]
                    }
                ]
            },{
                session:'Afternoon Session:',
                sessionName:'Advanced Computer Vision Techniques in Biomedical',
                topics:[
                    {
                        title:'Convolutional Neural Networks (CNNs) for Medical Image Analysis',
                        contents:[
                            "Introduction to CNNs and their application in medical image analysis.",
                            "Case studies of CNNs in healthcare."
                        ]
                    },
                    {
                        title:'Medical Image Segmentation',
                        contents:[
                            'Importance of image segmentation in medical diagnosis.',
                            'Building a simple image segmentation model for identifying structures in medical images.'
                        ]
                    },{
                        title:'Transfer Learning with Pre-trained Models',
                        contents:[
                            'Leveraging pre-trained CNN models for biomedical tasks.',
                            'Fine-tuning a pre-trained model for a specific medical image dataset.'
                        ]
                    },{
                        title:'Building a Medical Image Classifier',
                        contents:[
                            'Participants work on a practical computer vision task using biomedical images.'
                        ]
                    }
                ]
            }
        ]
    }   
]
export {program1,program2}