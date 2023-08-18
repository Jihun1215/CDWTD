export type DateWeekData = {
    weekName: String; 
};
  
export type Datedatatype = {
    currentDate: Date;
    setCurrentDate :React.Dispatch<React.SetStateAction<Date>>;

}

export type WeatherData = {
    main: {
        temp: number;
      };
      weather: {
        icon: string;
      }[];
  }