const { prisma } = require('./generated/prisma-client')

async function main() {
  const newUser = await prisma.createUser({
    name: 'Fraser'
  })
  console.log({ newUser })

  const allUsers = await prisma.users()
  console.log({ allUsers })
}

main().catch(e => console.error(e))
