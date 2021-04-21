// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {
  // Define the third table needed to store the foreign keys
  foreignKey: 'category_id',
    onDelete: 'CASCADE'
  // unique: false
  }),
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'catergory_id',
}),
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany (ProductTag, {
  foreignKey: 'product_tag',
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foreignKey: 'product_tag',
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
