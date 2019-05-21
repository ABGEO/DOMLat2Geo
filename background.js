/**
 * Add item to context menu.
 */
chrome.contextMenus.create({
    id: "convert-selected-to-geo",
    title: "Convert: %s To GEO",
    contexts: ["selection"]
});

/**
 * Add listener to menu item click.
 */
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    let selectedText = info.selectionText;

    alert(selectedText);
});
