import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPipe',
})
export class NumberPipe implements PipeTransform {
  transform(val) {
    if (val) {
      val = this.formatNumber(val, '');
    }
    return val;
  }

  formatNumber(numberInput, prefix) {
    const thousandSeparator = ',';
    const decimalSeparator = '.';
    const regex = new RegExp('[^' + decimalSeparator + '\\d]', 'g');
    const numberString = numberInput.replace(regex, '').toString();
    const split = numberString.split(decimalSeparator);
    const rest = split[0].length % 3;
    let result = split[0].substr(0, rest);
    const thousands = split[0].substr(rest).match(/\d{3}/g);

    if (thousands) {
      const separator = rest ? thousandSeparator : '';
      result += separator + thousands.join(thousandSeparator);
    }
    result =
      split[1] !== undefined ? result + decimalSeparator + split[1] : result;
    return prefix === undefined ? result : result ? prefix + result : '';
  }
}
