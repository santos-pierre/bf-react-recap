import SearchInput from "./components/SearchInput";
import BaseLayout from "./layouts/BaseLayout";

const App: React.FC = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col col-span-2">
        <SearchInput />
        <div className="col-span-2 bg-darken-gray">Video PLayer</div>
      </div>
      <div className="col-span-1 bg-dark-gray">Search Result</div>
    </BaseLayout>
  );
};

export default App;
