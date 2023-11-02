import { createAction, props } from '@ngrx/store';
import { KatalogActionType } from './action.type';

export const katalogStartAction = createAction(KatalogActionType.KATALOG_START);