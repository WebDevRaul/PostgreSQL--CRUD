const exec = require('child_process').exec;

const script = exec('sh configure_db.sh', (error,stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
  if(error !== null) return console.log(error)
})