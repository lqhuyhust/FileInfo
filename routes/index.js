const categories = require('../controllers/categoriesController')
const types = require('../controllers/typesController')
const softwares = require('../controllers/softwaresController')
const soft_categories = require('../controllers/softCategoriesController')
const platforms = require('../controllers/platformController')
const companies = require('../controllers/companiesController')

module.exports = (url, request, response) => {
  const categoryController = categories(response)
  const typeController = types(response)
  const softwareController = softwares(response)
  const softCategoryController = soft_categories(response)
  const platformsController = platforms(response)
  const companiesController = companies(response)

  switch (url.pathname) {
    case '/categories':
      if (request.method === 'GET') {
        const catId = url.searchParams.get('id')
        if (catId !== null) {
          categoryController.handleGetCategory(catId)
        } else categoryController.handleGetAllCategories()
      }
      break
    case '/types':
      if (request.method === 'GET') {
        const catId = url.searchParams.get('cat_id')
        const alpha = url.searchParams.get('alpha')
        const fileId = url.searchParams.get('file_id')
        const softId = url.searchParams.get('soft_id')

        if (fileId !== null) {
          typeController.handleGetTypesByFile(fileId)
        } else if (catId !== null) {
          typeController.handleGetTypesByCategory(catId)
        } else if (softId !== null) {
          typeController.handleGetTypesBySoftware(softId)
        } else if (alpha !== null) {
          if (alpha == 1) {
            typeController.handleGetTypesBySpecial()
          } else {
            typeController.handleGetTypesByAlphabet(alpha)
          }
        } typeController.handleGetAllTypes()
      }
      break
    case '/softwares':
      if (request.method === 'GET') {
        const catId = url.searchParams.get('cat_id')
        const comId = url.searchParams.get('com_id')
        const id = url.searchParams.get('id')
        const alpha = url.searchParams.get('alpha')

        if (id !== null) {
          softwareController.handleGetSoftware(id)
        } else if (catId !== null) {
          softwareController.handleGetSoftwareByCategory(catId)
        } else if (comId !== null) {
          softwareController.handleGetSoftwareByCompany(comId)
        } else if (alpha !== null) {
          if (alpha == 1) {
            softwareController.handleGetSoftwaresBySpecial()
          } else {
            softwareController.handleSoftwaresByAlphabet(alpha)
          }
        } else softwareController.handleGetAllSoftwares()
      }
      break
    case '/soft-categories':
      if (request.method === 'GET') {
        const catId = url.searchParams.get('id')
        if (catId !== null) {
          softCategoryController.handleGetSoftCategory(catId)
        } else softCategoryController.handleGetAllSoftCategories()
      }
      break
    case '/platforms':
      if (request.method === 'GET') {
        const softId = url.searchParams.get('id')
        if (softId !== null) {
          platformsController.handleGetPlatformOfSoftware(softId)
        }
      }
      break
    case '/companies':
      if (request.method === 'GET') {
        const softId = url.searchParams.get('id')
        companiesController.handleGetAllCompanies()
        // if (softId !== null) {
        //   platformsController.handleGetPlatformOfSoftware()
        // }
      }
      break
    case '/files':
      if (request.method === 'GET') {
        typeController.handleAllFiles()
        // if (softId !== null) {
        //   platformsController.handleGetPlatformOfSoftware()
        // }
      }
      break
    default:
      response.end(
        JSON.stringify({ status: 405, message: 'Method not allowed' }),
      )
  }
}
