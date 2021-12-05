const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/reddit', {
  logging: false
})

const {STRING, INTEGER} = Sequelize

const Post = db.define('post', {
    id: {
        type: STRING,
        allowNull: false,
        primaryKey:true
    },
    title: {
        type: STRING,
        allowNull: false,
    },
    thumbnail: {
        type: STRING,
        allowNull: false,
    },
    permalink: {
        type: STRING,
        allowNull: false,
    },
    ups: {
        type: INTEGER,
        allowNull: false,
    }
})

module.exports = {db, Post}