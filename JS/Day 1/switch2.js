let strategies = new Map([
  ['A' , travel],
  ['B' , Shopping],
  ['C' , Tv],
  ['D' , Library],
])

let action = () =>{
  let strat = strategies.get(ranking);
  strat();
}