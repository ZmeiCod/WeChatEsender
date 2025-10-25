import React from "react";

const processItems = [
  "Качественные фотографии",
  "Адрес электронной почты",
  "Номер телефона для связи"
];

const ProcessBlock = () => {
  return (
    <div id="process" className="max-w-4xl mx-auto p-6">

      <h2 className="text-center text-xl md:text-2xl font-semibold mb-8 px-4">
        Вам не придётся разбираться в приложении или проходить регистрацию
        самостоятельно. Мы полностью оформляем номер за вас: выбираем тариф (от
        1 месяца до 5 лет), загружаем все данные и активируем eSIM.
      </h2>

      <p className="mb-4 text-center">
        От вас потребуется только три вещи:
      </p>

      <div className="flex justify-center gap-8 flex-wrap">
        {processItems.map((item, index) => (
          <div
            key={index}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white flex items-center justify-center p-4 text-center"
          >
            <p className="text-sm md:text-base">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessBlock;