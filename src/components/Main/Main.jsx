import React from "react";
import "./main.css";
import girl1 from "../../assets/girl1.png";
import girl2 from "../../assets/girl2.png";
import largelogo from "../../assets/largelogo.png";

export default function Main() {
  return (
    <>
      <main>
        {/* first side */}
        <div className="main_container">
          <p className="main_wrapper_tag">
            Профессиональные юридические услуги{" "}
          </p>

          <div className="main_wrapper">
            <img src={girl1} alt="girl1" className="main_wrapper_img" />
            <img src={girl2} alt="girl2" className="main_wrapper_img" />
          </div>
        </div>
        {/* first side end */}

        <div className="main_second_side">
          <div>
            <p className="main_second_p1">Адвокат</p>
            <p className="main_second_p2">Сивкова Екатерина Алексеевна </p>
            <br />
            <p className="main_second_p3">
              Имею многолетний опыт работы по следующим направлениям: семейные
              споры, наследственные споры, любые вопросы по недвижимости
              (узаконение, сделки), арбитраж, корпоративные споры,
              административные и уголовные дела.
            </p>
            <br />
            <i className="main_second_p4">
              -“Моя работа - защита ваших прав и законных интересов по букве
              закона”
            </i>
          </div>

        <img src={largelogo} alt="largelogo" className="main_second-imgs"/>

  <div>
            <p className="main_second_p1">Юрист</p>
            <p className="main_second_p2">Абдрахманова Алина Рамилевна</p>
            <br />
            <p className="main_second_p3">
              Стаж работы более 15 лет в различных отраслях права: гражданского,
              арбитражного, наследственного, семейного и др. Услуги предоставляю
              во всех судебных инстанциях Республики Башкортостан и по всем
              регионам России
            </p>
            <br />
            <i className="main_second_p4">
              -“Приоритетом моей профессиональной деятельности являются интересы
              доверителя!”
            </i>
          </div>

        </div>


      
      </main>
    </>
  );
}
