import Accordion from "./Accordion";
import Accordion2 from "./Accordion2";
import { accordionData } from "../../datas/bootstrap";

const Bootstrap = () => {
  return (
    <>
      <Accordion data={accordionData} />
      <Accordion2 data={accordionData} />
    </>
  );
};

export default Bootstrap;
