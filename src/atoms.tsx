import { atom } from "recoil";
import { ItemData } from "./model/type";
import { recoilPersist } from "recoil-persist";

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

const { persistAtom } = recoilPersist({
    key: 'todoItem', //원하는 key 값 입력
    storage: localStorage,
  })


export const todolistState = atom<ItemData[]>({
    key: 'todolistState',
    default: [],
    effects_UNSTABLE: [persistAtom],
})

export const thisTodoState = atom<ItemData[]>({
    key: 'thisTodoState',
    default: [],
})