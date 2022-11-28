import React from "react";
import {CatCard} from "../components/Cat-card";

export const Home = () => {
  const [isShowCard, setIsShow] = React.useState(false);
  const [img, setImg] = React.useState('');
  const [text, setText] = React.useState('');
  const [fact, setFact] = React.useState('');

  const items = [
    {
      img: '1.jpg',
      text: 'Чудо-котик',
      fact: 'Сердце кошки совершает до\u00A0140 ударов в\u00A0минуту, что\u00A0почти вдвое превосходит человеческое.'
    },
    {
      img: '3.jpeg',
      text: 'Котик-очаровашка',
      fact: 'Нормальная температура тела у\u00A0кошек около 38\u00A0градусов. Это чуть больше, чем\u00A0у\u00A0человека.'
    },
    {
      img: '4.jpg',
      text: 'Затаившийся котик',
      fact: 'Для\u00A0управления ухом у\u00A0кошек в\u00A0распоряжении 32\u00A0мышцы. Кошачье ухо поворачивается на\u00A0180\u00A0градусов.'
    },
    {
      img: '2.jpeg',
      text: 'Удивленный котик',
      fact: 'Кошки не\u00A0очень хорошо различают мелкие детали.'
    },
    {
      img: '5.jpg',
      text: 'Котик-уставашка',
      fact: 'Рисунок линий на\u00A0поверхности носа кошки уникален, как\u00A0и\u00A0отпечаток пальца у\u00A0человека. Нет двух одинаковых кошачьих носов!'
    },
    {
      img: '6.jpeg',
      text: 'Котик-валяшка',
      fact: 'Кошки чувствуют запахи в\u00A014\u00A0раз сильнее, чем\u00A0люди. У\u00A0них 80\u00A0миллионов обонятельных рецепторов в\u00A0носу.'
    },
    {
      img: '7.jpeg',
      text: 'Котик-удивляшка',
      fact: 'Вибрисами(усиками) кошка воспринимает мельчайшие колебания воздуха и\u00A0его\u00A0направления.'
    },
    {
      img: '8.jpeg',
      text: 'Котик-милашка',
      fact: 'Жираф, верблюд, лошадь и кошка – это\u00A0животные-иноходцы, у\u00A0которых при ходьбе идут сначала левые ноги, а\u00A0потом правые. Такая ходьба гарантирует скорость, маневренность и тишину.'
    },
  ];

  const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  const show = () => {
    setIsShow(true);

    const number = randomInteger(0, items.length - 1);
    setImg(items[number].img);
    setText(items[number].text);
    setFact(items[number].fact);
  }

  return (
    // <Fragment>
      <div className="content">
        <h1>Какой ты котик сегодня?</h1>
        <button  onClick={show}>
          Узнать
        </button>
        {isShowCard && <CatCard img={img} text={text} fact={fact}/>}
        <a href="https://www.linkedin.com/in/melnikova-nadezhda" className="link-circle">
          <img src="images/linkedin.svg" alt="linkedin"/>
        </a>
      </div>
    // </Fragment>
  )
}
