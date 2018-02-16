module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define("post", {
  
    name: {type:DataTypes.STRING, allowNull:false},
    image: DataTypes.STRING,
    price: {type: DataTypes.INTEGER, allowNull:false},
    description: {type:DataTypes.STRING, allowNull:false}
    
  });

post.associate = function(models) {
    post.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });

};

  return post;
};
