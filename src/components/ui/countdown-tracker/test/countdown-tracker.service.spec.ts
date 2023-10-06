import { CountDownTrackerService } from '../countdown-tracker.service';

describe('countdown-tracker service', () => {
  let service: CountDownTrackerService;

  beforeEach(() => {
    service = new CountDownTrackerService();
  });

  describe('Function calculateTimeDifference', () => {
    it("should return a error when the inputs isn't a valid date", () => {
      expect(() => service.calculateTimeDifference(new Date(), new Date('invalid'))).toThrow(
        new Error('Invalid date'),
      );

      console.log('service', service);
      expect(() => service.calculateTimeDifference(new Date(), new Date('invalid'))).toThrow();
    });
    it('should return a error when target date is ', () => {});
    it('should return a error when target date is before the start data', () => {});
    it('should return the difference between dates correctly', () => {});
  });
});
