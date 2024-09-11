import { formatDate } from "@/utils/format";

describe('formatDate', () => {
  it('Should format date', () => {
    const date = new Date('2015-03-25T00:00:00Z');
    expect(formatDate(date)).toBe('25 Mar 2015');
  });
});
