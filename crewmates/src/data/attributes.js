export const COLORS = [
  { value: 'red', label: 'Red', hex: '#C51111' },
  { value: 'blue', label: 'Blue', hex: '#132ED1' },
  { value: 'green', label: 'Green', hex: '#117F2D' },
  { value: 'pink', label: 'Pink', hex: '#ED54BA' },
  { value: 'orange', label: 'Orange', hex: '#EF7D0D' },
  { value: 'yellow', label: 'Yellow', hex: '#F5F557' },
  { value: 'black', label: 'Black', hex: '#3A3A3A' },
  { value: 'white', label: 'White', hex: '#D6E0F0' },
  { value: 'purple', label: 'Purple', hex: '#6B2FBB' },
  { value: 'brown', label: 'Brown', hex: '#71491E' },
  { value: 'cyan', label: 'Cyan', hex: '#38FEDC' },
  { value: 'lime', label: 'Lime', hex: '#50EF39' },
]

export const HATS = [
  { value: 'none', label: 'None', emoji: null },
  { value: 'party-hat', label: 'Party Hat', emoji: '🎉' },
  { value: 'halo', label: 'Halo', emoji: '😇' },
  { value: 'crown', label: 'Crown', emoji: '👑' },
  { value: 'flower', label: 'Flower', emoji: '🌸' },
  { value: 'chef-hat', label: 'Chef Hat', emoji: '👨‍🍳' },
  { value: 'cowboy-hat', label: 'Cowboy Hat', emoji: '🤠' },
  { value: 'bowler-hat', label: 'Bowler Hat', emoji: '🎩' },
]

export const PETS = [
  { value: 'none', label: 'None', emoji: null },
  { value: 'mini-crewmate', label: 'Mini Crewmate', emoji: '🧑‍🚀' },
  { value: 'egg', label: 'Egg', emoji: '🥚' },
  { value: 'cat', label: 'Cat', emoji: '🐱' },
  { value: 'dog', label: 'Dog', emoji: '🐶' },
  { value: 'robot', label: 'Robot', emoji: '🤖' },
  { value: 'ghost', label: 'Ghost', emoji: '👻' },
]

export const findByValue = (options, value) =>
  options.find((option) => option.value === value) ?? options[0]
