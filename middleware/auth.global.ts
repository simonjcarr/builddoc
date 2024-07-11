import { useAuth } from 'vue-clerk'

export default defineNuxtRouteMiddleware((to) => {
  const { isSignedIn } = useAuth()

  const protectedPages = ['dashboard', 'organization']
  const publicPages = ['sign-in', 'sign-up']

  const isProtectedPage = protectedPages.includes(to.name as string)
  const isPublicPage = publicPages.includes(to.name as string)

  if (isSignedIn.value && isPublicPage)
    return navigateTo('/')

  if (!isSignedIn.value && isProtectedPage)
    return navigateTo('/sign-in')
})
