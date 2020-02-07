const messages = [
  'Samuel',
  'Christian',
  'Jesus',
  'douglas',
  'Miguelangel',
  'Yurney',
  'Carolina',
  'xavier',
  'david',
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }
