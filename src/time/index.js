// @flow
import moment from 'moment';
import { pluralizeWithCount } from '../pluralize';

export const formatHours = (hours: number): string =>
  pluralizeWithCount(hours, 'hour');

export const formatMinutes = (minutes: number): string =>
  pluralizeWithCount(minutes, 'minute');

export const formatTime = (hours: number): string => {
  const minutes = hours * 60;
  const isHourInteger = Number.isInteger(hours);

  const integerInHours = Math.floor(hours);
  const decimalInMinutes = Math.round((hours % 1) * 60);

  if (isHourInteger) {
    return formatHours(hours);
  } else if (minutes > 60) {
    return `${formatHours(integerInHours)} and ${formatMinutes(
      decimalInMinutes,
    )}`;
  }

  return formatMinutes(minutes);
};

export const formatTimeWithPeriod = (time: string, period: string) =>
  `${time} ${period}`;

export const combinedDateAndTime = (date: moment, time: moment) =>
  moment(date)
    .hour(time.get('hour'))
    .minute(time.get('minute'))
    .format();
