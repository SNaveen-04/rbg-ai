import { policy } from "./About/Utilities";
import { cancellation } from "./About/Utilities";

const Policy = () => {
  return (
    <div className="bg-white text-Green">
      <div className="text-center font-semibold text-4xl tracking-wider">
        <p>Privacy Policy</p>
      </div>
      <div>
        <div className=" mx-auto px-1 md:mx-32">
          {policy.map((policy) => {
            return (
              <div key={policy.heading} className="p-2 text-[15px] md:text-lg">
                <h1 className=" font-normal text-3xl py-8">{policy.heading}</h1>
                <p>{policy.content}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center font-semibold text-4xl tracking-wider">
        <p>Cancellation Policy</p>
      </div>
      <div>
        <div className=" mx-auto px-1 md:mx-32">
          {cancellation.map((cancel) => {
            return (
              <div key={cancel.heading} className="p-2 text-[15px] md:text-lg">
                <h1 className=" font-normal text-3xl py-8">{cancel.heading}</h1>
                <p >{cancel.content}</p>
              </div>
            );
          })}
          <div className="p-2 text-[15px] md:text-lg">
            <h1 className=" font-normal text-3xl py-8">5. Contact Us</h1>
            <p>
              To request a cancellation, transfer, or substitution, contact Joy
              Jordan in writing via mail, email, or fax at the address below:
            </p>
            <p>Parameshwaran BN</p>
            <p>RBG.AI</p>
            <p>SREC Incubation Foundation</p>
            <a
              href="mailto: training@rbg.ai"
              className="md:text-lg hover:underline"
            >
              training@rbg.ai
            </a>
            <p>Phone: +91 733 910 3001 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
