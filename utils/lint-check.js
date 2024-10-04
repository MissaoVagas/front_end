const { exec } = require('child_process');

exec('eslint src/**/*.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Foram encontrados erros de linting:\n${stderr}`);
    process.exit(1);
  } else {
    console.log('Nenhum erro de linting encontrado!');
  }
});