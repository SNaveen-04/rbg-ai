const Overview = [
  {
    title:'Day 1 : Introduction to AI',
    topics:[
      '(T) Why AI?',
'(T) AI vs Machine Learning vs Deep Learning',
'(T) AI at Industries',
'(T) Text-Vision-Voice-Data Analytics',
'(P) Generic AI Tasks',
' - Optical Character Recognition',
' - Text Classification',
' - Information Extraction',
' - Table Extraction',
' - Vision Segmentation',
' - Voice Transcriber',
' - Voice Diarization',
'(T) Introduction to Machine Learning',
'(P) Data Representation - Text, Vision and Voice',
'(P) Features & Its Representation',
'(P) Data/Features as Matrix',
'(P) Labels/Classes',
    ]
  },

  {
    title:'Day 2 : AI Foundations with Python',
    topics:['(TP) LA: Scalars, Vectors, Matrices, Tensors',
'(TP) LA: Vector Spaces, Matrix Multiplication, Special Matrices',
'(TP) LA: Norms, Vector Spans, Matrix Decomposition',
'(TP) PT: Random Variables, Conditional Probability, Probability Distribution, The Sigmoid, The Softmax',
'(TP) NC: Overflow, Underflow, Gradient Optimization',
'(T) Cloud AI',
'(P) Consuming Cloud AI',
'(P) Git Introduction : Pull, Push, Add, Commit, Fork',
'(T) Bio-Medical Use Cases',
'(D) Bio-Medical Use Case Selection & Team Formulation',]
  },

  {
    title:'Day 3 : Machine Learning Basics in Python',
topics:['(TP) The Task, The Performance, The Data / Corpus, The Features, The   Experience',
  '(P) Supervised Learning - Linear, Logistic, SVM',
'(P) Unsupervised Learning - K Means, Affinity Propagation',
'(P) Hyper Parameters',
'(P) Model Monitoring',
  ]
  },
  {
    title:'Day 4 : Building Biomedical Applications',
topics:['(P) Data Collation',
  '(P) API Consumption & Orchestration',
  '(P) Performance Validation',
  '(P) Application as Service',
  '(P) Application Exposure',
  '(P) Versioning & Documenting'
  ]
  },
  {
    title:'Day 5 : Presentation & Evaluation',
topics:['Prerequisites :',
'1.Python Basics',
'2.Numpy Basics',
'3.Matplotlib Basics'
  ]
  }
]
const CourseOverview = () => {
  return (
    <div className="text-Red m-8 p-4">
        <h1 className="text-xl md:text-4xl underline text-center">COURSE OVERVIEW</h1>
        <p className="text-2xl my-2 text-center">T - Theory,P - Practical,TP - Theory with Practical,D - Discussion</p>
        <h1 className="text-xl md:text-2xl text-center">DURATION :<span className="inline px-1 text-xl"> 5 days</span></h1>
      <ul className="grid md:grid-cols-2">
        {Overview.map((Topics,index)=>{
          return (<li className='my-5 text-slate-100 bg-Red p-8 m-2 rounded' key={index}>
              <h3 className=" m-3 text-center text-slate-200 text-xl md:text-2xl">
              {Topics.title}</h3>
              <ul className="text-base md:text-lg">
                {
                  Topics.topics.map((topic,key)=>{
                  return (
                    <li key={key}>{topic}</li>
                  )
                })}
              </ul>
            </li>)
        })}
      </ul>
    </div>
  )
}

export default CourseOverview 