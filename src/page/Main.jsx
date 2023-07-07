import ContentBlock from '../components/block/ContentBlock'
import ImageBlock from '../components/block/ImageBlock'
import logo1 from '../assets/app_store_logo.png'
import logo2 from '../assets/31.png'
import logo3 from '../assets/2.jpg'
import logo4 from '../assets/44.jpeg'
import logo5 from '../assets/4.png'
import logo_header from '../assets/pic_header.png'
import TextBlock from '../components/block/TextBlock'
import Title from '../components/block/Title'
import Text from '../components/block/Text'
import styles from './styles/Pages.module.scss'
// repeat(6, 1fr)

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.under_header}>
        <div className={styles.under_header__item_1}>
          <img src={logo_header} alt="logo_main" />
        </div>
        <div className={styles.under_header__item}>
          <div className={styles.under_header__title}>
            Профессионалы на финансовом рынке
          </div>
          <div className={styles.under_header__text}>
            Наше кредо: индивидуальный подход, профессионализм, высокое качество{' '}
            <br />
            работы, конфиденциальность.
          </div>
          <div className={styles.under_header__logo}>
            <img src={logo1} alt="logo" />
          </div>
        </div>
      </div>

      <ContentBlock bg="sky_blue" direction="row" gap={16} gridColumn="1/7">
        <ImageBlock size="normal" radius={true} src={logo2} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: ' center',
            gap: '40px',
          }}
          className={styles.border}
        >
          <Title size="32px" position="right">
            Инвестиции
          </Title>
          <Text size="24px">
            {' '}
            Надежная защита ваших финансов <br /> и вложений
          </Text>
        </div>
      </ContentBlock>

      <ContentBlock bg="sky_blue" direction="row" gap={16} gridColumn="1/7">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: ' center',
            gap: '40px',
          }}
          className={styles.border}
        >
          <Title size="32px" position="right">
            Переводы
          </Title>
          <Text size="24px"> Банки, карты, платёжные системы</Text>
        </div>
        <ImageBlock size="normal" radius={true} src={logo3} />
      </ContentBlock>

      <ContentBlock bg="sky_blue" direction="row" gap={0} gridColumn="1/7">
        <ImageBlock size="normal" radius={true} src={logo4} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: ' center',
            gap: '40px',
          }}
          className={styles.border}
        >
          <Title size="32px" position="center">
            Консультации
          </Title>
          <Text size="24px">
            {' '}
            Аудит и будущая стратегия развития Вашего бизнеса
          </Text>
        </div>
      </ContentBlock>

      <ContentBlock bg="sky_blue" direction="row" gap={0} gridColumn="1/7">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: ' center',
            gap: '40px',
          }}
          className={styles.border}
        >
          <Title size="32px" position="center">
            Информационно-аналитические методы работы
          </Title>
          <Text size="24px" position="center">
            Передовые методики, <br /> мировые тренды,
            <br /> лучшие практики <br />
          </Text>
        </div>
        <ImageBlock size="normal" radius={true} src={logo5} />
      </ContentBlock>
    </div>
  )
}
