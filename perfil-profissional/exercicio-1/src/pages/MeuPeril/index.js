import { View, Text, Image } from 'react-native'
import {styles} from './styles'

import img from '../../images/1706553489232.jpeg'

function MeuPeril(){
  

  return(
    <View style={styles.area}>
      <Image
      source={img}
      style={styles.imagem}
      />

      <Text style={styles.topicos}>Dados Pessoais</Text>
      <Text>Nome: Nikoly Pereira da Silva</Text>
      <Text>Idade: 21</Text>

      <Text style={styles.topicos}>Formação</Text>
      <Text>FATEC Rubens Lara</Text>

      <Text style={styles.topicos}>Experiencia</Text>
      <Text>Cobramar - telemarketing</Text>
      <Text>CAMPS - maior aprendiz -adm setor de compras</Text>
      <Text>SSE - assistente de compras</Text>

      <Text style={styles.topicos}>Projetos:</Text>
      <Text>ONG Tampinhas do futuro - Desenvolvimento de site institucional e lading page</Text>
      <Text>Desirré - desenvolvimento de site institucional</Text>

    </View>
  )
}


export default MeuPeril;