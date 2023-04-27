# Weather CLI App

This is a simple command-line interface (CLI) application that fetches weather data using the OpenWeather API. You can save your city and API token to get weather forecasts easily.

## Features

- Save your API token
- Save your preferred city
- Get the current weather forecast for the saved city

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-cli.git
```

2. Install the required dependencies:

```bash
npm install
```

3. Add your OpenWeather API key:

```bash
node weather.js -t [YOUR_API_KEY]
```

## Usage

To use the Weather CLI App, run the following command:

```bash
node weather.js
```

## Commands

| Command      | Description                                         |
| ------------ | --------------------------------------------------- |
| -h           | Show the help menu                                  |
| -s [city]    | Save your preferred city                            |
| -t [token]   | Save your OpenWeather API token                     |
| (no command) | Get the current weather forecast for the saved city |

Examples:

```bash
node weather.js -s "New York"
node weather.js -t your_api_key_here
node weather.js
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT
