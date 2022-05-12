const fs = require('fs');
const [command, title, content] = process.argv.slice(2);

function init() {
    fs.writeFile('notes.json', '[]', (error) => {
      if (error) return console.error(error.message);
    });
  }
function create(title, content) {
    fs.access('notes.json', fs.constants.F_OK, (err) => {
        if (err) init();
    fs.readFile('notes.json', (error, data) => {
      if (error) return console.error(error.message);
      const notes = JSON.parse(data);
      notes.push({ title, content });
      const json = JSON.stringify(notes);
  
      fs.writeFile('notes.json', json, (error) => {
        if (error) return console.error(error.message);
        console.log('Заметка создана');
      });
    });
  })}

  switch (command) {
    case 'list':
        list();
        break;
    case 'view':
        view(title);
        break;
    case 'create':
        create(title, content);
        break;
    case 'remove':
        remove(title);
        break;
    default: console.log('Неизвестная команда');
 }