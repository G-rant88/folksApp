module.exports = function(sequelize, DataTypes) {
  var savedPost = sequelize.define("savedPost", {
    
    postName: DataTypes.STRING,
    userName: DataTypes.STRING

  });

  savedPost.associate = function(models) {
    savedPost.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });

};

  return savedPost;
};
