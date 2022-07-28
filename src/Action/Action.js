let idIncrement  = 0;

export const ADDTODO = (item) => ({
    type : 'ADD_TODO',
    id : idIncrement++,
    task: item,
    completed: false
});

export const UPDATETODO = (id) => ({
    type : 'UPDATE_TODO',
    id : id
});
