// Component for three images of parks
export default function Parks() {
    // Despite Next.js best practice to use <Image /> this works better in terms of the aspect ratio of the images
    return (
        <>
            <img src="/park1.png" alt="Image of mountains" className="self-start w-full h-[25vh] lg:w-[25vw] lg:h-[50vh] object-cover lg:object-top"/>
            <img src="/park2.png" alt="Image of a plateau" className="self-center w-full h-[25vh] lg:w-[25vw] lg:h-[50vh] object-cover lg:object-top" />
            <img src="/park3.png" alt="Image of a dune" className="self-end w-full h-[25vh] lg:w-[25vw] lg:h-[50vh] object-cover lg:object-top" />
        </>
    )
}