import { SideMenu } from "@/components/SideMenu"
import { redirect } from 'next/navigation'

export default function Login() {

  redirect('https://www.canva.com/design/DAFzhEAEsJk/Ro-hQhhsBTJemdRvBTHTzA/edit?utm_content=DAFzhEAEsJk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')

  return (
    <>
      <SideMenu />
      <main>
        <h1>Hello WOrld</h1>
      </main>
    </>
  )
}
