import { useSelector } from 'react-redux';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { StoresList } from '../StoresList/StoresList';
import { ProductsGrid } from '../ProductsGrid/ProductsGrid';

const ReceivedProdsInfoTabs = () => {

  const receivedItems = useSelector(({ shoppingListReducer }) => shoppingListReducer.receivedItems);
  const receivedStoresData = useSelector(({ shoppingListReducer }) => shoppingListReducer.receivedStoresData);
  const currencyRates = useSelector(({ shoppingListReducer }) => shoppingListReducer.currencyRates); 

  return (
    <Tabs>
      <TabList>
        <Tab>Received Items</Tab>
        <Tab>Stores List</Tab>
      </TabList>

      <TabPanel>
        <ProductsGrid items={receivedItems} currencyRates={currencyRates}/>
      </TabPanel>
      <TabPanel>
        <StoresList storesData={receivedStoresData} />
      </TabPanel>
    </Tabs>
  );
}

export default ReceivedProdsInfoTabs;