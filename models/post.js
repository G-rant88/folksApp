module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define("post", {
  
    item: {type:DataTypes.STRING, allowNull:false},
    image: DataTypes.STRING,
    price: {type: DataTypes.DECIMAL, allowNull:false},
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
