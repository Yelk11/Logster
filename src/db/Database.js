
import Realm from "realm";

// Declare Schema
class LogBookSchema extends Realm.Object {}
BookSchema.schema = {
    name: 'LogBook',
    properties: {
        title: 'string',
        logs:  'int',
        edition: 'int?'
    }
};

// Create realm
let realm = new Realm({schema: [LogBookSchema], schemaVersion: 1});

let getAllBooks = () => {
    return realm.objects('Book');
}

// Add our two new functions
let addBook = (_title, _pages, _edition = null) => {
    realm.write(() => {
        const book = realm.create('Book', {
            title: _title,
            pages:  _pages,
            edition: _edition
        });
    });
}

let deleteAllBooks = () => {
    realm.write(() => {
        realm.delete(getAllBooks());
    })
}

let updateAllBookEditions = () => {
    realm.write(() => {
        let books = getAllBooks()
        books.map((item, index) => {
            if (item.edition === null){
                item.edition = 1
            }
        })
    });
};
export {
    getAllBooks,
    addBook,
    deleteAllBooks,
    updateAllBookEditions
}
// Export the realm
export default realm;