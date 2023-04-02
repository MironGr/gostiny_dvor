export const Burger = (props: any) => {
  return <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{
      cursor: 'pointer'
    }}
  >
    <rect y="4" width="24" height="2" fill="#353752"/>
    <rect y="11" width="24" height="2" fill="#353752"/>
    <rect y="18" width="24" height="2" fill="#353752"/>
  </svg>
}

export const BurgerClose = (props: any) => {
  return <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{
      cursor: 'pointer'
    }}
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3837 16L9.53501 11.1513L11.1513 9.53502L16 14.3838L20.8487 9.53502L22.465 11.1513L17.6162 16L22.465 20.8487L20.8487 22.465L16 17.6162L11.1513 22.465L9.53501 20.8487L14.3837 16Z" 
      fill="#353752"/>
    </svg>
  </svg>
}