
/**
 * Esta función retorna el valor de la carta
 *  
 * @param {String} carta
 * @returns {Number} valor de la carta
 *
 */

export const valorCarta = ( carta ) => {
    if (!carta)
    throw new Error('No hay ninguna carta valida');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}