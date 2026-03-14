# Bard HVAC FAQ Chatbot

This project contains a simple, embeddable FAQ chatbot you can add to any website. The bot is built using plain HTML, CSS, and JavaScript and is designed to answer basic questions about Bard HVAC based on a predefined list of frequently asked questions.

## Features

- Lightweight and dependency-free
- Easy to integrate into existing websites
- Customizable question/answer list
- Simple keyword-based matching

## Files

- `index.html` &ndash; example page demonstrating the chatbot
- `chatbot.js` &ndash; core chatbot logic and FAQ data
- `chatbot.css` &ndash; basic styling for the chat widget

## Installation

1. **Copy the files.** Place `chatbot.js` and `chatbot.css` in a location that can be served by your website (e.g. the same folder as your HTML pages or a `js/` and `css/` directory).

2. **Add the HTML snippet to your page.** Wherever you want the chatbot widget to appear, insert the following markup:

```html
<!-- FAQ chatbot container -->
<div id="faq-chatbot"></div>

<!-- include styles and script -->
<link rel="stylesheet" href="path/to/chatbot.css">
<script src="path/to/chatbot.js"></script>
```

Replace `path/to/` with the correct relative path on your site.

3. **Customize the Q&A list (optional).**
Open `chatbot.js` and look for the `faqData` array near the top. Add, remove or edit entries to match the questions you want answered.

```js
const faqData = [
  { q: 'What products does Bard HVAC offer?',
    a: 'Bard HVAC provides commercial heating and cooling equipment including rooftop, wall‑mount and split systems for a variety of industries.' },
  // more entries...
];
```

4. **Publish your site.** Once the files are in place and the snippet is added to your page, the chatbot should appear automatically when the page loads.

## Example Usage

The `index.html` file in this repository is a complete example that you can open in your browser to see the chatbot in action. You can copy its contents directly to your own site or use it as a reference.

## FAQ Matching

The chatbot uses simple case‑insensitive keyword matching: when you submit a question, the script looks for any of the keywords defined in each FAQ entry. If it finds a match, it returns the associated answer; otherwise it suggests contacting Bard HVAC for more information.

To improve matching, you can:

- Add synonyms or alternate wording to the `keywords` array for each FAQ entry
- Expand the `faqData` list with new questions

## Support

This chatbot is provided as-is with no warranty. For official information about Bard HVAC products or support, visit [https://www.bardhvac.com](https://www.bardhvac.com) or contact their customer service.

---

*Created Mar 7, 2026*