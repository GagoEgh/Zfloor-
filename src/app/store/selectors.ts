import { createSelector, createFeatureSelector } from '@ngrx/store';
import { KatalogStateInterface } from '../types/katalogState.interface';


const katalogFeatureSelector = createFeatureSelector<KatalogStateInterface>('katalog');
export const covrolins = createSelector(katalogFeatureSelector,(state:KatalogStateInterface)=>state.covrolins);