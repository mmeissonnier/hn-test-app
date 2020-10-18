import differenceInMinutes from 'date-fns/differenceInMinutes';

const HOUR = 60;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

export const getFormattedDiffFromNow = (date: string): string => {
  let formattedDiff = 'less than 1 min ago';
  const diffInMinutes = differenceInMinutes(Date.now(), new Date(date));
  const map: Record<string, number> = {
    years: diffInMinutes / YEAR,
    months: diffInMinutes / MONTH,
    days: diffInMinutes / DAY,
    hours: diffInMinutes / HOUR,
    minutes: diffInMinutes,
  };

  Object.keys(map).some((key) => {
    if (Math.floor(map[key]) > 0) {
      formattedDiff = `${Math.floor(map[key])} ${key} ago`;
      return true;
    }
    return false;
  });
  return formattedDiff;
};

export const getDomainFromURL = (url = ''): string => {
  if (!url) {
    return 'No domain';
  }

  const match = url.match(/(?!:\/\/)+(([\w-]+\.{1})([\w-]\.?)+)/i);
  if (match) {
    return match[0];
  }
  return url;
};
