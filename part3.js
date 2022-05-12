const fs = require('fs');
const [command, title, content] = process.argv.slice(2);



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




function view(title) {
    fs.readFile('notes.json', (error, data) => {
      if (error) return console.error(error.message);
      const notes = JSON.parse(data);
      const note = notes.find(note => note.title === title);
      if (!note) {
        console.log('Заметка не найдена');
        return;
      } else {
        console.log(note.content);
      }
    });
  }