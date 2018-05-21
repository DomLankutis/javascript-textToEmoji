let emojiBet = {};

/**
 * Use this function in the preload to load all the sprites without causing any issues
 */
function loadKeySprites() {
    let charactersToLoad = "abcdefghijklmnopqrstuvwxyz1234567890";
    for (let i = 0; i < charactersToLoad.length; i++) {
        let char = charactersToLoad.charAt(i);
        emojiBet[char] = loadImage("./keys/"+char+".png");
    }
}

/**
 * Converts normal text to emoji's
 * 
 * @param {String} text         The text that is to be converted
 * @param {Number} startX       The starting top left x coordinate
 * @param {Number} startY       The starting top left y coordinate
 * @param {Number} font         Font size of the text [default is 50]
 */
function printEmojiText(text, startX, startY, font = 50) {
    for (let i = 0; i < text.length; i++){
        if (text.charAt(i) != " " && text.charAt(i) != "_"){
            image(emojiBet[text.charAt(i).toLowerCase()], startX + (i * font), startY, font, font);
        }
    }
}