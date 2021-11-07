const ytdl = require('ytdl-core');
const fs = require('fs');

export default async function (req, res) {

  const q = req.query.q;
  const name = Date.now()

  console.log(q);

  return ytdl(q).pipe(fs.createWriteStream(`${name}.mp4`));

}
