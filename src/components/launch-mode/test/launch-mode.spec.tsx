const getAppContentMock = jest.fn();
const validatePasswordMock = jest.fn();

jest.mock('./../launch-mode.service', () => {
  return {
    LaunchModeService: jest.fn().mockImplementation(() => ({
      getAppContent: getAppContentMock,
      validatePassword: validatePasswordMock,
    })),
  };
});

import { newSpecPage } from '@stencil/core/testing';
import { LaunchMode } from '../launch-mode';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import { launchModeContent } from '../mocks/launchModeContent';

describe('launch-mode', () => {
  beforeEach(() => {
    getAppContentMock.mockReset();
    validatePasswordMock.mockReset();
    getAppContentMock.mockResolvedValue(launchModeContent);

    global.FormData = class FormData {
      data = {};
      append(name, value) {
        this.data[name] = value;
      }
    } as any;
  });

  it('renders loading initially and then renders content after load', async () => {
    const page = await newSpecPage({
      components: [LaunchMode],
      html: `<launch-mode></launch-mode>`,
    });

    await page.waitForChanges();

    const title = page.root.querySelector('.h1');
    const passwordInput = page.root.querySelector('input[name="password"]');
    const submitButton = page.root.querySelector('button[type="submit"]');

    expect(title.textContent).toBe(launchModeContent.title);
    expect(passwordInput).toBeTruthy();
    expect(passwordInput.getAttribute('type')).toBe('password');
    expect(submitButton).toBeTruthy();
    expect(submitButton.hasAttribute('disabled')).toBe(true);
  });

  it('enables submit button when password is provided', async () => {
    const page = await newSpecPage({
      components: [LaunchMode],
      html: `<launch-mode></launch-mode>`,
    });

    await page.waitForChanges();

    const input = page.root.querySelector('input');
    input.value = '1234';
    input.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    const submit = page.root.querySelector('button');
    expect(submit.hasAttribute('disabled')).toBe(false);
  });

  it('navigates to base_url on successful validation', async () => {
    validatePasswordMock.mockResolvedValue({ ok: true });

    const page = await newSpecPage({
      components: [LaunchMode],
      html: `<launch-mode></launch-mode>`,
    });

    await page.waitForChanges();

    page.win.dooca = { base_url: 'https://example.com' } as any;

    const mockLocation = { href: '' };
    Object.defineProperty(page.win, 'location', {
      value: mockLocation,
      writable: true,
    });

    const input = page.root.querySelector('input');
    input.value = 'letmein';
    input.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    const form = page.root.querySelector('form');
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await page.waitForChanges();

    expect(mockLocation.href).toBe('https://example.com');
  });

  it('shows error message when validation fails with known code', async () => {
    const error = { code: 'invalid_password' };
    validatePasswordMock.mockRejectedValue(new Error(JSON.stringify(error)));

    const page = await newSpecPage({
      components: [LaunchMode],
      html: `<launch-mode></launch-mode>`,
    });

    await page.waitForChanges();

    const input = page.root.querySelector('input');
    input.value = 'wrong';
    input.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    const form = page.root.querySelector('form');
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await page.waitForChanges();

    const message = page.root.querySelector('.launch-mode-content-message-error span');
    expect(message.textContent).toBe(ERROR_MESSAGES.invalid_password);
  });
});
