import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { updateProfile } from '../api/DevTreeAPI'
import DevTreeInput from '../components/DevTreeInput'
import { social } from '../data/social'
import type { SocialNetwork, User } from '../types'
import { isValidURL } from '../utils'

export default function LinkTreeView() {
  const [devTreeLinks, setDevTreeLinks] = useState(social)
  const queryClient = useQueryClient()
  const user: User = queryClient.getQueryData(['user'])!
  const links: SocialNetwork[] = JSON.parse(user.links)

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedLinks = devTreeLinks.map((link) =>
      link.name === e.target.name ? { ...link, url: e.target.value } : link
    )
    setDevTreeLinks(updatedLinks)
  }
  const handleEnableLink = (socialNetwork: string) => {
    const updatedLinks = devTreeLinks.map((link) => {
      if (link.name === socialNetwork) {
        if (isValidURL(link.url)) {
          return { ...link, enabled: !link.enabled }
        } else {
          toast.error('URL no válida')
        }
      }
      return link
    })
    setDevTreeLinks(updatedLinks)

    let updatedItems: SocialNetwork[] = []
    const selectSocialNetwork = updatedLinks.find(
      (link) => link.name === socialNetwork
    )
    if (selectSocialNetwork?.enabled) {
      const id = links.filter((link) => link.id).length + 1
      if (links.some((link) => link.name === socialNetwork)) {
        updatedItems = links.map((link) => {
          if (link.name === socialNetwork) {
            return {
              ...link,
              enabled: true,
              id,
            }
          } else {
            return link
          }
        })
      } else {
        const newItem = {
          ...selectSocialNetwork,
          id,
        }
        updatedItems = [...links, newItem]
      }
    } else {
      const indexToUpdate = links.findIndex(
        (link) => link.name === socialNetwork
      )
      updatedItems = links.map((link) => {
        if (link.name === socialNetwork) {
          return {
            ...link,
            id: 0,
            enabled: false,
          }
        } else if (
          link.id > indexToUpdate &&
          indexToUpdate !== 0 &&
          link.id === 1
        ) {
          return {
            ...link,
            id: link.id - 1,
          }
        } else {
          return link
        }
      })
    }
    queryClient.setQueryData(['user'], (prevData: User) => {
      return {
        ...prevData,
        links: JSON.stringify(updatedItems),
      }
    })
  }

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: () => {
      toast.success('Actualizado correctamente')
    },
  })

  useEffect(() => {
    const updatedData = devTreeLinks.map((item) => {
      const userLink = JSON.parse(user.links).find(
        (link: SocialNetwork) => link.name === item.name
      )
      if (userLink) {
        return { ...item, url: userLink.url, enabled: userLink.enabled }
      }
      return item
    })
    setDevTreeLinks(updatedData)
  }, [])

  return (
    <>
      <div className="space-y-5">
        {devTreeLinks.map((item) => (
          <DevTreeInput
            key={item.name}
            item={item}
            handleUrlChange={handleUrlChange}
            handleEnableLink={handleEnableLink}
          />
        ))}
        <button
          className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded-lg font-bold hover:bg-cyan-500 cursor-pointer"
          onClick={() => mutate(queryClient.getQueryData(['user'])!)}
        >
          Guardar cambios
        </button>
      </div>
    </>
  )
}
