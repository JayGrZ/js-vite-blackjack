
/**
 * Esta función retorna la última carta del deck
 * @param {Array<string>} deck 
 * @returns {Array<string>} 
 *
 */

// Esta función me permite tomar una carta
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}