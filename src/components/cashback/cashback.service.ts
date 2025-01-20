import { Calculation, CalculationPayload } from './cashback.type';

export interface CashbackService {
  calculate(data: CalculationPayload): Promise<Calculation>;
}

const exec = (method: string, url: string, data?: Record<string, any>): Promise<any> => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(method, url, true);
    req.setRequestHeader('X-Ajax', 'true');
    req.setRequestHeader('Content-Type', 'application/json');

    req.onload = function () {
      if (req.status >= 200 && req.status < 300) {
        resolve(JSON.parse(req.responseText));
      } else {
        reject(req.status);
      }
    };

    req.send(data ? JSON.stringify(data) : null);
  });
};

export const cashbackService: CashbackService = {
  async calculate(data: CalculationPayload): Promise<Calculation> {
    return await exec('POST', `${window.dooca.base_url}/action/promotions/calculate`, data);
  },
};
