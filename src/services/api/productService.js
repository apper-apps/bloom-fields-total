import { toast } from 'react-toastify'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

class ProductService {
  constructor() {
    this.apperClient = null
    this.tableName = 'product'
    this.initializeClient()
  }

  initializeClient() {
    if (typeof window !== 'undefined' && window.ApperSDK) {
      const { ApperClient } = window.ApperSDK
      this.apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      })
    }
  }

  async getAll() {
    try {
      await delay(300)
      
      if (!this.apperClient) {
        this.initializeClient()
      }
      
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "Owner" } },
          { field: { Name: "category" } },
          { field: { Name: "price" } },
          { field: { Name: "description" } },
          { field: { Name: "images" } },
          { field: { Name: "in_stock" } },
          { field: { Name: "care_instructions" } }
        ],
        orderBy: [
          {
            fieldName: "Name",
            sorttype: "ASC"
          }
        ]
      }
      
      const response = await this.apperClient.fetchRecords(this.tableName, params)
      
      if (!response.success) {
        console.error(response.message)
        toast.error(response.message)
        return []
      }
      
      // Transform database fields to match UI expectations
      return response.data.map(product => ({
        Id: product.Id,
        name: product.Name,
        category: product.category,
        price: parseFloat(product.price),
        description: product.description,
        images: product.images ? product.images.split(',') : [],
        inStock: product.in_stock,
        careInstructions: product.care_instructions,
        tags: product.Tags
      }))
    } catch (error) {
      console.error("Error fetching products:", error)
      toast.error("Error loading products")
      return []
    }
  }

  async getById(id) {
    try {
      await delay(200)
      
      if (!this.apperClient) {
        this.initializeClient()
      }
      
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "Owner" } },
          { field: { Name: "category" } },
          { field: { Name: "price" } },
          { field: { Name: "description" } },
          { field: { Name: "images" } },
          { field: { Name: "in_stock" } },
          { field: { Name: "care_instructions" } }
        ]
      }
      
      const response = await this.apperClient.getRecordById(this.tableName, id, params)
      
      if (!response.success) {
        console.error(response.message)
        toast.error(response.message)
        throw new Error('Product not found')
      }
      
      if (!response.data) {
        throw new Error('Product not found')
      }
      
      // Transform database fields to match UI expectations
      const product = response.data
      return {
        Id: product.Id,
        name: product.Name,
        category: product.category,
        price: parseFloat(product.price),
        description: product.description,
        images: product.images ? product.images.split(',') : [],
        inStock: product.in_stock,
        careInstructions: product.care_instructions,
        tags: product.Tags
      }
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error)
      throw error
    }
  }

  async getByCategory(category) {
    try {
      await delay(250)
      
      if (!this.apperClient) {
        this.initializeClient()
      }
      
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "Owner" } },
          { field: { Name: "category" } },
          { field: { Name: "price" } },
          { field: { Name: "description" } },
          { field: { Name: "images" } },
          { field: { Name: "in_stock" } },
          { field: { Name: "care_instructions" } }
        ],
        where: [
          {
            FieldName: "category",
            Operator: "EqualTo",
            Values: [category]
          }
        ],
        orderBy: [
          {
            fieldName: "Name",
            sorttype: "ASC"
          }
        ]
      }
      
      const response = await this.apperClient.fetchRecords(this.tableName, params)
      
      if (!response.success) {
        console.error(response.message)
        toast.error(response.message)
        return []
      }
      
      // Transform database fields to match UI expectations
      return response.data.map(product => ({
        Id: product.Id,
        name: product.Name,
        category: product.category,
        price: parseFloat(product.price),
        description: product.description,
        images: product.images ? product.images.split(',') : [],
        inStock: product.in_stock,
        careInstructions: product.care_instructions,
        tags: product.Tags
      }))
    } catch (error) {
      console.error("Error fetching products by category:", error)
      toast.error("Error loading products")
      return []
    }
  }

  async getFeatured() {
    try {
      await delay(200)
      
      if (!this.apperClient) {
        this.initializeClient()
      }
      
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "Owner" } },
          { field: { Name: "category" } },
          { field: { Name: "price" } },
          { field: { Name: "description" } },
          { field: { Name: "images" } },
          { field: { Name: "in_stock" } },
          { field: { Name: "care_instructions" } }
        ],
        orderBy: [
          {
            fieldName: "Name",
            sorttype: "ASC"
          }
        ],
        pagingInfo: {
          limit: 6,
          offset: 0
        }
      }
      
      const response = await this.apperClient.fetchRecords(this.tableName, params)
      
      if (!response.success) {
        console.error(response.message)
        toast.error(response.message)
        return []
      }
      
      // Transform database fields to match UI expectations
      return response.data.map(product => ({
        Id: product.Id,
        name: product.Name,
        category: product.category,
        price: parseFloat(product.price),
        description: product.description,
        images: product.images ? product.images.split(',') : [],
        inStock: product.in_stock,
        careInstructions: product.care_instructions,
        tags: product.Tags
      }))
    } catch (error) {
      console.error("Error fetching featured products:", error)
      toast.error("Error loading featured products")
      return []
    }
  }

  async searchProducts(query) {
    try {
      await delay(300)
      
      if (!this.apperClient) {
        this.initializeClient()
      }
      
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "Owner" } },
          { field: { Name: "category" } },
          { field: { Name: "price" } },
          { field: { Name: "description" } },
          { field: { Name: "images" } },
          { field: { Name: "in_stock" } },
          { field: { Name: "care_instructions" } }
        ],
        whereGroups: [
          {
            operator: "OR",
            subGroups: [
              {
                conditions: [
                  {
                    fieldName: "Name",
                    operator: "Contains",
                    values: [query]
                  }
                ],
                operator: "OR"
              },
              {
                conditions: [
                  {
                    fieldName: "description",
                    operator: "Contains",
                    values: [query]
                  }
                ],
                operator: "OR"
              },
              {
                conditions: [
                  {
                    fieldName: "category",
                    operator: "Contains",
                    values: [query]
                  }
                ],
                operator: "OR"
              }
            ]
          }
        ],
        orderBy: [
          {
            fieldName: "Name",
            sorttype: "ASC"
          }
        ]
      }
      
      const response = await this.apperClient.fetchRecords(this.tableName, params)
      
      if (!response.success) {
        console.error(response.message)
        toast.error(response.message)
        return []
      }
      
      // Transform database fields to match UI expectations
      return response.data.map(product => ({
        Id: product.Id,
        name: product.Name,
        category: product.category,
        price: parseFloat(product.price),
        description: product.description,
        images: product.images ? product.images.split(',') : [],
        inStock: product.in_stock,
        careInstructions: product.care_instructions,
        tags: product.Tags
      }))
    } catch (error) {
      console.error("Error searching products:", error)
      toast.error("Error searching products")
      return []
    }
  }

  async filterProducts(filters) {
    try {
      await delay(300)
      
      if (!this.apperClient) {
        this.initializeClient()
      }
      
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "Owner" } },
          { field: { Name: "category" } },
          { field: { Name: "price" } },
          { field: { Name: "description" } },
          { field: { Name: "images" } },
          { field: { Name: "in_stock" } },
          { field: { Name: "care_instructions" } }
        ],
        where: [],
        orderBy: [
          {
            fieldName: "Name",
            sorttype: "ASC"
          }
        ]
      }
      
      // Add category filter
      if (filters.category && filters.category !== 'all') {
        params.where.push({
          FieldName: "category",
          Operator: "EqualTo",
          Values: [filters.category]
        })
      }
      
      // Add price filters
      if (filters.minPrice !== undefined) {
        params.where.push({
          FieldName: "price",
          Operator: "GreaterThanOrEqualTo",
          Values: [filters.minPrice.toString()]
        })
      }
      
      if (filters.maxPrice !== undefined) {
        params.where.push({
          FieldName: "price",
          Operator: "LessThanOrEqualTo",
          Values: [filters.maxPrice.toString()]
        })
      }
      
      // Add stock filter
      if (filters.inStock) {
        params.where.push({
          FieldName: "in_stock",
          Operator: "EqualTo",
          Values: [true]
        })
      }
      
      const response = await this.apperClient.fetchRecords(this.tableName, params)
      
      if (!response.success) {
        console.error(response.message)
        toast.error(response.message)
        return []
      }
      
      // Transform database fields to match UI expectations
      return response.data.map(product => ({
        Id: product.Id,
        name: product.Name,
        category: product.category,
        price: parseFloat(product.price),
        description: product.description,
        images: product.images ? product.images.split(',') : [],
        inStock: product.in_stock,
        careInstructions: product.care_instructions,
        tags: product.Tags
      }))
    } catch (error) {
      console.error("Error filtering products:", error)
      toast.error("Error filtering products")
      return []
    }
  }

  async getCategories() {
    try {
      if (!this.apperClient) {
        this.initializeClient()
      }
      
      const params = {
        fields: [
          { field: { Name: "category" } }
        ],
        groupBy: ["category"]
      }
      
      const response = await this.apperClient.fetchRecords(this.tableName, params)
      
      if (!response.success) {
        console.error(response.message)
        // Return default categories if API fails
        return ['bouquets', 'single-stems', 'potted-plants']
      }
      
      const categories = [...new Set(response.data.map(p => p.category).filter(Boolean))]
      return categories.length > 0 ? categories : ['bouquets', 'single-stems', 'potted-plants']
    } catch (error) {
      console.error("Error fetching categories:", error)
      // Return default categories if error occurs
      return ['bouquets', 'single-stems', 'potted-plants']
    }
  }

  async getPriceRange() {
    try {
      if (!this.apperClient) {
        this.initializeClient()
      }
      
      const params = {
        fields: [
          { field: { Name: "price" } }
        ],
        orderBy: [
          {
            fieldName: "price",
            sorttype: "ASC"
          }
        ]
      }
      
      const response = await this.apperClient.fetchRecords(this.tableName, params)
      
      if (!response.success) {
        console.error(response.message)
        // Return default range if API fails
        return { min: 0, max: 100 }
      }
      
      if (!response.data || response.data.length === 0) {
        return { min: 0, max: 100 }
      }
      
      const prices = response.data.map(p => parseFloat(p.price)).filter(p => !isNaN(p))
      
      if (prices.length === 0) {
        return { min: 0, max: 100 }
      }
      
      return {
        min: Math.min(...prices),
        max: Math.max(...prices)
      }
    } catch (error) {
      console.error("Error fetching price range:", error)
      // Return default range if error occurs
      return { min: 0, max: 100 }
    }
  }
}

export default new ProductService()