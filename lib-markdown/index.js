import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while((temp = regex.exec(texto)) !== null){
    arrayResultados.push({[temp[1]]: temp[2]})

  }
  return arrayResultados;
}

function trataErro(erro){
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

export default async function pegaArquivo(caminhoDoArquivo){
  const encoding ='utf-8';
  try{
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(extraiLinks(texto))
  } catch(erro){
    trataErro(erro)
  }
  
}


// function pegaArquivo(caminhoDoArquivo){
//   const encoding = 'utf-8';
//   fs.promises
//   .readFile(caminhoDoArquivo, encoding)
//   .then((texto) => console.log(chalk.green(texto)))
//   .catch((err) => trataErro(err))
// }

// function pegaArquivo(caminhoDoArquivo){
//   const encoding = 'UTF-8';
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if(erro){
//       trataErro(erro);
//     }
//     console.log(chalk.yellow(texto));
//   })
// }

//pegaArquivo('./Alura/lib-markdown/arquivos/texto1.md'); 



