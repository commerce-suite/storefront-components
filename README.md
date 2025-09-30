[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# Storefront Components

A collection of Web Components built with StencilJS for e-commerce storefronts. This library provides reusable, framework-agnostic components for online stores including product showcases, live shopping, countdowns, and more.

## 📋 Table of Contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Using Components](#using-components)
- [Available Components](#available-components)
- [Testing](#testing)
- [Project Structure](#project-structure)

## 🎯 About

This project is a library of Web Components designed for e-commerce platforms. Built with StencilJS, these components are framework-agnostic and can be used with any modern JavaScript framework (React, Vue, Angular) or vanilla HTML.

The components are designed to integrate with the Bagy API and provide features such as:

- Product showcases and carousels
- Live shopping experiences
- Countdown timers for launches
- Buy together recommendations
- Cashback displays
- And more...

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Bagy** store token

## 🚀 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd storefront-components
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## ⚙️ Configuration

### Setting up the Mock Configuration

The application uses a mock configuration file to connect to the Bagy API. This file is located at `src/dooca.mock.js`.

**Important**: You need to configure this file with your store's token before running the application.

#### Configuration Steps:

1. Open `src/dooca.mock.js`

2. Update the `window.shop_ctx` object with your store's credentials:

```javascript
window.shop_ctx = {
  api_url: 'API_URL_HERE', // API endpoint
  token: 'TOKEN_HERE', // Your store token
  base_path: '/',
  organization: 'dooca',
  mock: {},
};
```

3. You can also customize the `dooca` object settings (theme colors, fonts, store settings, etc.) in the same file to match your store's configuration.

## 🏃 Running the Application

### Development Mode

To start the development server with hot reload:

```bash
npm start
# or
yarn start
```

This will:

- Start a local development server
- Watch for file changes and auto-reload
- Open your browser at `http://localhost:3333`
- Generate component documentation

### Viewing Components

Once the development server is running, you can view and test components by editing the `src/index.html` file.

## 🎨 Using Components

### Adding Components to index.html

To visualize and test components, add them to `src/index.html`:

```html
<!doctype html>
<html dir="ltr" lang="en">
  <head>
    <script type="module" src="./dooca.mock.js"></script>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
    />
    <title>Storefront Components</title>

    <script type="module" src="/build/front-components.esm.js"></script>
    <script nomodule src="/build/front-components.js"></script>
    <link rel="stylesheet" href="/build/front-components.css" />
  </head>
  <body>
    <!-- Buy Together Component -->
    <buy-together product-id="123456" variation-id="789"></buy-together>

    <!-- Launch Countdown -->
    <launch-countdown></launch-countdown>

    <!-- Live Shop -->
    <live-shop hash-room="your-room-hash"></live-shop>

    <!-- Cashback Display -->
    <cashback product-id="123456"></cashback>

    <!-- Custom Card -->
    <custom-card card-title="Special Offer" card-description="Check out our latest promotions!">
      <img src="https://example.com/banner.jpg" alt="Promotion" />
    </custom-card>
  </body>
</html>
```

### Component Examples

#### 1. Buy Together Component

```html
<buy-together product-id="2915659" variation-id="123"> </buy-together>
```

#### 2. Launch Mode Component

```html
<launch-mode></launch-mode>
```

#### 3. Live Shop Component

```html
<live-shop hash-room="858e81a8-715c-49f6-b6ed-87d5322bca9c"></live-shop>
```

#### 4. Mini Player Component

```html
<mini-player video-id="i5n9gcO28h8" auto-play></mini-player>
```

#### 5. Showcase Component

```html
<showcase-related buy-together-product-ids="[2915659, 2915660]"></showcase-related>
```

### Listening to Component Events

You can listen to custom events emitted by components:

```html
<script>
  (async () => {
    await customElements.whenDefined('launch-countdown');
    const element = document.getElementById('launch-countdown');

    element.addEventListener('countdownFinished', event => {
      console.log('Countdown finished!', event);
    });
  })();
</script>
```

## 📚 Available Components

| Component                 | Description                          | Key Props                        |
| ------------------------- | ------------------------------------ | -------------------------------- |
| `buy-together`            | Product bundle recommendations       | `product-id`, `variation-id`     |
| `buy-together-cart-modal` | Shopping cart modal for bundles      | -                                |
| `cashback`                | Displays cashback information        | `product-id`                     |
| `launch-countdown`        | Countdown timer for product launches | -                                |
| `launch-mode`             | Full launch mode experience          | -                                |
| `live-shop`               | Live shopping experience             | `hash-room`                      |
| `maintenance-mode`        | Maintenance mode display             | -                                |
| `showcase`                | Product showcase carousel            | -                                |
| `showcase-related`        | Related products showcase            | `buy-together-product-ids`       |
| `custom-card`             | Customizable card component          | `card-title`, `card-description` |
| `mini-player`             | Video mini player                    | `video-id`, `auto-play`          |
| `google-recaptcha`        | reCAPTCHA integration                | -                                |

### UI Components

The library also includes various UI components in the `ui/` directory:

- `color-selector` - Color selection component
- `front-countdown` - Countdown timer UI
- `front-icon` - Icon component
- `front-image` - Image component with lazy loading
- `front-select` - Custom select dropdown
- `highlight-card` - Highlighted product card
- `info-modal` - Information modal
- `product-card` - Product display card
- `product-price` - Price display component
- `tab-selector` - Tab navigation
- `variation-selector` - Product variation selector

For detailed documentation on each component, check the individual README files in the `src/components/` directory.

## 🧪 Testing

### Run all tests:

```bash
npm test
# or
yarn test
```

### Run tests in watch mode:

```bash
npm run test.watch
# or
yarn test.watch
```

### Generate coverage report:

```bash
npm run test:coverage
# or
yarn test:coverage
```

### Open coverage report:

```bash
npm run coverage:open
# or
yarn coverage:open
```

## 📁 Project Structure

```
storefront-components/
├── src/
│   ├── components/          # Web Components
│   │   ├── buy-together/
│   │   ├── cashback/
│   │   ├── launch-countdown/
│   │   ├── live-shop/
│   │   ├── ui/             # UI Components
│   │   └── ...
│   ├── assets/             # Static assets (icons, images)
│   ├── services/           # Shared services
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── dooca.mock.js       # Mock configuration (CONFIGURE THIS!)
│   └── index.html          # Development testing page
├── dist/                   # Built components (generated)
├── www/                    # Development build output
├── stencil.config.ts       # Stencil configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🔧 Environment Variables

You can use environment variables for additional configuration. Create a `.env` file in the root directory:

```env
WEBSOCKET_URL=wss://your-websocket-url
GOOGLE_RECAPTCHA_SITE_KEY=your-recaptcha-key
CDN_URL=https://your-cdn-url
```
