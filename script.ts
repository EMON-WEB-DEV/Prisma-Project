import { prisma } from './lib/prisma'

async function main() {
  // Create a new user with a post
  const student = await prisma.student.create({
    data: {
      name: 'Emon',
      email: 'emon@prisma.io',
      role: 'STUDENT',
      createdAt: new Date(),
      courses: {
        create: {
          title: 'Prisma Course 2',
          description: 'This is my 2nd course!',
          createdAt: new Date(),
        },
      },
    },
    include: {
      courses: true,
    },
  })  
  console.log('Created user:', student)


   const teacher = await prisma.teacher.create({
    data: {
      name: 'Sza',
      email: 'sza@prisma.io',
      role: 'INSTRUCTOR',
      subject: 'Prisma',
      createdAt: new Date(),
      
    },
    
  })
  
  console.log('Created user:', teacher)



  // Fetch all users with their posts
  const allUsers = await prisma.student.findMany({
    include: {
      courses: true,
    },
  })
  console.log('All users:', JSON.stringify(allUsers, null, 2))
}



main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })