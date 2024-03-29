import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => { 

    test('debe de regresar el estado inicial', () => { 


       const { result } =  renderHook( () => useFetchGifs( 'one Punch'));
       const { images, isLoading } = result.current;

       expect( images.length ).toBe( 0 );
       expect( isLoading ).toBeTruthy();
       // const useFetchGifs();
     });

     test('debe d eretornar un arreglo de imagenes y el isLoading en false', async () => { 

        const { result } =  renderHook( () => useFetchGifs( 'one Punch'));

        await waitFor(
            () => expect( result.current.images.length  ).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

      })

 });