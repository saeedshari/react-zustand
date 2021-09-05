import create from "zustand";
import {devtools, persist} from 'zustand/middleware'

let settingStore = (set)=> ({
    dark: false,
    toggleDarkMode:()=> set((state)=> ({dark: !state.dark}))
})

settingStore = devtools(settingStore) // for redux devtools
settingStore = persist(settingStore, { name:"user_setting" }) 
//persist not removed with refresh
//for save in local storage with key=user_setting
// blacklist kay is for not persisted

export const useSettingStore = create(settingStore);

let peopleStore = (set)=> ({
    people:["Ali Sadri", "Mehai Karimi"],
    addPerson:(person)=> set((state)=>({people:[...state.people, person]}))
})

export const usePeopleStore = create( devtools(peopleStore))