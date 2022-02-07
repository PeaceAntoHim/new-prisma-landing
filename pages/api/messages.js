// import { useRouter } from 'next/router';
import prisma from '../../lib/prisma'

export default async function handle(req, res) {
    // const route = useRouter();
    const result = await prisma.message.create({
    data: {
        ...req.body,
        },
    })
    res.json(result)
    
}


// route.push();
    // router.push("/");
    // return await response.alert('Message sent successfully');





// import {PrismaClient} from '@prisma/client'
// const prisma = new PrismaClient();

// export default async(req, res) => {
//     const data = JSON.parse(req.body)
    
//     const createdMessage = await prisma.message.create({
//         data
//     })

//     res.json(createdMessage)
// }





// export default async function handlerMessage(req, res) {
//     if(req.method === 'POST') {
//         const { name, email, subject, message } = req.body;
//         const data = {
//             name,
//             email,
//             subject,
//             message
//         }
//         const response = await prisma.message.create({
//             data
//         })
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify(response));
//     }   
// }
















// /* This method to made api and then get in index async function */
// export default async(req, res) => {
//     const data = JSON.parse(req.body)

//     const createdMessage = await prisma.message.create({
//         data
//     })

//     res.json(createdMessage)
// }

