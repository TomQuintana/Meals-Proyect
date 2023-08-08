import fs from 'fs';
import path from 'path';

const directory = path.join('buy', 'buy.json')

//const archivo = '../buy/buy.json';

const listForBuy = ( data: any) => {
  console.log(data);
  fs.writeFileSync(directory, JSON.stringify(data))

  //fs.writeFileSync( archivo, JSON.stringify(data) );
};

export {
  listForBuy
};
