export interface IOptionQuestion {
  id: number;
  option: string;
  isCorrectOption: boolean;
}

export interface IQuestion {
  id: number;
  title: string;
  points: number;
  options: IOptionQuestion[];
}
