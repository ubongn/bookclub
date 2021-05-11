
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const verify = async (creds:{email:string, password:string}) => {
   const {email, password} = creds
  const user = await prisma.user.findOne({
      where:{
          email:email
      }
  })
    if(user.password ==password){
        return user
    }

    return null
}

export default verify