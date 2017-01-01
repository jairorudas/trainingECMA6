module.exports.onReadeble = (callback) => {
  process.stdin.on('readable', () => {
    let chunk = process.stdin.read();
    if (chunk != null) {
      callback(`${chunk.toString().replace(/\n/, '')}`);
    }
  })
}
