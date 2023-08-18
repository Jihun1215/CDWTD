import { atom } from "recoil";

const today: Date = new Date();
// const ThisDay = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

export const ThisDayState = atom<Date>({
    key: 'ThisDayState',
    default: today,
});

export const TodayWeekState = atom<string>({
    key: 'TodayWeekState',
    // default: today,
})