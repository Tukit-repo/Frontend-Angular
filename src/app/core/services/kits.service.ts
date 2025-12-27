import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Kit {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    tags?: string[];
    description?: string;
}

@Injectable({
    providedIn: 'root'
})
export class KitsService {

    constructor() { }

    getFeaturedKits(): Observable<Kit[]> {
        // Mock data
        return of([
            {
                id: '1',
                name: 'Kit Básico Primaria',
                price: 45000,
                originalPrice: 65000,
                imageUrl: 'assets/kit1.jpg',
                tags: ['Oferta'],
                description: 'Incluye cuadernos, lápices y borrador.'
            },
            {
                id: '2',
                name: 'Super Kit de Arte',
                price: 85000,
                imageUrl: 'assets/kit2.jpg',
                description: 'Pinturas, pinceles, lienzo y paleta.'
            },
            {
                id: '3',
                name: 'Set de Geometría',
                price: 28000,
                originalPrice: 35000,
                imageUrl: 'assets/kit3.jpg',
                tags: ['-20%'],
                description: 'Compás, reglas, transportador.'
            },
            {
                id: '4',
                name: 'Combo Regreso Full',
                price: 150000,
                imageUrl: 'assets/kit4.jpg',
                description: 'Maleta + Cartuchera + Útiles esenciales.'
            }
        ]);
    }

    getKitById(id: string): Observable<Kit | undefined> {
        // Mock
        return of(undefined);
    }
}
