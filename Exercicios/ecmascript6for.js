const alunos = ['jefferson', 'bia', 'angelina', 'vitoria', 'karil', 'edna', 'greyce', 'jacó' ]

for(aluno of alunos){
    if(aluno.length >= 5){
        console.log(aluno);
    }
}

for(indice in alunos){
    console.log(indice,"-", alunos[indice]);
}