import { atom } from "recoil";

const ThisDay: Date = new Date();
const weeks = ['일',"월","화","수","목","금","토"];

// const 
const today = `${ThisDay.getFullYear()}-${ThisDay.getMonth() + 1}-${ThisDay.getDate()}`;


export const ThisDayState = atom<Date>({
    key: 'ThisDayState',
    default: ThisDay,
});

export const WeeksState = atom<string[]>({
    key: 'TodayWeekState',
    default: weeks,
})

// export const TodayState = atom<string>({
//     key: 'ClickDayState',
//     default: today,
// })


// 여기 
export const AllDayState = atom<String[]>({
    key: 'AllDayState',
    default: [],
})

export const ClickDayState = atom<string>({
    key: 'ClickDayState',
    default: today,
})

export const onClickTodoMakeInputState = atom<boolean>({
    key: 'onClickTodoMakeInputState',
    default: false,
})