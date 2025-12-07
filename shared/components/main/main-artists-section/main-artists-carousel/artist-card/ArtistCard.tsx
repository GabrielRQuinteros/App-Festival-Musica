import { ArtistInfo } from "@/shared/data/Artists.info"


interface Props {
    artistInfo: ArtistInfo
}


export const ArtistCard = ( { artistInfo: { imageUrl, name, presentationDescription } }: Props) => {
  return (
        <div className="min-w-[80%] md:min-w-[40%]">
            <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                style={{ backgroundImage: `url(${imageUrl}` }} >
            </div>
            <h5 className="mt-2">{name}</h5>
            <h6 className="mt-2 text-lg" >{presentationDescription}</h6>
        </div>
  )
}
