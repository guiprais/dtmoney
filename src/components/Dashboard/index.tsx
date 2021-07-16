import { Summary } from '../Summary';
import TransactionsTable from '../TransactionsTable';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Summary />
        <TransactionsTable />
      </Container>
    </div>
  );
}
