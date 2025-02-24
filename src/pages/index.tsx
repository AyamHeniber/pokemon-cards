import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "@/components/PokemonCard";
import Head from "next/head";

export async function getServerSideProps() {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const pokemons = response.data.results;

  return {
    props: {
      pokemons,
    },
  };
}

const Home = ({ pokemons }: { pokemons: { name: string }[] }) => {
  const [search, setSearch] = useState("");
  const [currentData, setCurrentData] = useState(pokemons);

  useEffect(() => {
    const handleSearch = () => {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
      setCurrentData(filtered);
    };

    handleSearch();
  }, [search, pokemons]);

  return (
     
    <div className="bg-gradient-to-r from-[#FED992] via-[#64BC5E] to-[#9163A9] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="md:text-3xl text-2xl xl:text-4xl font-bold text-center text-gray-800 mb-12">
          Pokemons
        </h1>

        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search Pokemon..."
            className="w-full text-black max-w-lg p-3 bg-blue-100 rounded-2xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-800 transition-all duration-300 transform"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
          {currentData.length > 0 ? (
            currentData.map((pokemon, index) => (
              <PokemonCard key={index} name={pokemon.name} id={index + 1} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-800 text-xl font-semibold">
              No Pokemon found for this search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
