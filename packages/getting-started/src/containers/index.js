import CounterApp from './CounterApp';
import FormApp from './FormApp';
import ListApp from './ListApp';
import FormAppV2 from './FormAppV2';
import ChildrenApp from './ChildrenApp';
import FunctionalApp from './FunctionalApp';
import CallingAPIApp from './CallingAPIApp';
import ContextApp from './ContextApp';
import CustomerInvoiceFunctional from './CustomerInvoice/CustomerInvoiceFunctional';

const apps = {
  counter: CounterApp,
  form: FormApp,
  formV2: FormAppV2,
  list: ListApp,
  children: ChildrenApp,
  functionalApp: FunctionalApp,
  callingAPI: CallingAPIApp,
  context: ContextApp,
  customerinvoice: CustomerInvoiceFunctional
};

export default apps;
