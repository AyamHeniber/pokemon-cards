import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params?.id}`);
  return { props: { pokemon: response.data } };
};

const PokemonDetail = ({ pokemon }: { pokemon: any }) => {
  return (
    <div className="bg-gradient-to-r from-[#FED992] via-[#64BC5E] to-[#9163A9] py-6 xl:py-0 px-4 flex min-h-screen items-center">
      <div className="max-w-5xl mx-auto bg-gray-900 text-white rounded-xl shadow-xl p-6 transform transition-all duration-300">
        <div className="flex justify-center items-center flex-col md:flex-row space-y-8 md:space-y-0">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex justify-center items-center mb-6 md:mb-0">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="rounded-full shadow-xl border-4 border-yellow-400 p-2 transform transition-all duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#64BC5E] to-[#9163A9] opacity-50 rounded-full animate-pulse"></div>
          </div>

          <div className="w-full text-center md:text-left md:ml-8">
            <h1 className="text-3xl font-bold capitalize mb-4 text-yellow-300">{pokemon.name}</h1>
            <div className="space-y-4 mb-6">
              <p className="text-lg font-semibold text-gray-100">
                <span className="text-lg font-bold text-yellow-300">Types:</span>{" "}
                {pokemon.types.map((t: any) => t.type.name).join(", ")}
              </p>
              <p className="text-lg font-semibold text-gray-100">
                <span className="text-lg font-bold text-yellow-300">Abilities:</span>{" "}
                {pokemon.abilities.map((a: any) => a.ability.name).join(", ")}
              </p>
              <p className="text-lg font-semibold text-gray-100">
                <span className="text-lg font-bold text-yellow-300">Base Experience:</span>{" "}
                {pokemon.base_experience}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Stats</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {pokemon.stats.map((stat: any) => (
                  <div
                    key={stat.stat.name}
                    className="bg-gradient-to-r from-[#FED992] to-[#9163A9] p-3 rounded-lg transform transition-all duration-300 hover:scale-105"
                  >
                    <p className="text-sm text-gray-800">{stat.stat.name}</p>
                    <p className="font-semibold text-lg text-gray-900">{stat.base_stat}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Moves</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {pokemon.moves.slice(0, 8).map((move: any) => (
                  <span
                    key={move.move.name}
                    className="bg-gradient-to-r from-[#64BC5E] to-[#9163A9] text-white p-2 rounded-full text-sm font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    {move.move.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="bg-yellow-500 text-black px-6 py-3 rounded-full shadow-xl hover:bg-green-600 hover:text-white transform transition-all duration-300 hover:scale-105">
            Back to Pokemon List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
