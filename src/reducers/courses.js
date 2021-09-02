let initalState = [
    {   "id":1,
        "name":"JAVA full course",
        "description":" 745 blallalalalalaallalalalalalalala 7685",
        "price":100000,
        "image":"",  
    },
    {   "id":2,
        "name":"C# full course",
        "description":"ccccccccc",
        "price":300000,
        "image":"c",  
    },
];

const courses = (state = initalState, action) => {
    switch(action.type){
        default: return[...state]
    }
}

export default courses;
