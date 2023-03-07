import {
    initialStage,
    stageOne,
    stageTwo,
    stageThree,
    stageFour,
    stageFive,
    finalStage
  } from './stages/index.js';
  
  import { storage } from './storage.js';
  
  export const stages = [
    {
      descricao: 'Welcome',
      stage: initialStage,
    },
     {
      descricao: 'Nome',
      stage: stageOne,
    },
   
    {
      descricao: 'Menu',
      stage: stageTwo,
    },
     
    {
      descricao: 'Service',
      stage: stageThree,
    },
    
    {
      descricao: 'Detalhes',
      stage: stageFour,
    },
    {
      descricao: 'Urgencia',
      stage: stageFive,
    },
    
    {
      descricao: 'Assistent',
      stage: finalStage,
    },  
  ];
  
  export function getStage({ from }) {
    if (storage[from]) {
      return storage[from].stage;
    }
    storage[from] = {
      stage: 0,
      type: 1
    };
  
    return storage[from].stage;
  }
  
  export function getType({ from }) {
   
      return storage[from].type;
    
   

  }

 