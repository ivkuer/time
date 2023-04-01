export class Time {
  date;
  constructor(date) {
    if (date === undefined) {
      this.date = new Date();
    } else if (typeof date === 'string') {
      this.date = new Date(date);
    } else {
      this.date = date
    }
  }
  parts(attrs) {
    if (attrs === undefined) {
      return {
        year: this.date.getFullYear(),
        month: this.date.getMonth() + 1,
        day: this.date.getDate(),
        weekday: this.date.getDay(),
        hour: this.date.getHours(),
        minute: this.date.getMinutes(),
        second: this.date.getSeconds(),
        ms: this.date.getMilliseconds()
      }
    } else {
      const { year, month, day, hour, minute, second, ms } = attrs
      year !== undefined && this.date.setFullYear(year)
      console.log(year);
      month !== undefined && this.date.setMonth(month - 1)
      day !== undefined && this.date.setDate(day)
      hour !== undefined && this.date.setHours(hour)
      minute !== undefined && this.date.setMinutes(minute)
      second !== undefined && this.date.setSeconds(second)
      ms !== undefined && this.date.setMilliseconds(ms)
    }
  }
  format(pattern = 'YYYY-MM-DD') {
    // 目前支持的格式有 YYYY MM DD HH mm ss SSS
    const year = this.date.getFullYear()
    const month = this.date.getMonth() + 1
    const day = this.date.getDate()
    const hour = this.date.getHours()
    const minute = this.date.getMinutes()
    const second = this.date.getSeconds()
    const msecond = this.date.getMilliseconds()
    return pattern.replace(/YYYY/g, year.toString())
      .replace(/MM/, month.toString().padStart(2, '0'))
      .replace(/DD/, day.toString().padStart(2, '0'))
      .replace(/HH/, hour.toString().padStart(2, '0'))
      .replace(/mm/, minute.toString().padStart(2, '0'))
      .replace(/ss/, second.toString().padStart(2, '0'))
      .replace(/SSS/, msecond.toString().padStart(3, '0'))
  }
  firstDayOfMonth() {
    return new Time(new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0));
  }
  firstDayOfYear() {
    return new Time(new Date(this.date.getFullYear(), 0, 1, 0, 0, 0));
  }
  lastDayOfMonth() {
    return new Time(new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1, 0, 0, 0));
  }
  lastDayOfYear() {
    return new Time(new Date(this.date.getFullYear() + 1, 0, 1, 0, 0, 0));
  }
  getRaw() {
    return this.date
  }
  getTimestamp() {
    return this.date.getTime()
  }
  add(amount, unit) {
    // return new Time but not change this.date
    let date = new Date(this.date.getTime());
    switch (unit) {
      case 'year':
        const currentDate = date.getDate()
        date.setDate(1)
        date.setFullYear(date.getFullYear() + amount)
        const targetDate = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          0,
          0,
          0,
          0,
        ).getDate()
        date.setDate(Math.min(currentDate, targetDate))
        break;
      case 'month':
        const d = date.getDate()
        date.setDate(1)
        date.setMonth(date.getMonth() + amount);
        const d2 = new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0).getDate()
        date.setDate(Math.min(d, d2))
        break;
      case 'day':
        date.setDate(date.getDate() + amount);
        break;
      case 'hour':
        date.setHours(date.getHours() + amount);
        break;
      case 'minute':
        date.setMinutes(date.getMinutes() + amount);
        break;
      case 'second':
        date.setSeconds(date.getSeconds() + amount);
        break;
      case 'millisecond':
        date.setMilliseconds(date.getMilliseconds() + amount);
        break;
      default:
        throw new Error('Time.add: unknown unit');
    }
    return new Time(date)
  }
  isLeapYear() {
    const year = this.date.getFullYear()
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true
        } else {
          return false
        }
      } else {
        return true
      }
    } else {
      return false
    }
  }
}