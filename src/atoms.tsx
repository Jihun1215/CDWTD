import { atom } from "recoil";

const today: Date = new Date();
const weeks = ['일',"월","화","수","목","금","토"];


export const ThisDayState = atom<Date>({
    key: 'ThisDayState',
    default: today,
});

export const WeeksState = atom<string[]>({
    key: 'TodayWeekState',
    default: weeks,
})

export const AllDayState = atom<String[]>({
    key: 'AllDayState',
    default: [],
})