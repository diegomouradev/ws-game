export class Constants {
  // Const declaration
  NUMBER_OF_WORDS: number = 6;
  WORD_SIZE: number = 5;
  GRID_SIZE: number = 20;
   // hard coded, but should be changed for an API in the future.
  WORD_SAMPLE = ['Ditto','Arbok','Eevee','Entei','Gloom','Diego'];


    constructor(values: Object = {}) {
      Object.assign(this, values);
    }

}
