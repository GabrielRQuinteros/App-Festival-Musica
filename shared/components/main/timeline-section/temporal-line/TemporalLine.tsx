import { DaySchedule, timelineData } from "@/shared/data/Artists.info";
import { MiddleTimeLine } from "./middle-time-line/MiddleTimeLine"
import { ScheduledDay } from "./scheduled-day/ScheduledDay"

export const TemporalLine = () => {

    const schedule :DaySchedule[]=timelineData;

    return (
        <div className="relative mt-5 bg-zinc-800 py-4 px-2 text-zinc-200 rounded-lg">
            <MiddleTimeLine/>
            <div className="grid grid-cols-2 gap-8">
                { schedule.map( daySchedule =>  (<ScheduledDay daySchedule={ daySchedule } key={ daySchedule.day } />) ) }
            </div>
        </div>
    );
};
