import BasicTask1 from "../components/Task1Basic";
import MultipleStates from "../components/Task2MultipleStates";
import ConditionalWithElements from "../components/Task3CondWithElements";
import RenderingDiffComp from "../components/Task4RenderindDiffComp";
import DynamicLists from "../components/Task5DynamicLists";
import Notification from "../components/Task6StylingBasedOnConditions";
import ControlledForm from "../components/Task7ControlledForm";
import ModalWindow from "../components/Task8ModalWindow";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <BasicTask1 />
      <MultipleStates />
      <ConditionalWithElements />
      <RenderingDiffComp />
      <DynamicLists />
      <Notification />
      <ControlledForm />
      <ModalWindow />
    </div>
  );
};

export default MainPage;
