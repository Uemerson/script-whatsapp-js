(main = document.querySelector('#main')),
  (textarea = main.querySelector(`div[contenteditable="true"]`));

const totalMention = 1;
const delay = 500;

for (let i = 0; i <= totalMention; i++) {
  // replace with the number you want to mention
  const number = '550000000000';
  // replace with the name you want to mention (it's not mandatory)
  const name = 'Name';
  // replace with the text you want
  const text = '';

  textarea.innerHTML = `${text}<span class='copyable-text selectable-text' data-mention-jid='${number}@c.us' data-original-name='@${name}' data-plain-text='@${name}' data-app-text-template='​${number}@c.us​'><span class='at-symbol'>@</span><span dir='ltr'>${name}</span></span></span>`;

  textarea.dispatchEvent(new InputEvent('input', { bubbles: true }));

  (
    main.querySelector(`[data-testid="send"]`) ||
    main.querySelector(`[data-icon="send"]`)
  ).click();

  await new Promise((resolve) => setTimeout(resolve, delay));
}
