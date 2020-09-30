import CounterApp from './CounterApp';
import FormApp from './FormApp';
import ListApp from './ListApp';
import FormAppV2 from './FormAppV2';
import ChildrenApp from './ChildrenApp';
import FunctionalApp from './FunctionalApp';
import CallingAPIApp from './CallingAPIApp';
import ContextApp from './ContextApp';
import CustomerInvoiceFunctional from './CustomerInvoice/CustomerInvoiceFunctional';
import CustomerInvoice from './CustomerInvoiceV2/CustomerInvoice';
import Timer from './Timer/Timer';

const apps = {
  counter: CounterApp,
  form: FormApp,
  formV2: FormAppV2,
  list: ListApp,
  children: ChildrenApp,
  functionalApp: FunctionalApp,
  callingAPI: CallingAPIApp,
  context: ContextApp,
  customerinvoice: CustomerInvoiceFunctional,
  customerinvoiceV2: CustomerInvoice,
  timer: Timer,
  // timerV2: Timer
};

export default apps;
