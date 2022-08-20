'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      //add user id as foreignKey
      this.belongsTo(User,{foreignKey:'userId',as:'user'})
    }

    //to hide the id and the userid for the user (who use the api)
    toJSON(){
      return{...this.get(),id:undefined,userId:undefined}
    }
  }
  Post.init({
      uuid:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
  
      },
  
    body: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'post',
    modelName: 'Post',
  });
  return Post;
};