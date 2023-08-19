export type DateWeekData = {
    weekName: String; 
};
  
export type Weekstype = {
    currentDate: Date;
    setCurrentDate :React.Dispatch<React.SetStateAction<Date>>;
}

export type AllDaytype = {
    currentDate: Date;
    setCurrentDate :React.Dispatch<React.SetStateAction<Date>>;
    ClickedDate: Date | undefined,
     setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>,
}

export type WeatherData = {
    main: {
        temp: number;
      };
      weather: {
        icon: string;
      }[];
  }