function log1(req: any, res: any, next: () => void) {
  console.log('logging...');
  next();
};

function log2(req: any, res: any, next: () => void) {
  console.log('authenticating...');
  next();
}

module.exports = {log1, log2};