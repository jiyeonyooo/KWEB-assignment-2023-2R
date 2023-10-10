const fs = require('fs');
const util = require('util');
const path = require('path');

const readDir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
const directory = './test';

const searching = async (directory) => {
    try {
        const data = await readDir(directory);
        data.forEach(async (now) => {
            const now_path = await path.join(directory, now);
            let now_stat = await stat(now_path);

            if (now_stat.isDirectory()) {
                searching(now_path);
            } else if (path.extname(now_path) === '.js') console.log(now_path);
        })
    } catch (err) {
        console.error(err);
    }
}

searching(directory);