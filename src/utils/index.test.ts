import { getFormattedDiffFromNow, getDomainFromURL } from '.';

describe('utils/getFormattedDiffFromNow', () => {
  jest
    .spyOn(Date, 'now')
    .mockImplementation(() => new Date('1995-12-17T03:34:00').getTime());

  it('should return elapsed time from now', () => {
    expect(getFormattedDiffFromNow('1995-12-17T03:24:00')).toEqual(
      '10 minutes ago'
    );
    expect(getFormattedDiffFromNow('1995-12-17T02:34:00')).toEqual(
      '1 hours ago'
    );
    expect(getFormattedDiffFromNow('1993-12-17T00:04:00')).toEqual(
      '2 years ago'
    );
  });
});

describe('utils/getDomainFromURL', () => {
  it('should return domain from URL', () => {
    expect(getDomainFromURL('https://www.mydomain.com/foo/bar/biz')).toEqual(
      'www.mydomain.com'
    );
  });
});
