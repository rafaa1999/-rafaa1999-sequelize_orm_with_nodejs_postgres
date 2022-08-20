const express=require('express')
const {sequelize,User,Post} =require('./models')

const app=express()

app.use(express.json())


// add new user
app.post( '/users', async(req,res) => {

    const{name,email,role}=req.body

    try {

        const user=await User.create({name,email,role})
        return res.json(user)

    } catch (error) {

        console.log(error)
        return res.status(500).json(error)
        
    }
})

// get all the users
app.get('/users',async(req,res)=>{

    try {

        const users = await User.findAll()
        return res.json(users)

    } catch (error) {
        
        console.log(error)
        return res.status(500).json(error)
    }
})

// get the user by his uuid 
app.get('/users/:uuid',async(req,res)=>{
    const uuid=req.params.uuid
    try {

        const user = await User.findOne({
            where:{uuid},
            include:'post'
        })
        return res.json(user)

    } catch (error) {
        
        console.log(error)
        return res.status(500).json(error)
    }
})
//add posts
app.post('/post',async(req,res)=>{
    const{UseUuid,body}=req.body
    try {
        const user=await User.findOne({where:{uuid:UseUuid}})
        const post=await Post.create({body,userId:user.id}) 
        return res.json(post)
    } catch (error) {

        console.log(error)
        return res.status(500).json(error)
    }

})
// get all posts
app.get('/post',async(req,res)=>{
    try {
        // get all  post with their own user and i use include to see the user and put as to change the attribut User to user 
       const post =await Post.findAll({include:'user'})// or [{model:User,as:'user'}]
        return res.json(post)
    } catch (error) {

        console.log(error)
        return res.status(500).json(error)
    }

})



app.listen({port:5000},async()=>{

    console.log("server is runnning on hhht://localhost:5000")
     await sequelize.authenticate({force:true})
     console.log("database authenticated !")
})

