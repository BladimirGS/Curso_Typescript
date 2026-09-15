import { Pokemon } from '../interfaces';

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

  if (!resp.ok) throw new Error('No encontrado');

  const data: Pokemon = await resp.json();
  
  return data;
}