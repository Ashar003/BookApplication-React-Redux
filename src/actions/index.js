export function selectBook(book){
    // selectBook is an ActionCreator, it needs to return an action
    //Action: an object with a type property
    //Actions always has 'type' passed in, however; payload isn't mandatory
    return {
        type: 'BOOK_SELECTED', 
        payload: book
    }
}