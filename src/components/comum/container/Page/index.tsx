import { ContainerContent } from "./styles"

interface PageContentProps {
    children: React.ReactNode
}

export const PageContent = ({ children }: PageContentProps) => {
  return (
    <ContainerContent>{children}</ContainerContent>
  )
}
