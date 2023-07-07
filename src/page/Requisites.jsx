import CustomLink from '../components/links/CustomLink'
import styles from './styles/Pages.module.scss'

//  Расчетный счет:
//  Наименование учреждения банка:
//

const data = [
  {
    name: 'Реквизиты Полное наименование (согласно учредительным документам):',
    value: 'Общество с ограниченной ответственностью «GLOBAL EDUCATION»',
  },
  {
    name: 'Название компании:',
    value: 'ООО «GLOBAL EDUCATION»',
  },
  {
    name: 'Адрес местонахождения:',
    value: 'г. Бишкек, ул. Чуйкова 94, оф. 1',
  },
  {
    name: 'ИНН:',
    value: '408202210182',
  },
  {
    name: 'Телефоны:',
    value: '+79160373409',
  },
  {
    name: 'Почта:',
    value: 'info@global-edu.kg',
  },
  {
    name: 'Генеральный директор:',
    value: 'SUSHCHEV IGOR GENNADIEVICH',
  },
]
export default function Requisites() {
  return (
    <div className={styles.requisites}>
      <div>
        <CustomLink to={'/'} className="back">
          На Главную
        </CustomLink>
      </div>

      <div className={styles.title}>Реквизиты</div>

      <div className={styles.requisites_content}>
        {data.map((t) => (
          <div className={styles.row} key={t.value}>
            <div className={styles.row_item}>{t.name}</div>
            <div></div>
            <div className={styles.row_item}>{t.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
