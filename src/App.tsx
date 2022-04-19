import SearchInput from "./components/SearchInput";
import BaseLayout from "./layouts/BaseLayout";

const App: React.FC = () => {
  return (
    <BaseLayout>
      <section className="flex flex-col col-span-2">
        <SearchInput />
        <div className="col-span-2 row-span-4 bg-darken-gray">Video PLayer</div>
      </section>
      <aside className="col-span-3 bg-dark-gray md:col-span-1">
        <div className="flex flex-col">
          <div className="py-5 mx-auto">
            <div className="inline-flex items-center justify-center px-2 py-2 rounded-full gap-x-4 bg-light-gray">
              <span className="px-10 py-3 text-lg capitalize rounded-full bg-darken-gray">
                videos
              </span>
              <span className="px-10 py-3 text-lg capitalize rounded-full ">
                history
              </span>
            </div>
          </div>
          <div className="px-4">
            <ul className="space-y-5">
              {Array(5)
                .fill(1)
                .map((el) => {
                  return (
                    <li className="flex items-center gap-x-5">
                      <div className="flex flex-shrink-0">
                        <img
                          src="https://via.placeholder.com/200x125"
                          alt=""
                          width={200}
                          height={125}
                        />
                      </div>
                      <div>
                        <h3>Lorem ipsum dolor sit.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolor, error.
                        </p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </aside>
    </BaseLayout>
  );
};

export default App;
