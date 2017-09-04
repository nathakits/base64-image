const fs = require('fs');
const path = require('path');
const dir = './dist';

function readFileSync(filepath, encoding) {
  return fs.readFileSync(path.join(__dirname, filepath), { 
    encoding: encoding || 'base64' 
  });
}

function test() {
  let filename = 'demo.jpg';
  let demo = readFileSync('img/demo.jpg');
  let extname = path.extname(filename).substr(1);
  extname = extname || 'png';

  let encode = 'data:image/' + `${extname}` + ';base64,' + demo;
  
  console.log(encode);

  fs.mkdir(dir, function(err) {
    if (err) {
        if (err.code == 'EEXIST'); // ignore the error if the folder already exists
        else cb(err); // something else went wrong
    }
  });

  fs.writeFileSync(path.join(dir, path.basename('demo.txt')), encode);
};

test();
