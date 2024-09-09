import { useEffect, useState } from "react";

const Receipe = () => {
  const [loading, setLoading] = useState(true);
  const [receipes, setReceipes] = useState([]);

  useEffect(() => {
    // Fetching the recipes from the API
    const fetchReceipe = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setReceipes(data.recipes);
        setLoading(false);
      } catch (error) {
        console.error("Error occurred:", error);
        setLoading(false);
      }
    };

    fetchReceipe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="receipe" className="min-h-screen bg-red-100 rounded-lg">
        <div className="grid grid-row-3 gap-4 p-4">
          {receipes.map((receipe) => (
            <div key={receipe.id}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="lg:flex items-center mb-4">
                  <img
className="w-full h-full rounded-md mr-2 lg:w-52 lg:h-52 lg:rounded-lg lg:mr-4"
src={receipe.image}
                    alt={receipe.name}
                  />
                  <div>
                    <h1 className="font-semibold text-2xl bebas-regular">
                      {receipe.name}
                    </h1>

                    <div className="flex flex-wrap gap-2">
                      <p className="bg-gray-200 rounded px-2 py-1 font-semibold">
                        Ingredients :
                      </p>
                      {receipe.ingredients.map((ingredient, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 rounded px-2 py-1"
                        >
                          {ingredient}
                        </span>
                      ))}
                      <hr />
                      
                    </div>
                    <p className="mx-auto font-semibold">Directions:</p>
                      {receipe.instructions.map((instruction,index) => (
                        <div key={index}>
                          <p>
                          {"->"} {instruction}

                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Receipe;
