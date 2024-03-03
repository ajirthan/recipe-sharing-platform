import { Navbar, RecipeCard } from "./components";

const recipies = [
  {
    id: 1,
    title: "Recipe 1",
    instructions: "['Step 1','Step 2', 'Step 3']",
    timeToCook: "10 minutes",
    submittedBy: "User 1",
  },
  {
    id: 2,
    title: "Recipe 2",
    instructions: "['Step 1','Step 2', 'Step 3']",
    timeToCook: "10 minutes",
    submittedBy: "User 2",
  },
  {
    id: 3,
    title: "Recipe 3",
    instructions: "['Step 1','Step 2', 'Step 3']",
    timeToCook: "10 minutes",
    submittedBy: "User 3",
  },
  {
    id: 4,
    title: "Recipe 4",
    instructions: "['Step 1','Step 2', 'Step 3']",
    timeToCook: "10 minutes",
    submittedBy: "User 4",
  },
  {
    id: 5,
    title: "Recipe 5",
    instructions: "['Step 1','Step 2', 'Step 3']",
    timeToCook: "10 minutes",
    submittedBy: "User 5",
  },
  {
    id: 6,
    title: "Recipe 6",
    instructions: "['Step 1','Step 2', 'Step 3']",
    timeToCook: "10 minutes",
    submittedBy: "User 6",
  },
  {
    id: 7,
    title: "Recipe 7",
    instructions: "['Step 1','Step 2', 'Step 3']",
    timeToCook: "10 minutes",
    submittedBy: "User 7",
  },
  {
    id: 8,
    title: "Recipe 8",
    instructions: "['Step 1','Step 2', 'Step 3']",
    timeToCook: "10 minutes",
    submittedBy: "User 8",
  },
  {
    id: 9,
    title: "Recipe 9",
    instructions: "['Step 1','Step 2', 'Step 3']",
    timeToCook: "10 minutes",
    submittedBy: "User 9",
  },
  {
    id: 10,
    title: "Recipe 10",
    instructions: "['Step 1','Step 2', 'Step 3']",
    timeToCook: "10 minutes",
    submittedBy: "User 10",
  },
  {
    id: 11,
    title: "Recipe 11",
    instructions: "['Step 1','Step 2', 'Step 3']",
    timeToCook: "10 minutes",
    submittedBy: "User 11",
  },
  {
    id: 12,
    title: "Recipe 12",
    instructions: "['Step 1','Step 2', 'Step 3']",
    timeToCook: "10 minutes",
    submittedBy: "User 12",
  },
];

const App = () => (
  <div>
    <Navbar/>
    <h1 className="font-serif text-2xl text-center mt-24">Recently Added Recipies</h1>
    <div className="border flex items-center justify-center flex-wrap gap-12 max-w-2xl mx-auto pt-8">
      {recipies.map((recipe) => {
        return <RecipeCard title={recipe.title} key={recipe.id} submittedBy={`Added by: ${recipe.submittedBy}`} />;
      })}
    </div>
  </div>
);

export default App;
