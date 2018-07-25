const {pipe} = require('../essential/pipe.js');
const {head} = require('./head.js');
const {MayBe} = require('../structures/MayBe.js');

const safeHead = pipe(
    head,
    MayBe.of,
);

module.exports = {
    safeHead,
};
