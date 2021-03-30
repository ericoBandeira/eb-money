import { Container } from './styles'

export function TransactionTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Trabalho</td>
                        <td>12/04/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - R$1.100,00</td>
                        <td>Taxas fixas</td>
                        <td>17/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}