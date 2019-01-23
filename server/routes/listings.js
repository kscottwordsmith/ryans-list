const express = require('express')
const Router = express.Router()

const conn = require('../utils/db')

// Router.get('/example', (req, res, next) => {
//   res.json({
//     example: 'example'
//   })
// })

Router.get('/listings', (req, res, next) => {
  //req.query.catId is where the query was stored, for self-future reference
  const sql = `SELECT * FROM listings WHERE category_id = ?`

  conn.query(sql, [req.query.catId], (error, results, fields) => {
    res.json({
      data: results
    })
  })
})

Router.get('/listings/single', (req, res, next) => {
  const sql = `SELECT * FROM listings WHERE id = ?`
  let data = {
    place: 'holder'
  }

  conn.query(sql, [req.query.id], (error, results, fields) => {
    data.listing = results[0]
    res.json(
      data
    )
  })
})

Router.get('/cities', (req, res, next) => {
  const sql = `SELECT * FROM cities`

  conn.query(sql, (error, results, fields) => {
    res.json({
      cities: results
    })
  })
})

Router.post('/listings', (req, res, next) => {
  const sql = `
  INSERT INTO listings (listing_name, city_id, text, category_id, cover_photo)
  VALUES (?, ?, ?, ?, ?)
  `

  const values= [req.body.listingName, req.body.cityId, req.body.text, req.body.categoryId, req.body.coverPhoto]

  conn.query(sql, values, (error, results, fields) => {
    res.json({
      results: 'Inserted'
    })
  })
})

Router.get('/categories', (req, res, next) => {
  const sql = `SELECT * FROM categories`

  let data = {
    title: 'Home'
  }

  conn.query(sql, (error, results, fields) => {
    data.categories = results.filter(result => result.parent_id === null)
    data.categories.map(cat => {
      let subcat = results.filter(result => {
        if(result.parent_id === cat.id) {
          return result
        }
      })

      cat.subcat = subcat
    })
    res.json(
      data
    )
  })
})

Router.get('/categories/all', (req, res, next) => {
  const sql = `
    SELECT
      categories.slug,
      listings.id,
      listings.listing_name,
      listings.text,
      listings.cover_photo,
      listings.category_id
    FROM categories
    LEFT JOIN listings ON listings.category_id = categories.id AND categories.parent_id = ?
    WHERE listing_name IS NOT NULL
  `

  conn.query(sql, [req.query.catId], (error, results, fields) => {
    res.json({
      data: results
    })
  })
})

module.exports = Router