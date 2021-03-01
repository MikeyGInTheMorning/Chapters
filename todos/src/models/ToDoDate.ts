export default class ToDoDate {
    _id?: string;
    Day: number;
    Month: number;
    Year: number;
    TimeStamp: Date;
  
    constructor(_id = undefined, Day = 0,  Month = 0, Year = 0, TimeStamp = undefined) {
      this._id = _id;
      this.Day = Day;
      this.Month = Month;
      this.Year = Year;
      this.TimeStamp = new Date();
    }
  }
  