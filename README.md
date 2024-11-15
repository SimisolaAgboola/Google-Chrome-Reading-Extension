# Google-Chrome-Reading-Extension

Author: Simisola Agboola  

Version: 1.0  


Overview   

ReadingExtension is a Chrome extension designed to enhance reading comprehension and speed by emboldening the first letter of each word on a webpage. This helps readers focus on important text elements, improving readability and reducing strain during long reading sessions.

Features  

Focus Mode: With the click of a button, all paragraphs on the active tab will have the first letter of each word emboldened.
Background Script: A simple background script that logs a message upon installation.
Permissions: The extension requests access to tabs, active windows, and scripting functionality to modify webpage content.

How It Works  

When the extension is installed, it adds a button labeled enable focus mode.
Once clicked, it uses Chrome's scripting API to execute the emboldenFirstLetters function on the active tab.
The emboldenFirstLetters function processes all paragraphs (<p> elements) on the page and modifies the text, making the first letter of each word bold.

Installation  

1. Download or clone this repository.
2. Open Chrome and navigate to chrome://extensions/.
3. Enable Developer Mode.
4. Click Load unpacked and select the folder where the extension files are located.
5. The extension will now appear in your Chrome toolbar.

Manifest  

This extension is built using Chrome Manifest Version 3. Below is an outline of its structure:
manifest_version: 3
name: ReadingExtension
version: 1.0
author: Simisola Agboola
description: Emboldens the first few letters of every word on a webpage for easier and faster reading.
background: Defines the background script (background.js).
action: Loads the popup with a single button.
permissions: Requests permissions for storage, active tabs, scripting, and declarative content.

Usage  

Navigate to any webpage.
Click on the extension icon and then click the enable focus mode button.
The first letter of each word in all paragraphs on the webpage will be emboldened.

Files  

index.html: Contains the button to enable focus mode.
embolden.js: The script that executes the embolden function.
background.js: Background script for logging installation messages.
manifest.json: Chrome extension configuration file.
