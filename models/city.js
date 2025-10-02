'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('City', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    country_code: { type: DataTypes.STRING(2), defaultValue: 'AR' },
    province: { type: DataTypes.STRING(80), allowNull: false },
    name: { type: DataTypes.STRING(80), allowNull: false },
    slug: { type: DataTypes.STRING(80), allowNull: false, unique: true },
    lat: { type: DataTypes.DECIMAL(10,7), allowNull: false },
    lng: { type: DataTypes.DECIMAL(10,7), allowNull: false },
  }, { tableName: 'cities', underscored: true });
};
