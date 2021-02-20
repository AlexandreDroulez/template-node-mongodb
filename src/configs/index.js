export default {
  port: process.env.PORT || 5001,
  services: {
    mongodb: {
      uri: process.env.MONGO_URI || 'mongodb://root:password@localhost:27017/ApiNodeMongo?authSource=admin',
    },
  },
};
