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

export interface IAnswerQuestion {
  id: number;
  idQuestion: number;
  idOptionQuestion: number;
}
