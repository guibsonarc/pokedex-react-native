export const getPokemonImageUrl = (id: number): string => {
  if (id < 10)
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`;
  if (id < 100)
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`;
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
};

export const getPokemonId = (id: number): string => {
  if (id < 10) return `#00${id}`;
  if (id < 100) return `#0${id}`;
  return `#${id}`;
};

export const toFirstUpperCase = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
