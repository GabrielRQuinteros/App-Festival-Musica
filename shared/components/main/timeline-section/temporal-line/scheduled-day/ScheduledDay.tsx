import { DaySchedule } from "@/shared/data/Artists.info";

interface Props {
    daySchedule: DaySchedule;
}

export const ScheduledDay = ( { daySchedule: { day, artists } }: Props ) => {

  const mainArtist = artists.filter( art => art.isMain )[0];  
  const secondaryArtist = artists.filter( art => ! art.isMain )[0];
  
  return (
    <>
      <div className="">
        <h4 className="p-2 bg-zinc-900 rounded-lg my-4">{day}</h4>
      </div>
      <div></div>
      <div className="text-right">
        <div className="font-bold">
          <span>{mainArtist.name}</span>
          <span className="text-zinc-400 ">{ `${mainArtist.time} - ${mainArtist.stage}` }</span>
        </div>
      </div>
      <div></div>
      <div></div>
      <div>
        <span>{secondaryArtist.name}</span>
        <span className="text-zinc-400 ">{`${secondaryArtist.time} - ${secondaryArtist.stage}`}</span>
      </div>
    </>
  );
};
