import BasicTask1 from "../components/Task1Basic";
import MultipleStates from "../components/Task2MultipleStates";
import ConditionalWithElements from "../components/Task3CondWithElements";
import RenderingDiffComp from "../components/Task4RenderindDiffComp";
import DynamicLists from "../components/Task5DynamicLists";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <BasicTask1 />
      <MultipleStates />
      <ConditionalWithElements />
      <RenderingDiffComp />
      <DynamicLists />
    </div>
  );
};

export default MainPage;
