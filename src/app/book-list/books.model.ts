/**
 *? Le model, l'interface d'un Book.
 * Simple, il n'y a pas grand chose à comprendre ici.
 */

export interface Book {
    id:string;
    volumeInfo:{
        title:string;
        authors: Array<string>;
    };
}