/** 
 * Tipo completo de los resultados de búsqueda
*/
export interface SearchItem {
    
    artistName : string,
    artistViewUrl : string,
    artworkUrl30 : string,
    artworkUrl60 : string,
    artworkUrl100 : string,
    collectionArtistId : number,
    collectionArtistName : string,
    collectionCensoredName : string,
    collectionExplicitness : string,
    collectionId : number,
    collectionName : string,
    collectionPrice : number,
    collectionViewUrl : string,
    country : string,
    currency : string,
    discCount : number,
    discNumber : number,
    isStreamable : boolean,
    kind : string,
    previewUrl : string,
    primaryGenreName : string,
    releaseDate : string,
    trackCensoredName : string,
    trackCount : number,
    trackExplicitness : string,
    trackId : number,
    trackName : string,
    trackNumber : string,
    trackPrice : number,
    trackTimeMillis : number,
    trackViewUrl : string,
    wrapperType : string,
    seleccionada : boolean, //para el apaño html
    estado: string // para controlar si es pausa o play

}
/** 
 * Tipo reducido (subconjunto) de los resultados de búsqueda
*/
export interface SearchItemReducido {

artistName : string,//nombre del artista o grupo
artworkUrl100 : string, //imagen del disco o canción
trackName : string,//nombre de la canción
previewUrl : string//enlace a muestra de 30 ''
trackId : number;//id de la canción

}

/**
 * Tipo devuelto por el API json
 */
export interface SearchResult {
 resultCount:number,
 results: SearchItemReducido[]
}