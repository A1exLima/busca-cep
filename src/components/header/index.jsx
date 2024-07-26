import { ContainerHeader, Content } from './style'
import { SiCodeblocks } from 'react-icons/si'
export function Header() {
  return (
    <ContainerHeader>
      <Content>
        <div>
          <SiCodeblocks />
          <p>BUSCA CEP</p>
        </div>
      </Content>
    </ContainerHeader>
  )
}
