import { createActionGroup, props } from "@ngrx/store";
import { Book } from "../book-list/books.model";

/**
 *  Le fichier d'actions qui sert a décrire chaque actions des Books.
 */


/**
 *  les actions books ...
 */
export const BooksAction = createActionGroup({
    source: 'Books',
    events: {
        'Add Book': props<{ bookId: string }>(),
        'Remove Book': props<{ bookId: string }>(),
    },
});

/**
 * les actions pour l'API book ...
 */
export const BooksApiActions = createActionGroup({
    source: 'Books API',
    events: {
        'Retrived Book List': props<{ books: ReadonlyArray<Book> }>(),
    },
});