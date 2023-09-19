import React, {useState} from 'react';
import {
  Card,
  Layout,
  Page,
  ResourceList,
  ResourceItem,
  TextStyle,
  Stack,
  Pagination
} from '@shopify/polaris';
import NotificationPopup from '@assets/components/NotificationPopup/NotificationPopup';
import '@assets/styles/components/Notifications/notifications.scss';

/**
 * Just render a sample page
 *
 * @return {React.ReactElement}
 * @constructor
 */
export default function Notifications() {
  const [sortValue, setSortValue] = useState('DATE_MODIFIED_DESC');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleOnClosePopup = id => {
    console.log('item vs id: ' + id);
  };

  return (
    <Page fullWidth title="Notifications" subtitle="List of sales notifcation from Shopify">
      <Layout>
        <Layout.Section>
          <Card>
            <ResourceList
              resourceName={{
                singular: 'notification',
                plural: 'notifications'
              }}
              sortOptions={[
                {label: 'Newest update', value: 'DATE_MODIFIED_DESC'},
                {label: 'Oldest update', value: 'DATE_MODIFIED_ASC'}
              ]}
              sortValue={sortValue}
              selectedItems={selectedItems}
              onSelectionChange={setSelectedItems}
              selectable
              items={[
                {
                  id: '106',
                  url: '/',
                  firstName: 'John Doe',
                  country: 'United States',
                  city: 'New York',
                  productName: 'Puffer Jacket With Hidden Hood',
                  productImage:
                    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                },
                {
                  id: '107',
                  url: '/',
                  firstName: 'John Crud',
                  country: 'United States',
                  city: 'New York',
                  productName: 'Puffer Jacket With Sssa',
                  productImage:
                    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                },
                {
                  id: '108',
                  url: '/',
                  firstName: 'Hold Jacker',
                  country: 'United States',
                  city: 'New York',
                  productName: 'Puffer Jacket With SsasdasdaIJ',
                  productImage:
                    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                }
              ]}
              onSortChange={selected => {
                setSortValue(selected);
              }}
              renderItem={({id, url, firstName, city, country, productName, productImage}) => (
                <ResourceItem
                  id={id}
                  url={url}
                  accessibilityLabel={`View details for ${firstName}`}
                >
                  <Stack distribution="equalSpacing" alignment="leading">
                    <Stack.Item>
                      <NotificationPopup
                        id={id}
                        firstName={firstName}
                        city={city}
                        country={country}
                        productName={productName}
                        productImage={productImage}
                        onClosePopup={handleOnClosePopup}
                      />
                    </Stack.Item>
                    <Stack.Item>
                      <TextStyle>From September 18, 2023</TextStyle>
                    </Stack.Item>
                  </Stack>
                </ResourceItem>
              )}
            />
          </Card>
          <Pagination hasNext hasPrevious />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
