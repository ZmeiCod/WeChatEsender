import React from "react";
import Key from "../../public/assets/icons/Key.svg";
import User from "../../public/assets/icons/User.svg";
import Wechat from "../../public/assets/icons/WeChat.svg";
import Setting from "../../public/assets/icons/Setting.svg";

export default function Services() {
  return (
    <section className="py-4 md:py-8 px-4 md:px-8">
      <h2 className="my-8 text-center text-3xl tracking-tight lg:text-4xl">
        Наши решения
      </h2>
      <div className="container mx-auto px-4 flex flex-wrap">
        {/* Карточка 1 */}
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
          <div className="w-full h-full p-6 bg-gradient-to-b from-stone-900 to-stone-950 rounded-lg shadow-lg transition duration-500 hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-850 hover:scale-105">
            <div className=" relative mx-auto mb-4 flex items-center justify-center w-15 h-15 rounded-full transition duration-500">
              <img src={User} alt="" />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-gray-200">
              Регистрация номера
            </h3>
            <p className="text-gray-400">
              Мы точно знаем, как 100% зарегистрировать и оплатить китайский
              номер телефона. За это время мы помогли сотням клиентов и
              заслужили репутацию проверенного партнёра.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
          <div className="w-full h-full p-6 bg-gradient-to-b from-stone-900 to-stone-950 rounded-lg shadow-lg transition duration-500 hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-850 hover:scale-105">
            <div className=" relative mx-auto mb-4 flex items-center justify-center w-15 h-15 rounded-full transition duration-500">
              <img src={Setting} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-200">
              Оплата и продление номера
            </h3>
            <p className="text-gray-400">
              Мы сопровождаем клиента на всём протяжении действия номера: от
              месяца до пяти лет. Если нужен продлённый срок — всё решается
              быстро и без проблем.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
          <div className="w-full h-full p-6 bg-gradient-to-b from-stone-900 to-stone-950 rounded-lg shadow-lg transition duration-500 hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-850 hover:scale-105">
            <div className=" relative mx-auto mb-4 flex items-center justify-center w-15 h-15 rounded-full transition duration-500">
              <img src={Wechat} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-200">
              Регистрация WeChat
            </h3>
            <p className="text-gray-400">
              Чтобы пользоваться eSender, необходим WeChat. Но с нами процесс
              становится максимально простым — мы делаем всё за вас под ключ и
              выдаём вам готовый номер с аккаунтом.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
          <div className="w-full h-full p-6 bg-gradient-to-b from-stone-900 to-stone-950 rounded-lg shadow-lg transition duration-500 hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-850 hover:scale-105">
            <div className=" relative mx-auto mb-4 flex items-center justify-center w-15 h-15 rounded-full transition duration-500">
              <img src={Key} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-200">
              Регистрация / восстановление мастер аккаунта
            </h3>
            <p className="text-gray-400">
              Мы в курсе всех обновлений и требований к мастер-аккаунтам
              Lixiang, Zeekr, Avatr, Voyah и поможем вам без ошибок подключить
              или восстановить доступ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
