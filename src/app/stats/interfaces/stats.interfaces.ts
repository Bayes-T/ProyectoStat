export interface Link  {
    name: string;
    url: string;
    icon: string;
  }

export interface Stat {
  id: string,
  name: string,
  institution: string,
  topics: string[],
  maininterest: string,
  bithplace: string,
  place: [number, number],
}