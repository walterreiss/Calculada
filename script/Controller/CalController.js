class CalcController {
  constructor(){
    this._displayCalc = "0";
    this.currentDate; 
  }

  initialize(){
    
  }

  get displayCalc(){
    return this._displayCalc;
  }
  set displayCalc(valor){
    this._displayCalc = valor;
  }
  get currentDate(){
    return this._currentDate;
  }
  set currentDate(valor){
    this._currentDate = valor;
  }
}