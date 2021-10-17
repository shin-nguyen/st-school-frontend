export const findIndex = (list, id) => {
    let result = -1;
    list.forEach ((item, index) => {
        if(item.id === id){
            result = index;
        }
    });
    return result;
}