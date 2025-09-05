import React from "react";

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можно добавить логику отправки данных
    console.log("Форма отправлена");
  };

  return (
    <section id="contact" className="body-font relative text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
            Напишите нам
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-neutral-500">
            Нажимая на кнопку "Отправить" вы даете согласие на обработку
            персональных данных и соглашаетесь на политику конфиденциальности
          </p>
        </div>

        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <form onSubmit={handleSubmit} className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="peer w-full rounded-full border-2  bg-stone-950 bg-opacity-40 py-2 px-4 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out border-stone-800 focus:bg-stone-800 "
                  placeholder="Имя"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-6 bg-transparent text-sm leading-7 text-neutral-500 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-focus:left-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-stone-400"
                >
                  Имя *
                </label>
              </div>
            </div>

            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="peer w-full rounded-full border-2  bg-stone-950 bg-opacity-40 py-2 px-4 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out border-stone-800 focus:bg-stone-800 "
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-6 bg-transparent text-sm leading-7 text-neutral-500 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-focus:left-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-stone-400"
                >
                  Почта *
                </label>
              </div>
            </div>

            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  className="peer h-30 w-full resize-none rounded-lg border-2  bg-stone-950 bg-opacity-40 py-2 px-4 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out border-stone-800 focus:bg-stone-800 "
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-6 bg-transparent text-sm leading-7 text-neutral-500 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-focus:left-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-stone-400"
                >
                  Ваше сообщение
                </label>
              </div>
            </div>
            <div className="w-full p-2 flex justify-center">
              <button
                type="submit"
                className="p-6 border-2 cursor-pointer border-white rounded-full backdrop-blur-lg shadow-lg transition duration-200 hover:bg-white hover:text-black lg:m-2 lg:max-w-xs max-w-xs"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
