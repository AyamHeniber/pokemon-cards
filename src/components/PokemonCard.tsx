import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PokemonCardProps {
  name: string;
  id: number;
}
const PokemonCard = ({ name, id }: PokemonCardProps) => {
    return (
      <Link
        href={`/pokemon/${id}`}
        className="group bg-gradient-to-r text-white hover:text-gray-800 from-[green] to-[#bcbc11]  rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-300 hover:to-yellow-300"
      >
        <div className="relative mb-4 ">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
            className="w-32 h-32 mx-auto group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0  opacity-0 group-hover:opacity-60 rounded-xl transition-all"></div>
        </div>
        <h3 className="text-xl font-semibold text-center capitalize mt-4">
          {name}
        </h3>
      </Link>
    );
  }

PokemonCard.displayName = "PokemonCard";

export default PokemonCard;
