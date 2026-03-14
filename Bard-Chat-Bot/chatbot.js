// Simple FAQ chatbot script

// Add or edit entries in this array to customize the bot's knowledge base.
// Each entry may include a 'keywords' array for more flexible matching.
const faqData = [
  {
    q: 'What products does Bard HVAC offer?',
    a: 'Bard HVAC provides commercial heating and cooling equipment, including rooftop, wall-mount, and split systems designed for a broad range of applications.',
    keywords: ['products', 'offer', 'what']
  },
  {
    q: 'Where is Bard HVAC located?',
    a: 'Bard HVAC is headquartered in Bryan, Ohio, USA, and operates global manufacturing and distribution facilities.',
    keywords: ['located', 'headquarter', 'where']
  },
  {
    q: 'How can I contact Bard HVAC?',
    a: 'You can visit https://www.bardhvac.com/contact for phone numbers, email addresses, and a contact form.',
    keywords: ['contact', 'phone', 'email']
  },
  {
    q: 'Are Bard products made in America?',
    a: 'Yes, Bard emphasizes American manufacturing and offers BAA-compliant HVAC products built in the USA.',
    keywords: ['made', 'america', 'ba', 'american']
  },
  {
    q: 'What markets does Bard HVAC serve?',
    a: 'Bard serves education, data centers, telecom, industrial, agriculture, and other light commercial and specialized markets.',
    keywords: ['markets', 'serve', 'industries']
  }
];

function createChatUi(container) {
  container.classList.add('bot-container');

  // Header with close button
  const header = document.createElement('div');
  header.className = 'bot-header';
  const title = document.createElement('h3');
  title.textContent = 'Bard HVAC FAQ';
  header.appendChild(title);
  const closeBtn = document.createElement('button');
  closeBtn.className = 'bot-close';
  closeBtn.textContent = '×';
  closeBtn.addEventListener('click', () => {
    document.body.classList.remove('chatbot-open');
  });
  header.appendChild(closeBtn);
  container.appendChild(header);

  // Suggestions
  const suggestions = document.createElement('div');
  suggestions.className = 'bot-suggestions';
  faqData.forEach(entry => {
    const btn = document.createElement('button');
    btn.className = 'bot-suggestion';
    btn.textContent = entry.q;
    btn.addEventListener('click', () => {
      appendMessage('user', entry.q);
      setTimeout(() => {
        appendMessage('bot', entry.a);
      }, 300);
    });
    suggestions.appendChild(btn);
  });
  container.appendChild(suggestions);

  const messages = document.createElement('div');
  messages.className = 'bot-messages';
  container.appendChild(messages);

  const form = document.createElement('form');
  form.className = 'bot-form';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Ask a question...';
  input.required = true;
  form.appendChild(input);

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Send';
  form.appendChild(button);

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    appendMessage('user', question);
    setTimeout(() => {
      const answer = findAnswer(question);
      appendMessage('bot', answer);
    }, 300);
    input.value = '';
  });

  container.appendChild(form);

  function appendMessage(who, text) {
    const msg = document.createElement('div');
    msg.className = 'bot-message ' + who;
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function findAnswer(question) {
    const q = question.toLowerCase();
    for (const entry of faqData) {
      if (entry.keywords) {
        for (const kw of entry.keywords) {
          if (q.includes(kw.toLowerCase())) {
            return entry.a;
          }
        }
      }
      if (q.includes(entry.q.toLowerCase())) {
        return entry.a;
      }
    }
    return "Sorry, I don't know the answer to that. Please contact Bard HVAC for more information.";
  }
}

// initialize on load
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('faq-chatbot');
  const toggle = document.getElementById('chatbot-toggle');
  if (container && toggle) {
    createChatUi(container);
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('chatbot-open');
    });
  }
});