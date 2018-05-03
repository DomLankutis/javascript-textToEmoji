# Javascript-textToEmoji

A small function that will convert normal string to emoji text.
**This does required p5.js**

## How To Use

>**[Optional]** change the sprites to your preferred sprites / emoji. Ensure the image files are still named appropriately. (the sprite that represent 'a' is still named 'a.png')

>In the html file ensure to load the script file **before your main file**. For example:
```html
<script src="./keyParse.js"></script>
<script src="./script.js"></script>
```

>Must have all the alphabet sprites in the folder **keys**.

>To use the ```printEmojiText()``` function we must first load the sprites by calling the ```loadKeySprites()``` function in the p5.js ```function preload(){}```

>After which we can call the ```printEmojiText()``` function in the ```function draw(){}``` of the p5.js file

## Example

An example use case of this would be:
```javascript
function preload() {
    loadKeySprites();
}

function setup() {
    createCanvas(1280, 720);
}

function draw() {
    printEmojiText("wanted text", width / 2, height / 2, 24);
}
```
 the output of this would be:
 ![](example.png)
