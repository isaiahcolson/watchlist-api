// imports
const db = require('./models');
const data = require('./titleData.json');

// when seed file is ran it will delete all titles and add titles in the titleData.json file that are listed
db.Title.deleteMany({}, (err, deletedTitles) => {
    db.Title.create(data.titles, (err, seededTitles) => {
        if (err) console.log(err);

        console.log(data.titles.length, 'Titles created successfully');

        process.exit();
    });
});