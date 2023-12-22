import Content from "./Content";
import Course from "./Course";
import Expertise from "./Expertise";
import Hero from "./Hero";
import Registration from "./Registration";

export default function LLM() {
  return (
    <div>
      <Hero />
      <Course />
      <Content />
      <Expertise />

      <Registration />
    </div>
  );
}
