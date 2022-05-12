const fs = require('fs');
const [command, title, content] = process.argv.slice(2);

function remove(title) {
    fs.readFile('notes.json', (error, data) => {
      if (error) return console.error(error.message);
      let notes = JSON.parse(data);
      notes = notes.filter(note => note.title !== title);
      const json = JSON.stringify(notes);
      fs.writeFile('notes.json', json, (error) => {
        if (error) return console.error(error.message);
        console.log('Заметка удалена');
      });
    });
  }

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


