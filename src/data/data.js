import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'
import image6 from '../assets/6.png'
import image7 from '../assets/7.png'
import image8 from '../assets/8.png'
import imageAll from '../assets/all.png'

export const data = [
  {
    ind: 1,
    short: 'Карты',
    title: 'Добавляйте карты разных банков.',
    img: image1,
    ion: 'card',
  },
  {
    ind: 2,
    short: 'Переводы',
    title:
      'Переводите деньги в банки Таджикистана и СНГ любым способом: с карт или кошелька.',
    img: image2,
    ion: 'arrow-redo',
  },
  {
    ind: 3,
    short: 'Пополнение',
    title:
      'Пополняйте балансы телефонов Tcell, Babilon Mobile, Beeline, МТС, Мегафон и других операторов СНГ.',
    img: image3,
    ion: 'cash',
  },
  {
    ind: 4,
    short: 'Платежи',
    title:
      'Оплачивайте штрафы ГИБДД, счета за ЖКХ, школу и детский сад по QR-коду.',
    img: image4,
    ion: 'logo-paypal',
  },
  {
    ind: 5,
    short: 'Cashback',
    title: 'Получайте Cashback за покупки.',
    img: image5,
    ion: 'diamond',
  },
  {
    ind: 6,
    short: 'Шаблоны',
    title: 'Создавайте шаблоны платежей и автоплатежи.',
    img: image6,
    ion: 'copy',
  },
  {
    ind: 7,
    short: 'Анализ',
    title:
      'Анализируйте расходы за любой период. Читайте рекомендации по управлению деньгами.',
    img: image7,
    ion: 'information',
  },
  {
    ind: 8,
    short: 'Рекомендации',
    title: 'Узнайте рекомендации по управлению деньгами.',
    img: image8,
    ion: 'logo-reddit',
  },
]

export const data_footer = {
  ind: 9,

  title: '',
  img: imageAll,
}

export const singleCenterBlock = {
  title: 'Кошелёк',
  text: 'Это удобное приложение для платежей, покупок и переводов.',
  action: () => <div>Скачайте, <br />зарегистрируйтесь за 1 минуту по номеру телефона и управляйте деньгами онлайн</div>
    
}
