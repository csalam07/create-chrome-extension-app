# Create Browser Extension CLI

[![NPM Version](https://img.shields.io/badge/NPM-0.0.1-blue.svg)](https://www.npmjs.com/package/create-chrome-extension-app)
[![License](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/license/mit/)

Create stunning Chrome extensions effortlessly with the Create Browser Extension CLI. This powerful command-line interface tool enables you to generate a feature-rich starter template for your Chrome extension projects, helping you kickstart your development process.

## Features

-   Generate a comprehensive starter template for Chrome extensions
-   Supports the latest Chrome extension APIs, including manifest v3
-   Pre-configured folder structure for easy organization and scalability
-   Includes essential files such as manifest.json, background scripts, and popup pages
-   User-friendly and intuitive command-line interface

## Installation

Please ensure that you have [Node.js](https://nodejs.org/) installed on your machine.

```shell
npm install -g create-chrome-extension-app
```

## Usage

Once the package is globally installed, execute the `create-chrome-extension-app` command in your terminal to generate a new Chrome extension starter template.

```shell
create-chrome-extension-app [options] <directory>
# or
create-extension <directory>
```

### Options

-   `-v, --version`: Show the installed version
-   `-h, --help`: Show usage information

### Example

To generate a new Chrome extension starter template in a directory named "my-extension":

```shell
create-chrome-extension-app my-extension
```

This will create a new directory called "my-extension" with the generated starter template inside.

## Folder Structure

The generated starter template adheres to a recommended folder structure, facilitating efficient code organization for your Chrome extension:

```
my-extension/
  ├── manifest.json
  ├── background/
  │   └── background.js
  ├── popup/
  │   ├── popup.html
  │   └── popup.js
  └── content/
      └── content.js
```

-   `manifest.json`: The primary configuration file for your Chrome extension
-   `background/`: Folder for background scripts
-   `popup/`: Folder for the extension's popup pages
-   `content/`: Folder for content scripts

## Development

To begin developing your Chrome extension, navigate to the project directory and follow these steps:

1. Customize the `manifest.json` file to configure your extension's settings and permissions.
2. Implement your extension's functionality in the respective script files (`background.js`, `popup.js`, `content.js`).
3. Utilize the Chrome Developer Tools for testing and debugging your extension during development.
4. Refer to the Chrome Extension Developer Documentation for comprehensive guidance on building and deploying your extension.

## Contributing

Contributions are highly appreciated! If you encounter any issues or have suggestions for enhancements, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/csalam07/create-chrome-extension-app).

## License

This project is licensed under the [MIT License](LICENSE). You are welcome to utilize and modify the code according to your requirements.

---

Effortlessly kickstart your Chrome extension development journey with the Create Browser Extension CLI. Simplify the initial setup process and focus on building remarkable extensions. Get started now and let your creativity soar!
