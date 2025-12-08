import Image from "next/image"

export const HeaderLogo = () => {
  return (
    <>
        <div className="flex p-2 gap-2 items-center">
                <Image  src={'/images/logo-inverted.png'}
                        width={350}
                        height={328}
                        alt="logo"
                        className="w-[50px]"
                    />
                <div className={`font-bold text-2xl` } >
                    <span>Rock:</span>
                    <span className="text-sky-900" >Fest</span>
                </div>
            </div>
    </>
  )
}
