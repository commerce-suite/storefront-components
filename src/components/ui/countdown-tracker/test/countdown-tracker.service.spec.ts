import { CountdownTrackerService } from '../countdown-tracker.service';

describe('countdown-tracker service', () => {
  let service: CountdownTrackerService;

  afterEach(() => {
    service = null;
  });

  it('should return a error when try initiate the service with invalid dates', () => {
    const invalidDate = new Date('invalid date');
    const validDate = new Date('2022-12-31T23:59:59.999Z');

    expect(() => {
      service = new CountdownTrackerService(invalidDate, validDate);
    }).toThrow(new Error('Invalid date'));

    expect(() => {
      service = new CountdownTrackerService(validDate, invalidDate);
    }).toThrow(new Error('Invalid date'));
  });

  describe('Function calculateMillisecondsDifference', () => {
    it('should return the correctly difference between dates in milliseconds', () => {
      const startDate = new Date('2023-10-05T00:00:00Z');
      const targetDate = new Date('2023-11-05T00:00:00Z');
      const expectedResult = 2678400000;

      service = new CountdownTrackerService(startDate, targetDate);

      const result = service.getMillisecondsDifference();
      expect(result).toBe(expectedResult);
    });
  });

  describe('Function calculateTimeDifference', () => {
    it('should return the difference between dates correctly', () => {
      const startDate = new Date('2023-10-05T00:00:00Z');
      const targetDate = new Date('2023-10-06T01:01:01Z');
      const expectedResult = { daysDiff: 1, hoursDiff: 1, minutesDiff: 1, secondsDiff: 1 };

      service = new CountdownTrackerService(startDate, targetDate);

      const result = service.getTimeDifference();
      expect(result.daysDiff).toBe(expectedResult.daysDiff);
      expect(result.hoursDiff).toBe(expectedResult.hoursDiff);
      expect(result.minutesDiff).toBe(expectedResult.minutesDiff);
      expect(result.secondsDiff).toBe(expectedResult.secondsDiff);
    });
  });

  describe('Function isCountdownFinished', () => {
    it('should return true when Countdown was finished', () => {
      const startDate = new Date('2023-11-05T00:00:00Z');
      const targetDate = new Date('2023-10-06T01:01:01Z');
      service = new CountdownTrackerService(startDate, targetDate);

      expect(service.isCountdownFinished()).toBe(true);
    });

    it("should return false when Countdown wasn't finished", () => {
      const startDate = new Date('2023-10-05T00:00:00Z');
      const targetDate = new Date('2023-11-06T01:01:01Z');
      service = new CountdownTrackerService(startDate, targetDate);

      expect(service.isCountdownFinished()).toBe(false);
    });
  });
});
