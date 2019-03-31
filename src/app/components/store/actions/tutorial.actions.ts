// SECTION 1
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from '../../../models/tutorial.model';

// SECTION 2
export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

// SECTION 3
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;
    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;
    constructor(public payload: Tutorial) {}
}

// SECTION 4
export type Actions = AddTutorial | RemoveTutorial;
