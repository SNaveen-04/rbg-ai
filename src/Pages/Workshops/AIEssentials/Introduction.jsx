const intros = [
    'We at RBG.AI are upskilling and reskilling workforces to adhere to the new age AI projects. Focused on delivering high performance with optimal cost & time. As digital transformation becomes the core of business strategies spanning all industry segments and markets, Workforces should prepare to adapt to the change of AI-driven digital transformation.',
    'We bring efficient training through the Learn-Experiment-Share-Seek (LESS) platform. Delivering AI-centric Design-Develop-Debug-Deploy-Delivery (D5Practice) to bridge the gap between AI Research and Business Requirements. Let us help your workforce to attain multidisciplinary expertise in handling Text-Voice-Vision-Numeric Analytics to reduce the uncertain nature of AI Solutions.',
    'AI is new electricity that digitally transforms many industries. Irrespective of the domain, now AI is everywhere. Making AI for Everyone Possible initiatives assist you to take the definitive step in the AI world by helping you to visually understand the AI technologies. Along the way, you will also get domain-specific knowledge from experts from industry and academia.',
    'Essential AI Fundamentals with Visual Interpretations is a foundational program that will help you understand and visualize the pillars of leading-edge AI technology and build applications by consuming cloud APIs.'
]

const Introduction = () => {
  return (
    <ul className="m-0 p-8 text-xl max-md:text-base text-Red bg-slate-100">
        {intros.map((intro,index)=>{
            return <li className="p-1 m-1" key={index}>{intro}</li>
        })}
    </ul>
  )
}

export default Introduction