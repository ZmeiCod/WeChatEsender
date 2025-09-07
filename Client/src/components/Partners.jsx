import logo3 from '../../public/assets/china_motors.png.webp'
import logo4 from '../../public/assets/Chinese_car.png'
import logo5 from '../../public/assets/maxis_cars.png'
import logo6 from '../../public/assets/rucars.png.webp'
import logo7 from '../../public/assets/urbis_trade.png.webp'

export default function Partners() {
  const logos = [ logo3, logo4, logo5, logo6, logo7]; // Можно добавить любые логотипы


  return (
    <div id="partners" className="overflow-hidden w-full">
      {/* Внутренний контейнер, отвечающий за анимацию */}
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Первый набор логотипов */}
        {logos.map((logoSrc, index) => (
          <div key={index} className="mx-4 flex-shrink-0">
            <img src={logoSrc} alt="logo" className="h-80 w-auto" />
          </div>
        ))}
        {logos.map((logoSrc, index) => (
          <div key={index} className="mx-4 flex-shrink-0">
            <img src={logoSrc} alt="logo" className="h-80 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}