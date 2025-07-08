import mongoose from "mongoose";

const connectDb = async (url) => {
  if (!url) {
    throw new Error("Mongodb url is not found, please chack your env file");
  }


  try {
    await mongoose.connect(url)
    .then(() => {
        console.log('Mongodb database connect successfully');
    })
    
    
  } catch (error) {
    throw new Error('Mongodb connect failed');
  }
};


export default connectDb;