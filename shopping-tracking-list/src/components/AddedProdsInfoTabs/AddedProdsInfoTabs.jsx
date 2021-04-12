import { useSelector } from 'react-redux';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProductsGrid } from '../ProductsGrid/ProductsGrid';
import { StoresList } from '../StoresList/StoresList';
import { AddItemForm } from '../AddItemForm/AddItemForm';

const AddedProdsInfoTabs = () => {

  const addedItems = useSelector(({ shoppingListReducer }) => shoppingListReducer.addedItems);
  const addedStoresData = useSelector(({ shoppingListReducer }) => shoppingListReducer.addedStoresData);
  const currencyRates = useSelector(({ shoppingListReducer }) => shoppingListReducer.currencyRates);

  return (
    <Tabs>
      <TabList>
        <Tab>Add Item</Tab>
        <Tab>Bought Items</Tab>
        <Tab>Stores List</Tab>
      </TabList>

      <TabPanel>
        <AddItemForm />
      </TabPanel>
      <TabPanel>
        <ProductsGrid items={addedItems} currencyRates={currencyRates} />
      </TabPanel>
      <TabPanel>
        <StoresList storesData={addedStoresData} />
      </TabPanel>
    </Tabs>
  );
}

export default AddedProdsInfoTabs;