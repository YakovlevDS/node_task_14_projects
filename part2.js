const fs = require('fs');
const [command, title, content] = process.argv.slice(2);


  function list() {
    fs.readFile('notes.json', (error, data) => {
      if (error) return console.error(error.message);
      const notes = JSON.parse(data);
      notes.forEach((note, index) => console.log(`${index + 1} ${note.title}`))
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



