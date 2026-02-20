import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WorkItOut',
    short_name: 'WorkItOut',
    description: 'WorkItOut — simplifying task management with seamless efficiency and mastering your time effectively',
    start_url: '/',
    display: 'standalone',
    orientation: "portrait",
    background_color: '#fff9f0',
    theme_color: '#ff6a1a',
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icons/icon-256x256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
  }
}
