import User from "../schema/user-schema.js";

export const userSignup = async(request,response) =>{
    try{
        const exists = await User.findOne({username:request.body.username});
        if(exists){
            return response.status(401).json({message:"user already exsits" });
        }
        const user = (request.body);
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({message:user})
    } catch(error){
        response.status(200).json({ message: error.message })
    }
}

export const userLogin = async(request,response) => {
    try{
        const username = request.body.Username;
        const password = request.body.Password;
        let user = await User.findOne({username:username,password:password});
        if (user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }
    }catch(error){
        response.status(500).json('Error: ', error.message);
    }
}