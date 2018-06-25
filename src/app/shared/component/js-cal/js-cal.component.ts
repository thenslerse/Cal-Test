import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-cal',
  templateUrl: './js-cal.component.html',
  styleUrls: ['./js-cal.component.scss']
})
export class JsCalComponent implements OnInit {

  constructor() {}

  date: Date = new Date();
  dayNow = 1;
  monthNow = 1;
  yearNow = 1970;
  startDay = 0;
  monthName: String = 'January';
  dayArray: Array<Number> = [];

  months = [
    {month: 'January', days: 31},
    {month: 'February', days: 28},
    {month: 'March', days: 31},
    {month: 'April', days: 30},
    {month: 'May', days: 31},
    {month: 'June', days: 30},
    {month: 'July', days: 31},
    {month: 'August', days: 31},
    {month: 'September', days: 30},
    {month: 'October', days: 31},
    {month: 'November', days: 30},
    {month: 'December', days: 31},
  ];

  daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  ngOnInit() {
    // Get date to show in calendar
    this.getDate();

    // Set custom date to show in calendar
    // this.getDate(29, 2, 2020);
  }

  /*
    In this function we are getting the day, month and year values
    You can also set a custom date for testing. This function is being called in the ngOnInit().
   */
  private getDate(day = this.date.getDate(), month = this.date.getMonth() + 1, year = this.date.getFullYear()) {
    this.dayNow = day;
    this.monthNow = month - 1;
    this.yearNow = year;
    this.generateCal();
  }

  /*
    This is where we are going to call our functions to generate the data for the calendar view.
   */
  public generateCal() {
    this.getStartDay();
    this.leapYearCheck();
    this.buildDayArray();
    this.monthName = this.readableMonth();
  }

  /*
   Checks to see if the current year is a leap year
   If so, it replaces the February day value in the months array to 29
  */
  private leapYearCheck() {
    const leapBool = (this.yearNow % 100 === 0) ? (this.yearNow % 400 === 0) : (this.yearNow % 4 === 0);
    if (leapBool) {
      this.months[1].days = 29;
    }
  }

  /*
    Here we are getting day on which the month starts.
   */
  private getStartDay() {
    this.startDay = new Date(`${this.yearNow}-${this.monthNow + 1}-01`).getDay();
  }

  /*
    Get the current month as a readable string.
   */
  private readableMonth() {
    return this.months[this.monthNow].month;
  }

  /*
    Here we are building the array of days to output.
   */
  private buildDayArray() {
    this.dayArray = [];
    for (let i = 0; i < this.startDay; i++) {
      this.dayArray.push(null);
    }
    for (let i = 1; i <= this.months[this.monthNow].days; i++) {
      this.dayArray.push(i);
    }
  }

}
