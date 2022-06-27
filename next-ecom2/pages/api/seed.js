import nc from "next-connect"
import Product from "../../model/Product";
import db from "../../utilis/db/db"
import data from "../../utilis/data"
const handler = nc()

handler.get( async (req,res)=>{
    await db.connect();
    await Product.deleteMany()
    await Product.insertMany(data.shirts)
    await db.disconnect()
    res.send({message: "seeded succesfully"})
})
export default handler;