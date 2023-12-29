import Content from "./Content";
import Course from "./Course";
import Expertise from "./Expertise";
import Hero from "./Hero";
import Registration from "./Registration";
import Llm from '../../../assests/Programs/llm.svg'

export default function LLM() {
  return (
    <div>
    <header className=' px-6 py-3 bg-Primary max-w-screen max-h-1/4'>
            <img src={Llm} className='h-48'/>
    </header>
      <Hero />
      <Course />
      <Content />
      <Expertise />

      <Registration />
    </div>
  );
}
