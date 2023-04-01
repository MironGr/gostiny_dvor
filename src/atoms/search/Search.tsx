import styles from './Search.module.scss'

const SearchIcon = () => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8609 2C15.7521 2 19.7218 5.96968 19.7218 10.8609C19.7218 15.7521 15.7521 19.7218 10.8609 19.7218C5.96968 19.7218 2 15.7521 2 10.8609C2 5.96968 5.96968 2 10.8609 2ZM10.8609 17.7527C14.6681 17.7527 17.7527 14.6681 17.7527 10.8609C17.7527 7.05267 14.6681 3.96909 10.8609 3.96909C7.05267 3.96909 3.96909 7.05267 3.96909 10.8609C3.96909 14.6681 7.05267 17.7527 10.8609 17.7527ZM19.2147 17.8226L22 20.6069L20.6069 22L17.8226 19.2147L19.2147 17.8226Z" fill="#353752"/>
  </svg>
}

export const Search = () => {
  return <div className={styles.wrapper}>
    <input
      type='text' 
      placeholder="Поиск"
    />
    <SearchIcon />
  </div>
}