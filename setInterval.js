var exec = require('child_process').exec
var path = require('path')
var running = false

var run = function(what, where) {
  if (running === true) return
  running = true

  // by default, just run grunt
  what = what || 'grunt phantomas'
  // by default, run on grunt in the current working directory
  where = path.resolve(where || path.join(process.cwd(), 'Gruntfile.js'))

  what += ' --gruntfile=' + where
  exec(what, { cwd: path.dirname(where) }, function(err, stdout, stderr) {
    if (err || stderr) { /* log the error somewhere */ }
    /* log the stdout if needed*/
    console.log(stdout)
    running = false
  })
}

setInterval(function() {
  run(/* set what to run, where to run */)
  /* or even multiple gruntfiles and node projects */
}, 1 * 60 * 60 * 12000) // once a hour
