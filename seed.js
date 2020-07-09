const db = require('./models');
const data = require('./titleData.json');

db.Title.deleteMany({}, (err, deletedTitles) => {
    db.Title.create(data.titles, (err, seededTitles) => {
        if (err) console.log(err);

        console.log(data.titles.length, 'Titles created successfully');

        process.exit();
    });
});