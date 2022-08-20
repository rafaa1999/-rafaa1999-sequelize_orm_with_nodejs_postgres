'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}) {
      // define association here
      this.hasMany(Post,{foreignKey:'userId',as:'post'})
    }
// function that offers to us that the user couldn't see the id
    toJSON(){
      return{...this.get(),id:undefined}
    }


  }
  User.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4

    },
    name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:'user must be a name'},
        notEmpty:{msg:'name must not be empty'}
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:'user must be a email'},
        notEmpty:{msg:'email must not be empty'},
        isEmail:{msg:'must be a valide email address'}
      }
    },
    role: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:'user must be a role'},
        notEmpty:{msg:'role must not be empty'}
      }
    }
  }, {
    sequelize,
    tableName:"user",
    modelName: 'User',
  });
  return User;
};