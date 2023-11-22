import * as fs from 'fs';
import blog from '../blog';

export default async function handler(req, res) {
  let blogdata = await fs.promises.readdir("blogdata");
  let allData = [];
  let files;

  for (let ind = 0; ind < blogdata.length; ind++){
    const item = blogdata[ind];
    files = await fs.promises.readFile(('blogdata/'+item), 'utf-8');
    allData.push(files);
    console.log(files)
  }
  res.status(200).json(allData);
}