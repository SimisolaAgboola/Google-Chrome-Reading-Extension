let focusmode = document.getElementById("focusmode");

focusmode.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: emboldenFirstLetters,
    });
});

function emboldenFirstLetters() {
    const paragraphs = document.querySelectorAll('p'); // Select all paragraphs
    
    paragraphs.forEach(paragraph => {
        const words = paragraph.textContent.split(' '); // Split paragraph into words
        const newContent = words.map(word => {
            if (word.length > 0) {
                return '<b>' + word[0] + '</b>' + word.slice(1); // Embolden first letter of each word
            } else {
                return word;
            }
        }).join(' ');
        
        paragraph.innerHTML = newContent; // Replace paragraph content with emboldened version
    });
}
