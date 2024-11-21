# Google-Chrome-Reading-Extension

__Author__: Simisola Agboola  

__Version__: 1.0  


## Overview   

This is a Chrome extension designed to enhance reading comprehension and speed by emboldening the first letter of each word on a webpage. This helps readers focus on important text elements, improving readability and reducing strain during long reading sessions.

## Features  

* Focus Mode: With the click of a button, all paragraphs on the active tab will have the first letter of each word emboldened.
* Background Script: A simple background script that logs a message upon installation.
* Permissions: The extension requests access to tabs, active windows, and scripting functionality to modify webpage content.

## How It Works  

When the extension is installed, it adds a button labeled enable focus mode. Once clicked, it uses Chrome's scripting API to execute the emboldenFirstLetters function on the active tab.
The emboldenFirstLetters function processes all paragraph elements on the page and modifies the text, making the first letter of each word bold.

## Installation  

1. Download or clone this repository.
2. Open Chrome and navigate to chrome://extensions/.
3. Enable Developer Mode.
4. Click Load unpacked and select the folder where the extension files are located.
5. The extension will now appear in your Chrome toolbar.

## Manifest  

This extension is built using Chrome Manifest Version 3. Below is an outline of its structure:  

__manifest_version__: 3  

__name__: ReadingExtension  

__version__: 1.0  

__author__: Simisola Agboola  

__description__: Emboldens the first few letters of every word on a webpage for easier and faster reading.  

__background__: Defines the background script (background.js).  

__action__: Loads the popup with a single button.  

__permissions__: Requests permissions for storage, active tabs, scripting, and declarative content.  


## Usage  

* Navigate to any webpage.
* Click on the extension icon and then click the enable focus mode button.
* The first letter of each word in all paragraphs on the webpage will be emboldened.

## Files  

* __index.html__: Contains the button to enable focus mode.
* __embolden.js__: The script that executes the embolden function.
* __background.js__: Background script for logging installation messages.
* __manifest.json__: Chrome extension configuration file.
