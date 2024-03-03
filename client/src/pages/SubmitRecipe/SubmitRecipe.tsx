import Logo from "../../assets/icon-black.svg";
import { Navbar } from "../../components";

const SubmitRecipe = () => {
  return (
    <>
    <Navbar/>
      <section className="bg-gray-50 dark:bg-gray-900 mt-8">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {/* <div className="border w-full h-12 flex text-white items-center justify-end">AA</div> */}
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img src={Logo} className="w-8 h-8 mr-2 mt-2 fill-white" />
            Submit Recipe
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="ingredients"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Ingredients
                  </label>
                  <textarea
                    id="ingredients"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Add ingredients..."
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="instructions"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Instructions to cook
                  </label>
                  <textarea
                    id="instructions"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Add instructions to cook.."
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="timerequired"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Time Required
                  </label>
                  <input
                    type="number"
                    name="timerequired"
                    id="confirm-password"
                    placeholder="Add required time in minutes..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit Recipe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubmitRecipe;
