export default function HeroVideo(){
    return (
        <div className="absolute inset-0 overflow-hidden">
            <video 
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover object-center md:object-cover object-center scale-100 md:scale-105 animate-slowZoom">
                <source src="/videos/hero.mp4" type="video/mp4" />

            </video>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60">
            </div>
        </div>
    )
}