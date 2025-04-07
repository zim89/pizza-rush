import { useEffect, useState } from 'react'
import { Ingredient } from '@prisma/client'
import { ingredientApi } from '@/entities/ingredient'

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true)
        const ingredients = await ingredientApi.findMany()
        setIngredients(ingredients)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchIngredients()
  }, [])

  return {
    ingredients,
    loading,
  }
}
