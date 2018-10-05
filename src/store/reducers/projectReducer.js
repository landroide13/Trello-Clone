const initstate = {
  projects: [
    {id: '1', title: 'Traino App', content: 'App tracks you trainning and impruvments at GYM'},
    {id: '2', title: 'Stock App', content: 'App tracks your stocks protfolio'},
    {id: '3', title: 'LenPet', content: 'App share your dog or look after anybodys dog.'},
  ]
}


const projectReducer = (state = initstate, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('Created Project', action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('Create Project Error', action.err)
      return state
    default:
      return state  
  }
}


export default projectReducer;
