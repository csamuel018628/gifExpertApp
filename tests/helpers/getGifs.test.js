import { getGifs } from "../../src/helpers/getGifs";



describe('Pruebas en GetGifs()', () => { 

    test('debe de retorna run arreglo de gifs', async() => { 
        const gifs = await getGifs('One Punch');
        console.log(gifs);
     });
 });